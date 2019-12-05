import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../hooks"
import "../styles/Stripe.css"
toast.configure();

export function Stripe () {
    const {cart, total} = useCart()

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://ry7v05l6on.sse.codesandbox.io/checkout",
      { token, cart }
    );
    const { status } = response.data;
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
    console.log(response)
  }

  return (
           cart.map(product => (
            <div key={"cart-product" + product.id} className="stripeb">
            <StripeCheckout
            stripeKey="pk_test_0rdbLJpLl8NAja6TAjzY1EVO00pMamARW1"
            token={handleToken}
            name="MINT"
            description='"The Future is MINT"'
            amount={total * 100}
            // bitcoin
            // alipay
            // billingAddress
            // shippingAddress
            // allowRememberMe
          />
          </div>
        ))
      
      
  );
}

