import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PaymentProps } from "@/types/payment";
import crypto from "crypto";
import { error } from "console";

export const POST = async (request: Request) => {
  const data: PaymentProps = await request.json();
  const reservationId = data.order_id;

  let responseData = null;
  const transactionStatus = data.transaction_status;
  const paymentType = data.payment_type || null;
  const fraud_status = data.fraud_status;
  const status_code = data.status_code;
  const gross_amount = data.gross_amount;
  const signature_key = data.signature_key;

  const hash = crypto
    .createHash("sha512")
    .update(
      `${reservationId}${status_code}${gross_amount}${process.env.MIDTRANS_SERVER_KEY}`
    )
    .digest("hex");

  if (signature_key !== hash) {
    return NextResponse.json(
      { error: "Missing Signature Key" },
      { status: 400 }
    );
  }

  if (transactionStatus == "capture") {
    if (fraud_status == "accept") {
      const transaction = await prisma.payment.update({
        data: {
          method: paymentType,
          status: "paid",
        },
        where: { reservationId },
      });
      responseData = transaction;
    }
  } else if (transactionStatus == "settlement") {
    const transaction = await prisma.payment.update({
      data: {
        method: paymentType,
        status: "paid",
      },
      where: { reservationId },
    });
    responseData = transaction;
  } else if (
    transactionStatus == "cancel" ||
    transactionStatus == "deny" ||
    transactionStatus == "expire"
  ) {
    const transaction = await prisma.payment.update({
      data: {
        method: paymentType,
        status: "failure",
      },
      where: { reservationId },
    });
    responseData = transaction;
  } else if (transactionStatus == "pending") {
    const transaction = await prisma.payment.update({
      data: {
        method: paymentType,
        status: "pending",
      },
      where: { reservationId },
    });
    responseData = transaction;
  }
  return NextResponse.json({ responseData }, { status: 200 });
};
