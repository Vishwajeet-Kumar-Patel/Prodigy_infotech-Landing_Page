import React, { useState } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const PaymentForm = () => {
  const [amount, setAmount] = useState(0);

  const handlePayment = async (token) => {
    try {
      // Send the token and payment amount to the backend
      const response = await axios.post('/api/payment', {
        token,
        amount,
      });

      // Handle the response (e.g., display success message, update UI)
      console.log(response.data);
    } catch (error) {
      console.error('Payment failed:', error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Payment Form</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <StripeCheckout
        token={handlePayment}
        stripeKey="YOUR_STRIPE_PUBLISHABLE_KEY"
        amount={amount * 100} // Stripe expects amount in cents
        currency="Indian Rupee"
      />
    </div>
  );
};

export default Payment;
