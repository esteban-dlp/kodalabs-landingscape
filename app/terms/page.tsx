import type { Metadata } from "next";
import TermsPageClient from "./terms-page-client";

export const metadata: Metadata = {
  title: "Terms of Service | Koda Labs",
  description:
    "Read the Terms of Service for Koda Labs, including service scope, project terms, pricing, payments, and use of the website.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return <TermsPageClient />;
}