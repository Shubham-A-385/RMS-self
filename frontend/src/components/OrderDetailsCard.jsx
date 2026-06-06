import {
  Clock3,
  Wallet,
} from "lucide-react";

const OrderDetailsCard = ({
  tableNo,
  orderDate,
  totalAmount,
  discount,
  paidAmount,
  paymentMethod,
  dueAmount,
  staffName,
  status = "Completed",
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">

      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b bg-slate-50">

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 font-bold flex items-center justify-center">
            {tableNo}
          </div>

          <h4 className="font-semibold text-lg">
            Table {tableNo}
          </h4>
        </div>

        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-sm text-gray-500">
            <Clock3 size={16} />
            {orderDate}
          </span>

          <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">
            {status}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          <div>
            <p className="text-xs uppercase text-gray-500">
              Total
            </p>

            <h5 className="font-bold text-lg">
              ₹ {totalAmount}
            </h5>
          </div>

          <div>
            <p className="text-xs uppercase text-gray-500">
              Discount
            </p>

            <h5 className="font-bold text-lg">
              ₹ {discount}
            </h5>
          </div>

          <div>
            <p className="text-xs uppercase text-gray-500">
              Paid
            </p>

            <h5 className="font-bold text-lg text-teal-800">
              ₹ {paidAmount}
            </h5>
          </div>

          <div>
            <p className="text-xs uppercase text-gray-500">
              Method
            </p>

            <h5 className="font-semibold flex items-center gap-1">
              <Wallet size={16} />
              {paymentMethod}
            </h5>
          </div>

          <div>
            <p className="text-xs uppercase text-gray-500">
              Due
            </p>

            <h5 className="font-bold text-lg text-red-500">
              ₹ {dueAmount}
            </h5>
          </div>

          <div>
            <p className="text-xs uppercase text-gray-500">
              Staff
            </p>

            <h5 className="font-semibold">
              {staffName}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsCard;