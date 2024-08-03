import React, { useState } from "react";

export default function Expence() {
  const [fooditem, setFooditem] = useState([]);
  const [item, setItem] = useState(null);
  const [amount, setAmount] = useState();

  const handelclick = () => {
    const newFoodName = { name: item, itemamount: Number(amount) };

    setFooditem([...fooditem, newFoodName]);
    setItem("");
    setAmount(0);
  };

  const itemHandelChange = (e) => {
    setItem(e.target.value);
  };
  const priceHandelChange = (e) => {
    setAmount(e.target.value);
  };

  const clearHandelClick = () => {
    setFooditem([]);
  };

  const total = fooditem.reduce((acc, item) => acc + item.itemamount, 0);

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">Expense Tracker</h1>
      </div>

      <div className="mb-4 ">
        <div className="mb-2">
          <label className="block text-gray-700">Item Name</label>
          <input
            type="text"
            value={item}
            onChange={itemHandelChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label className="block text-gray-700">Item Amount</label>
          <input
            type="number"
            value={amount}
            onChange={priceHandelChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      </div>

      <div className="flex justify-between mb-4">
        <button
          onClick={handelclick}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Item
        </button>
        <button
          onClick={clearHandelClick}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Clear All
        </button>
      </div>

      <div className="mb-4">
        <ul className="list-disc pl-5">
          {fooditem.map((item, index) => (
            <li key={index} className="text-gray-800">
              {item.name} - {item.itemamount}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-right">
        <p className="text-lg font-semibold">Total: {total}</p>
      </div>
    </div>
  );
}
