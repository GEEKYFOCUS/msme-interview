import { TiStarOutline } from "react-icons/ti";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Spinner from "./Spinner";
import CryptoCard from "./CryptoCard";

export default function Crypto() {
  // curl --request GET \
  //      --url https://api.coingecko.com/api/v3/coins/markets \
  //      --header 'accept: application/json'

  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") || 1;
  const page = Number(currentPage);
  const currentCategory = searchParams?.get("currencyCode") || "USD";
  const currency = currentCategory.toLowerCase();
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.log(error);
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currency, page]);

  if (loading) {
    return (
      <Suspense>
        <Spinner />;
      </Suspense>
    );
  }

  return (
    <Suspense>
      <div>
        {errorMessage ? (
          <p className="text-white">{errorMessage}</p>
        ) : (
          <CryptoCard cryptoData={cryptoData} />
        )}
      </div>
    </Suspense>
  );
}
