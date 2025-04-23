import React from "react";
import { api } from "../../../../utils";

interface StallData {
  id: string;
  ticketPrice?: number;
  dates: number;
  area: string;
  quantity: number;
  ticketName: string;
  _id: string;
}

interface PaymentData {
  _id: string;
  userId: string;
  eventId: string;
  ticketId: string;
  amountPaid: number;
  paymentStatus: "Pending" | "Completed" | "Failed" | "Refunded";
  ticketsCount: number;
  transactionId: string | null;
  refundId: string | null;
  orderId: string | null;
  booking_status: "Pending" | "Success" | "Canceled";
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface StallListProps {
  data: StallData[];
  payments: PaymentData[];
}

const RAZORPAY_KEY_ID = "rzp_test_WOvg0OAJCnGejI";

const StallList = ({ data, payments = [] }: StallListProps) => {
  const handlePaymentRazorPay = async (order_id: string, bookingId: string) => {
    console.log("=====>bookingId", bookingId);
    const options = {
      key: RAZORPAY_KEY_ID,
      amount: 1 * 100,
      currency: "INR",
      name: "HighTable",
      order_id: order_id,
      description: "Transaction to book a table",
      image: "/images/High_Table_Logo.png",
      handler: async (response: any) => {
        console.log(response);
        const payload = {
          bookingId: bookingId,
          transactionId: response.razorpay_payment_id,
        };
        const result = await api.booking.updateBooking(payload);
        console.log("=====>payment status", result);
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

  const handleBook = async (stall: StallData) => {
    try {
      const payload = {
        userId: "67e2b75a886e962459042cc9",
        eventId: "6808ba3e9f70d1521e87b33d",
        ticketId: stall?._id,
        ticketsCount: 1,
        receipt: "REC123359",
      };

      const response = await api.booking.createBooking(payload);
      console.log("======>response", response);
      if (response?.payment) {
        handlePaymentRazorPay(response?.payment?.id, response?.result?._id);
      }
    } catch (error) {
      console.error("Booking error:", error);
    }
  };

  const getButtonForStall = (stall: StallData) => {
    // Find if there's any payment for this stall
    const paymentForStall = payments.find(
      (payment) => payment.ticketId === stall._id
    );

    if (!paymentForStall) {
      // No payment exists for this stall - show Book Now
      return (
        <div
          onClick={() => handleBook(stall)}
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            width: "100%",
            marginTop: "15px",
            fontSize: "16px",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Book Now
        </div>
      );
    } else if (
      paymentForStall.transactionId &&
      paymentForStall.booking_status === "Success"
    ) {
      return (
        <div
          onClick={() => handleViewInvoice(paymentForStall)}
          style={{
            backgroundColor: "#4caf50",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            width: "100%",
            marginTop: "15px",
            fontSize: "16px",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          View Invoice
        </div>
      );
    } else if (
      paymentForStall.transactionId &&
      paymentForStall.booking_status === "Pending"
    ) {
      return (
        <div
          style={{
            backgroundColor: "#ff9800",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            width: "100%",
            marginTop: "15px",
            fontSize: "16px",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Order Pending
        </div>
      );
    } else if (!paymentForStall?.transactionId) {
      return (
        <div
          onClick={() => handlePay(paymentForStall)}
          style={{
            backgroundColor: "#2196f3",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            width: "100%",
            marginTop: "15px",
            fontSize: "16px",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Pay Now
        </div>
      );
    }

    // if (!paymentForStall.transactionId) {
    //   <div
    //     onClick={() => handlePay(paymentForStall)}
    //     style={{
    //       backgroundColor: "#2196f3",
    //       color: "white",
    //       padding: "10px 20px",
    //       border: "none",
    //       borderRadius: "4px",
    //       cursor: "pointer",
    //       width: "100%",
    //       marginTop: "15px",
    //       fontSize: "16px",
    //       fontWeight: "600",
    //       textAlign: "center",
    //     }}
    //   >
    //     Pay Now
    //   </div>;
    // }
    // // Payment exists - check status
    // if (
    //   paymentForStall.booking_status === "Pending" &&
    //   paymentForStall.paymentStatus === "Completed"
    // ) {
    //   if (paymentForStall.transactionId) {
    //     return (
    //       <div
    //         style={{
    //           backgroundColor: "#ff9800",
    //           color: "white",
    //           padding: "10px 20px",
    //           border: "none",
    //           borderRadius: "4px",
    //           width: "100%",
    //           marginTop: "15px",
    //           fontSize: "16px",
    //           fontWeight: "600",
    //           textAlign: "center",
    //         }}
    //       >
    //         Order Pending
    //       </div>
    //     );
    //   }
    //   // For Pending payment status, show Pay Now
    //   return (
    //     <div
    //       onClick={() => handlePay(paymentForStall)}
    //       style={{
    //         backgroundColor: "#2196f3",
    //         color: "white",
    //         padding: "10px 20px",
    //         border: "none",
    //         borderRadius: "4px",
    //         cursor: "pointer",
    //         width: "100%",
    //         marginTop: "15px",
    //         fontSize: "16px",
    //         fontWeight: "600",
    //         textAlign: "center",
    //       }}
    //     >
    //       Pay Now
    //     </div>
    //   );
    // } else if (paymentForStall.paymentStatus === "Completed") {
    //   if (paymentForStall.booking_status === "Success") {
    //     // For Completed payment and Success booking, show View Invoice
    //     return (
    //       <div
    //         onClick={() => handleViewInvoice(paymentForStall)}
    //         style={{
    //           backgroundColor: "#4caf50",
    //           color: "white",
    //           padding: "10px 20px",
    //           border: "none",
    //           borderRadius: "4px",
    //           cursor: "pointer",
    //           width: "100%",
    //           marginTop: "15px",
    //           fontSize: "16px",
    //           fontWeight: "600",
    //           textAlign: "center",
    //         }}
    //       >
    //         View Invoice
    //       </div>
    //     );
    //   } else if (paymentForStall.booking_status === "Canceled") {
    //     return (
    //       <div
    //         style={{
    //           backgroundColor: "#f44336",
    //           color: "white",
    //           padding: "10px 20px",
    //           border: "none",
    //           borderRadius: "4px",
    //           width: "100%",
    //           marginTop: "15px",
    //           fontSize: "16px",
    //           fontWeight: "600",
    //           textAlign: "center",
    //         }}
    //       >
    //         Booking Canceled
    //       </div>
    //     );
    //   }
    // } else if (paymentForStall.paymentStatus === "Failed") {
    //   return (
    //     <div
    //       style={{
    //         backgroundColor: "#f44336",
    //         color: "white",
    //         padding: "10px 20px",
    //         border: "none",
    //         borderRadius: "4px",
    //         width: "100%",
    //         marginTop: "15px",
    //         fontSize: "16px",
    //         fontWeight: "600",
    //         textAlign: "center",
    //       }}
    //     >
    //       Payment Failed
    //     </div>
    //   );
    // } else if (paymentForStall.paymentStatus === "Refunded") {
    //   return (
    //     <div
    //       style={{
    //         backgroundColor: "#9e9e9e",
    //         color: "white",
    //         padding: "10px 20px",
    //         border: "none",
    //         borderRadius: "4px",
    //         width: "100%",
    //         marginTop: "15px",
    //         fontSize: "16px",
    //         fontWeight: "600",
    //         textAlign: "center",
    //       }}
    //     >
    //       Refunded
    //     </div>
    //   );
    // }

    // // Default case
    // return (
    //   <div
    //     style={{
    //       backgroundColor: "#9e9e9e",
    //       color: "white",
    //       padding: "10px 20px",
    //       border: "none",
    //       borderRadius: "4px",
    //       width: "100%",
    //       marginTop: "15px",
    //       fontSize: "16px",
    //       fontWeight: "600",
    //       textAlign: "center",
    //     }}
    //   >
    //     View Details
    //   </div>
    // );
  };

  const handlePay = (payment: PaymentData) => {
    // Implement payment logic here
    console.log("Initiate payment for:", payment);
    if (payment?.orderId) {
      //   handlePaymentRazorPay(payment?.orderId ,);
    } else {
      alert("Order ID not found. Please try again later.");
    }
  };

  const handleViewInvoice = (payment: PaymentData) => {
    // Implement view invoice logic here
    console.log("View invoice for:", payment);
  };

  return (
    <div>
      {data &&
        data.map((stall: StallData) => (
          <div
            key={stall.id}
            id={`w-node-${stall.id}`}
            className="site_right-item"
          >
            <div className="card_content-block">
              <span className="price-text">{stall?.ticketName} </span>
              <div className="card-flex-block">
                <div className="night-price-text">
                  {stall.ticketPrice && (
                    <span className="price-text">₹ {stall?.ticketPrice} </span>
                  )}
                  / per day
                </div>
              </div>
              <div className="time-flex-block">
                <div className="time-flex-item">
                  <div className="code-embed-date-icon w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width={20}
                      height={20}
                      viewBox="0,0,256,256"
                    >
                      <g
                        fill="currentColor"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth={1}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit={10}
                        strokeDasharray=""
                        strokeDashoffset={0}
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                        style={{ mixBlendMode: "normal" }}
                      >
                        <g transform="scale(5.33333,5.33333)">
                          <path d="M42,14v-1.5c0,-3.584 -2.916,-6.5 -6.5,-6.5h-23c-3.584,0 -6.5,2.916 -6.5,6.5v1.5zM6,17v18.5c0,3.584 2.916,6.5 6.5,6.5h23c3.584,0 6.5,-2.916 6.5,-6.5v-18.5zM15.5,36c-1.381,0 -2.5,-1.119 -2.5,-2.5c0,-1.381 1.119,-2.5 2.5,-2.5c1.381,0 2.5,1.119 2.5,2.5c0,1.381 -1.119,2.5 -2.5,2.5zM15.5,27c-1.381,0 -2.5,-1.119 -2.5,-2.5c0,-1.381 1.119,-2.5 2.5,-2.5c1.381,0 2.5,1.119 2.5,2.5c0,1.381 -1.119,2.5 -2.5,2.5zM24,36c-1.381,0 -2.5,-1.119 -2.5,-2.5c0,-1.381 1.119,-2.5 2.5,-2.5c1.381,0 2.5,1.119 2.5,2.5c0,1.381 -1.119,2.5 -2.5,2.5zM24,27c-1.381,0 -2.5,-1.119 -2.5,-2.5c0,-1.381 1.119,-2.5 2.5,-2.5c1.381,0 2.5,1.119 2.5,2.5c0,1.381 -1.119,2.5 -2.5,2.5zM32.5,27c-1.381,0 -2.5,-1.119 -2.5,-2.5c0,-1.381 1.119,-2.5 2.5,-2.5c1.381,0 2.5,1.119 2.5,2.5c0,1.381 -1.119,2.5 -2.5,2.5z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="time-text">
                    <span className="text-span-2">Dates Available</span>
                    <br />
                    {stall?.dates}
                  </div>
                </div>
                <div className="time-flex-item2">
                  <div className="embed-code-location w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width={20}
                      height={20}
                      viewBox="0,0,256,256"
                    >
                      <g
                        fill="currentColor"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth={1}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit={10}
                        strokeDasharray=""
                        strokeDashoffset={0}
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                        style={{ mixBlendMode: "normal" }}
                      >
                        <g transform="scale(5.33333,5.33333)">
                          <path d="M24,4c-9.374,0 -17,7.626 -17,17c0,4.036 1.449,7.953 4.093,11.048c0.302,0.343 7.427,8.439 9.807,10.708c0.869,0.829 1.984,1.244 3.1,1.244c1.116,0 2.231,-0.415 3.101,-1.244c2.767,-2.639 9.524,-10.385 9.82,-10.725c2.63,-3.078 4.079,-6.995 4.079,-11.031c0,-9.374 -7.626,-17 -17,-17zM24,26c-2.761,0 -5,-2.239 -5,-5c0,-2.761 2.239,-5 5,-5c2.761,0 5,2.239 5,5c0,2.761 -2.239,5 -5,5z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="time-text">
                    <span className="text-span-2">Area</span>
                    <br />
                    {stall?.area}
                  </div>
                </div>
              </div>
              {data?.length > 1 && (
                <div className="card-dropdown-toggle">
                  <div className="dropdown-text">
                    <span className="text-span-2">Guests</span>
                    <br />
                    {stall.quantity} guest{stall.quantity !== 1 ? "s" : ""}
                  </div>
                </div>
              )}
              {/* Render the appropriate button based on payment status */}
              {getButtonForStall(stall)}
            </div>
          </div>
        ))}
    </div>
  );
};

export default StallList;
