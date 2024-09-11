import OrderHistory from "@/app/_components/_spot-trade/OrderHistory";
import SpotTradeData from "@/app/_components/_spot-trade/SpotTradeData";
import SpotTrading from "@/app/_components/_spot-trade/SpotTrading";

function page() {
  return (
    <div className=" bg-primary-1000 py-12 px-2">
      <div className="flex flex-col gap-y-2">
        <SpotTrading />
        <SpotTradeData />
        <OrderHistory />
      </div>
    </div>
  );
}

export default page;
