"use client";

import { useTransition } from "react";
import { reservationProps } from "@/types/reservation";

declare global {
  interface Window {
    snap: {
      pay: (token: string) => void;
    };
  }
}

const PaymentButton = ({
  reservation,
}: {
  reservation: reservationProps;
}) => {
  const [isPending, startTransition] = useTransition();
  const handlePayment = async () => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/payment", {
          method: "POST",
          body: JSON.stringify(reservation),
        });
        const { token } = await response.json();
        if (token) {
          window.snap.pay(token);
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    <button
      onClick={handlePayment}
      className='px-10 py-4 w-full mt-2 text-center font-semibold text-white bg-teal-400 rounded-sm hover:bg-teal-500 cursor-pointer'>
      {isPending ? "Processing..." : "Process Payment"}
    </button>
  );
};

export default PaymentButton;
