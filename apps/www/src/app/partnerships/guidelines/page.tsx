import { Metadata } from "next";
import PartnershipContent from "../components/PartnershipContent";
import PartnershipPolicyHero from "../components/PartnershipPolicyHero";

export const metadata: Metadata = {
  title: "Partner with Purpose — Xtopay Partnership Policy",
  description:
    "Discover what Xtopay looks for in a partner. Our policy defines who we collaborate with, what we value, and how we build long-term fintech infrastructure together.",
  keywords: [
    "Xtopay",
    "Xtopay partnerships",
    "Ghana fintech partnerships",
    "fintech policy",
    "payment partner criteria",
    "Xtopay collaboration",
    "partnership guidelines",
    "payment infrastructure Ghana",
  ],
  metadataBase: new URL("https://xtopay.co"),
  openGraph: {
    title: "Partner with Purpose — Xtopay Partnership Policy",
    description:
      "See Xtopay’s official partnership guidelines — built for serious collaborators, infrastructure allies, and long-term value creators.",
    url: "https://xtopay.co/partnerships/guidelines",
    siteName: "Xtopay",
    images: [
      {
        url: "https://xtopay.co/og/partnership-policy.jpg",
        width: 1200,
        height: 630,
        alt: "Xtopay Partnership Policy",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xtopay Partnership Policy",
    description:
      "Understand what it means to partner with Xtopay. Not every collaboration is aligned — this guide helps filter the right ones.",
    images: ["https://xtopay.co/og/partnership-policy.jpg"],
  },
};

export default function PartnershipPolicyPage() {
  return (
    <div className="bg-gray-900 text-white">
      <PartnershipPolicyHero />
      <PartnershipContent />
    </div>
  );
}
