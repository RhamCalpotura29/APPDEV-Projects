import React from 'react';

const Receipt = ({ total, amountPaid, change }) => {
  return (
    <div className="receipt">
      <h2>Receipt</h2>
      <p>Total: ${total.toFixed(2)}</p>
      <p>Amount Paid: ${amountPaid.toFixed(2)}</p>
      <p>Change: ${change.toFixed(2)}</p>
      <p>Thank you for your purchase!</p>
    </div>
  );
};

export default Receipt;
