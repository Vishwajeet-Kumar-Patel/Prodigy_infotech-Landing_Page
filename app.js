// app.js
const express = require('express');
const app = express();
const port = 3000; // Change this to your desired port number

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/payment', async (req, res) => {
  try {
    const { token, amount } = req.body;

    // Create a charge using the Stripe API
    const charge = await stripe.charges.create({
      amount,
      currency: 'USD',
      source: token.id,
      description: 'Example charge',
    });

    // Handle successful payment
    // You can perform additional actions here (e.g., updating the database, sending email notifications, etc.)

    res.json({ success: true, charge });
  } catch (error) {
    console.error('Payment failed:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
