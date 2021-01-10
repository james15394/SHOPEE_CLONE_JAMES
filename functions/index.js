import functions from "firebase-functions";
import cors from "cors";
import express from "express";

const { AppsOutlined } = require("@material-ui/icons");
const stripe = require("stripe")(
  "sk_test_51Ho9GrCZCNBMhcHLdWbI22quVzwFQRf5QzVRzpeJTJnN2a2SGYsCIMKtwfawi9V98OOP6jdX0WT8Qcy0sRjHVB7u00GwmwsPMv"
);
const app = express();

//middlewares
app.use(express.json());
app.use(cors({ origin: true }));

//routes

app.get("/", (req, res) => res.status(200).send("heeeloooo"));
app.post("/create-payment-intent", async (req, res) => {
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen
exports.api = functions.https.onRequest(app);
