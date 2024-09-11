import BuyBtc from "./BuyBtc";
import OrderHistoryData from "./OrderHistoryData";
import SellBtc from "./SellBtc";

function OrderHistory() {
  return (
    <div className="grid md:grid-cols-[2fr_1fr] grid-cols-1 grid-rows-2 h-auto gap-3">
      <OrderHistoryData />

      <BuyBtc />
      <SellBtc />
    </div>
  );
}

export default OrderHistory;
