"use client";
import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

export default function TradeChart() {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // Initialize the chart
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 400,
      layout: {
        backgroundColor: "#000",
        textColor: "#333",
      },
      grid: {
        vertLines: {
          color: "#e1e1e1",
        },
        horzLines: {
          color: "#e1e1e1",
        },
      },
      crosshair: {
        mode: 1, // 1 for Normal mode
      },
      priceScale: {
        borderColor: "#ccc",
      },
      timeScale: {
        borderColor: "#ccc",
      },
    });

    // Store chart instance
    chartRef.current = chart;

    // Add candlestick series
    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "green",
      downColor: "red",
      borderDownColor: "red",
      borderUpColor: "green",
      wickDownColor: "red",
      wickUpColor: "green",
    });

    // Fetch and set data
    const fetchChartData = async () => {
      const now = Math.floor(Date.now() / 1000);
      const thirtyDaysAgo = now - 30 * 24 * 60 * 60;

      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=${thirtyDaysAgo}&to=${now}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        }
      );

      const data = await response.json();
      if (!data || !data.prices) {
        console.error("API response is invalid or missing 'prices'");
        return;
      }

      // Convert data for candlestick series
      const chartData = data.prices.map(([timestamp, price]) => ({
        time: Math.floor(timestamp / 1000), // Convert milliseconds to seconds
        open: price - Math.random() * 100, // Simulate open
        high: price + Math.random() * 100, // Simulate high
        low: price - Math.random() * 100, // Simulate low
        close: price + Math.random() * 50, // Simulate close
      }));

      candlestickSeries.setData(chartData);
    };

    fetchChartData();

    // Resize chart on window resize
    const handleResize = () => {
      if (chartRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
          height: 400,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      chartRef.current?.remove();
    };
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <div
        ref={chartContainerRef}
        className="relative w-full h-[400px] min-h-[300px]"
      />
    </div>
  );
}
