// import { Clock, ArrowDown, ArrowUp } from "lucide-react";

// const transactions = [
//   { id: 1, type: "credit", amount: 250, date: "Mar 15, 2025" },
//   { id: 2, type: "debit", amount: 75, date: "Mar 14, 2025" },
//   { id: 3, type: "credit", amount: 100, date: "Mar 13, 2025" },
//   { id: 4, type: "debit", amount: 30, date: "Mar 12, 2025" },
// ];

// const TransactionHistory = () => {
//   return (
//     <div className="mt-6 bg-gradient-to-r from-black to-gray-800 p-6 rounded-2xl shadow-lg text-white transition-all duration-500 w-[94%] ">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="text-lg font-medium flex items-center">
//           <Clock className="w-5 h-5 mr-2" /> Transaction History
//         </h3>
//         <span className="text-sm text-gray-400">Last 7 Days</span>
//       </div>

//       {/* Mobile View (List) */}
//       <div className="md:hidden">
//         {transactions.map((txn) => (
//           <div
//             key={txn.id}
//             className="flex justify-between items-center bg-gray-700 p-3 rounded-lg mb-2"
//           >
//             <div className="flex items-center">
//               {txn.type === "credit" ? (
//                 <ArrowDown className="text-green-400 w-5 h-5 mr-2" />
//               ) : (
//                 <ArrowUp className="text-red-400 w-5 h-5 mr-2" />
//               )}
//               <span className="text-sm">{txn.date}</span>
//             </div>
//             <span
//               className={`text-sm font-medium ${
//                 txn.type === "credit" ? "text-green-400" : "text-red-400"
//               }`}
//             >
//               ${txn.amount}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* Desktop View (Table) */}
//       <div className="hidden md:block">
//         <table className="w-full text-left">
//           <thead>
//             <tr className="border-b border-gray-600">
//               <th className="p-2 text-gray-400">Date</th>
//               <th className="p-2 text-gray-400">Type</th>
//               <th className="p-2 text-gray-400 text-right">Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {transactions.map((txn) => (
//               <tr key={txn.id} className="border-b border-gray-700">
//                 <td className="p-2">{txn.date}</td>
//                 <td className="p-2">
//                   <span
//                     className={`px-3 py-1 rounded-md text-xs ${
//                       txn.type === "credit" ? "bg-green-600" : "bg-red-600"
//                     }`}
//                   >
//                     {txn.type === "credit" ? "Credit" : "Debit"}
//                   </span>
//                 </td>
//                 <td className="p-2 text-right font-medium">
//                   <span
//                     className={`${
//                       txn.type === "credit" ? "text-green-400" : "text-red-400"
//                     }`}
//                   >
//                     ${txn.amount}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TransactionHistory;


import { Clock, ArrowDown, ArrowUp } from "lucide-react";

const transactions = [
  { id: 1, type: "credit", amount: 250, date: "Mar 15, 2025", desc: "Freelance Payment" },
  { id: 2, type: "debit", amount: 75, date: "Mar 14, 2025", desc: "Online Purchase" },
  { id: 3, type: "credit", amount: 100, date: "Mar 13, 2025", desc: "Refund" },
  { id: 4, type: "debit", amount: 30, date: "Mar 12, 2025", desc: "Food Delivery" },
];

const TransactionHistory = () => {
  return (
    <div className="mt-6 bg-gradient-to-r from-black to-gray-800 p-6 rounded-2xl shadow-lg text-white transition-all duration-500 w-[94%] ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold flex items-center">
          <Clock className="w-5 h-5 mr-2" /> Transaction History
        </h3>
        <span className="text-sm text-gray-400">Last 7 Days</span>
      </div>

      {/* Mobile View (Card-style list) */}
      <div className="md:hidden space-y-4">
        {transactions.map((txn) => (
          <div
            key={txn.id}
            className="flex items-center justify-between bg-gray-700 p-4 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            <div className="flex items-center">
              {txn.type === "credit" ? (
                <ArrowDown className="text-green-400 w-6 h-6 mr-3" />
              ) : (
                <ArrowUp className="text-red-400 w-6 h-6 mr-3" />
              )}
              <div>
                <p className="text-sm font-medium">{txn.desc}</p>
                <span className="text-xs text-gray-400">{txn.date}</span>
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

      {/* Desktop View (Grid Layout) */}
      <div className="hidden md:grid grid-cols-3 gap-4">
        {transactions.map((txn) => (
          <div
            key={txn.id}
            className="p-4 rounded-lg bg-gray-700 shadow-md flex flex-col space-y-2 hover:scale-105 transition-transform"
          >
            <div className="flex items-center">
              {txn.type === "credit" ? (
                <ArrowDown className="text-green-400 w-5 h-5 mr-2" />
              ) : (
                <ArrowUp className="text-red-400 w-5 h-5 mr-2" />
              )}
              <span className="text-sm">{txn.date}</span>
            </div>
            <p className="text-sm text-gray-300">{txn.desc}</p>
            <span
              className={`text-lg font-semibold ${
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
