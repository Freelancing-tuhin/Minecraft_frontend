import React from "react";

// const RAZORPAY_KEY_ID = "rzp_live_g7ZPoD35smdm8e";
const RAZORPAY_KEY_ID = "rzp_test_WOvg0OAJCnGejI";

const RazorPayBtn = () => {
  const handlePayment = async (order_id: string) => {
    // if (
    //   typeof window !== "undefined" &&
    //   typeof (window as any).Razorpay === "undefined"
    // ) {
    //   alert("Razorpay SDK not loaded. Please check your internet connection.");
    //   return;
    // }

    // if (!localStorage.getItem("email")) {
    //   alert("Please login first.");
    //   return;
    // }

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: 1 * 100,
      currency: "INR",
      name: "HighTable",
      order_id: order_id,
      description: "Transaction to book a table",
      image: "/images/High_Table_Logo.png",
      handler: (response: any) => {
        console.log(response);
      },
      prefill: {
        name: "userName",
        email: "email",
        contact: "userPhone",
        table_booking_id: order_id,
      },
      theme: {
        color: "#F37254",
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();

    razorpay.on("payment.failed", (response: any) => {
      alert(`Payment failed! Reason: ${response.error.description}`);
      console.error(response.error);
    });
  };

  return (
    <div
      onClick={() => handlePayment("order_QEeAVJGIaHq2sy")}
      className="bg-red-500 text-white p-9 hover:bg-black hover:text-white w-56"
    >
      RazorPayBtn
    </div>
  );
};

export default RazorPayBtn;
