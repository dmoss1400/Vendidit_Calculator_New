// src/App.js
import React, { useState } from 'react';


function App() {
  // Example state to hold the values for the calculator
  const [price, setPrice] = useState(0);
  const [commission, setCommission] = useState(0);

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleCommissionChange = (e) => {
    setCommission(e.target.value);
  };

  const calculateFinalPrice = () => {
    return price * (1 + commission / 100);
  };

  return (
    <div className="App">
      <h1>Vendidit Auction Calculator</h1>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={handlePriceChange}
        />
      </div>
      <div>
        <label>Commission (%):</label>
        <input
          type="number"
          value={commission}
          onChange={handleCommissionChange}
        />
      </div>
      <div>
        <h2>Final Price: ${calculateFinalPrice()}</h2>
      </div>
    </div>
  );
}

export default App;
