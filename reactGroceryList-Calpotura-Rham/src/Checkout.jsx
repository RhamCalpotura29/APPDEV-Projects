import React, { useState } from 'react';
import Receipt from './Receipt';

const Checkout = ({ cart, items, total, onBack }) => {
  const [amountPaid, setAmountPaid] = useState('');
  const [isPaid, setIsPaid] = useState(false);
  const [change, setChange] = useState(0);

  const handlePayment = () => {
    const paidAmount = parseFloat(amountPaid);

    if (paidAmount >= total) {
      setChange(paidAmount - total);
      setIsPaid(true); 
    } else {
      alert("Insufficient amount. Please enter an amount equal to or greater than the total.");
    }
  };

  return (
    <div className="checkout">
      <h2>Payment</h2>
      <p>Total to pay: ${total.toFixed(2)}</p>
      <input
        type="number"
        placeholder="Enter amount"
        value={amountPaid}
        onChange={(e) => setAmountPaid(e.target.value)}
      />
      <div>
        <button onClick={onBack} className="back-button">Back</button>
        <button onClick={handlePayment} className="payment-button">Pay Now</button>
      </div>
      
      {isPaid && (
        <div className="modal-overlay">
          <div className="modal-content">
            <Receipt cart={cart} items={items} total={total} amountPaid={parseFloat(amountPaid)} change={change} />
            <button onClick={() => setIsPaid(false)} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
