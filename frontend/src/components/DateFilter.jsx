import { useState } from "react";

const DateFilter = ({ onApply }) => {
  const today = new Date().toISOString().split("T")[0];

  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);

  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200 flex flex-wrap gap-4 items-end mb-6">
      <div>
        <label className="block text-sm font-medium mb-1">
          Start Date
        </label>

        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          End Date
        </label>

        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
      </div>

      <button
        onClick={() => onApply(startDate, endDate)}
        className="bg-teal-800 text-white px-5 py-2 rounded-lg hover:bg-teal-900"
      >
        Apply Filter
      </button>
    </div>
  );
};

export default DateFilter;