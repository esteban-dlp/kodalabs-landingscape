import type { Metadata } from "next";
import PrivacyPageClient from "./privacy-page-client";

export const metadata: Metadata = {
  title: "Privacy Policy | Koda Labs",
  description:
    "Read the Privacy Policy for Koda Labs to understand how we collect, use, and protect your information.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}