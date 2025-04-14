import { Clock, ArrowDown, ArrowUp } from "lucide-react";

const transactions = [
  {
    id: 1,
    type: "credit",
    payer: "amit",
    receiver: "afzal",
    amount: 250,
    date: "Mar 15, 2025",
    desc: "Freelance Payment",
  },
  {
    id: 2,
    type: "debit",
    payer: "afzal",
    receiver: "rana",
    amount: 75,
    date: "Mar 14, 2025",
    desc: "Online Purchase",
  },
  {
    id: 3,
    type: "credit",
    payer: "wasim",
    receiver: "afzal",
    amount: 100,
    date: "Mar 13, 2025",
    desc: "Refund",
  },
  {
    id: 4,
    type: "debit",
    payer: "afzal",
    receiver: "amit",
    amount: 30,
    date: "Mar 12, 2025",
    desc: "Food Delivery",
  },
];

const TransactionHistory = () => {
  return (
    <div className="mt-6 mb-9 bg-gradient-to-r from-black to-gray-800 p-6 rounded-2xl shadow-lg text-white transition-all duration-500 w-[94%] ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold flex items-center">
          <Clock className="w-5 h-5 mr-2" /> Transaction History
        </h3>
        <span className="text-sm text-gray-400">All Payments</span>
      </div>

      {/* Mobile View (Card-style list) */}
      <div className=" space-y-4">
        {transactions
          .slice()
          .reverse()
          .map((txn) => (
            <div
              key={txn.id}
              className="flex items-center justify-between bg-gray-700 p-4 rounded-lg shadow-md hover:scale-[1.01] transition-transform"
            >
              <div className="flex items-center">
                {txn.type === "credit" ? (
                  <ArrowDown className="text-green-400 w-6 h-6 mr-3" />
                ) : (
                  <ArrowUp className="text-red-400 w-6 h-6 mr-3" />
                )}
                <div>
                  <p className="text-sm font-medium">
                    {txn.type === "debit"
                      ? txn.receiver.toUpperCase()
                      : txn.payer.toUpperCase()}
                  </p>
                  <span className="text-xs text-gray-400">
                    {txn.desc} {","} {txn.date.split(",")[0]}
                  </span>
                </div>
              </div>
              <span
                className={`text-base font-semibold ${
                  txn.type === "credit" ? "text-green-400" : "text-red-400"
                }`}
              >
                ${txn.amount}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
