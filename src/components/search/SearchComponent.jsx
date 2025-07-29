import React from "react";

function SearComponent() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-[800px] max-w-5xl mx-auto -mt-10 relative z-10">
      <form className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Search</label>
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-3xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Country</label>
          <select className="border border-gray-300 rounded-3xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="">Select Country</option>
            <option value="eg">Egypt</option>
            <option value="us">USA</option>
            <option value="fr">France</option>
            <option value="jp">Japan</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Check-in</label>
          <input
            type="date"
            className="border border-gray-300 rounded-3xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="button"
          className="text-gray-500 hover:text-red-600 text-sm underline mt-6"
        >
          Clear Filters
        </button>
        <button
          type="submit"
          className="bg-red-600 text-white rounded-3xl px-4 py-2 mt-6 hover:bg-red-700 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearComponent;
