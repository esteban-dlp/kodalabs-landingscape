import type { Metadata } from "next";
import RefundPageClient from "./refund-page-client";

export const metadata: Metadata = {
  title: "Refund Policy | Koda Labs",
  description:
    "Read the Refund Policy for Koda Labs, including how refunds are handled for custom digital services and future online purchases.",
  alternates: {
    canonical: "/refund",
  },
};

export default function RefundPage() {
  return <RefundPageClient />;
}