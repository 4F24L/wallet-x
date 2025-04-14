import { Clock, ArrowDown, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../api";
import { useLocation } from "react-router-dom";

const TransactionHistory = () => {
  const [taxns, setTaxns] = useState([]);
  const [error, setError] = useState(null); // Add an error state to handle API errors

  const location = useLocation();
  
  function nameCapital(name){
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    
    // Format the date as "12:15 April 14"
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      month: "long",
      day: "2-digit",
    }).format(date);
  
    return formattedDate;
  }

  useEffect(() => {
    async function fetchHistory() {
      try {
        const result = await api.get(`/api/v1/account/history`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setTaxns(result?.data?.list || []);
        setError(null); // Reset error if the request is successful
      } catch (err) {
        console.error(err);
        setError("Failed to load transaction history. Please try again later.");
      }
    }

    fetchHistory();
  }, [location.pathname]);

  return (
    <div className="m-6 mb-9 bg-gradient-to-r from-black to-gray-800 p-6 rounded-2xl shadow-lg text-white transition-all duration-500 w-[94%]">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold flex items-center">
          <Clock className="w-5 h-5 mr-2" /> Transaction History
        </h3>
        <span className="text-sm text-gray-400">All Payments</span>
      </div>

      {/* Error message display */}
      {error && <div className="text-center text-red-400 mb-4">{error}</div>}

      {/* Mobile View (Card-style list) */}

      { taxns.length === 0 ? <div className="sub-heading sm:text-xl text-center">No transactions to show </div> : <div className="space-y-4">
        {taxns.map((txn, index) => (
          <div
            key={index} // Use _id for unique key
            className="flex items-center justify-between bg-gray-700 p-4 rounded-lg shadow-md hover:scale-[1.01] transition-transform"
          >
            <div className="flex items-center">
              {txn?.type === "credit" ? (
                <ArrowDown className="text-green-400 w-6 h-6 mr-3" />
              ) : (
                <ArrowUp className="text-red-400 w-6 h-6 mr-3" />
              )}
              <div>
                <p className="text-sm font-medium">
                  {txn?.type === "debit" ? nameCapital(txn?.receiver) : nameCapital(txn?.payer)}
                </p>
                <span className="text-xs text-gray-400">
                  {nameCapital(txn?.note)}, {formatDate(txn?.date)}
                </span>
              </div>
            </div>
            <span
              className={`text-base font-semibold ${
                txn?.type === "credit" ? "text-green-400" : "text-red-400"
              }`}
            >
              ${txn?.amount}
            </span>
          </div>
        ))}
      </div>}
    </div>
  );
};

export default TransactionHistory;
