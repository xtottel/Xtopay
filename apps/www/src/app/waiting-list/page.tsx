"use client";
import React from "react";

import FeatureShowcase from "./components/FeatureShowcase";
import WaitlistForm from "./components/WaitlistForm";
import { Container } from "@/layout/Container";
import WaitlistHero from "./components/WaitlistHero";

const WaitlistPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with dark gradient */}
      <WaitlistHero />

      {/* Main content with light theme */}

      <Container>
        <div className="grid gap-8 lg:grid-cols-2 py-15">
          <FeatureShowcase />
          <WaitlistForm />
        </div>
      </Container>
    </div>
  );
};

export default WaitlistPage;
