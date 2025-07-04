"use client";

import {  BookText, Code, GitPullRequest, Server, ArrowRight } from "lucide-react";
import { useState } from "react";
import DevelopersHero from "./components/DevelopersToolsHero";

const API_REFERENCE = [
  { name: "Authentication", endpoint: "/auth", method: "POST" },
  { name: "Create Payment", endpoint: "/payments", method: "POST" },
  { name: "Get Payment", endpoint: "/payments/:id", method: "GET" },
  { name: "List Payments", endpoint: "/payments", method: "GET" },
  { name: "Refund", endpoint: "/refunds", method: "POST" },
];

const SDK_LIBRARIES = [
  { language: "JavaScript", version: "v2.1.4", docs: "/docs/sdks/js" },
  { language: "Python", version: "v1.3.0", docs: "/docs/sdks/python" },
  { language: "PHP", version: "v1.2.7", docs: "/docs/sdks/php" },
  { language: "Java", version: "v1.0.3", docs: "/docs/sdks/java" },
];

const QUICK_START_GUIDES = [
  { title: "Accept Mobile Payments", time: "5 min", link: "/guides/mobile-payments" },
  { title: "Process Card Payments", time: "7 min", link: "/guides/card-payments" },
  { title: "Set Up Webhooks", time: "10 min", link: "/guides/webhooks" },
  { title: "Handle Payouts", time: "8 min", link: "/guides/payouts" },
];

export default function DevelopersPage() {
  const [activeTab, setActiveTab] = useState("api-reference");

  return (
    <div className="bg-gray-950 text-gray-100">
      <DevelopersHero />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="md:w-64 flex-shrink-0">
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab("api-reference")}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${activeTab === "api-reference" ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800/50"}`}
                >
                  <Code className="w-5 h-5 mr-3" />
                  API Reference
                </button>
                <button
                  onClick={() => setActiveTab("sdks")}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${activeTab === "sdks" ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800/50"}`}
                >
                  <GitPullRequest className="w-5 h-5 mr-3" />
                  SDKs & Libraries
                </button>
                <button
                  onClick={() => setActiveTab("guides")}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${activeTab === "guides" ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800/50"}`}
                >
                  <BookText className="w-5 h-5 mr-3" />
                  Quick Start Guides
                </button>
                <button
                  onClick={() => setActiveTab("webhooks")}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${activeTab === "webhooks" ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800/50"}`}
                >
                  <Server className="w-5 h-5 mr-3" />
                  Webhooks
                </button>
              </nav>

              <div className="mt-8 border-t border-gray-800 pt-8">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Resources</h3>
                <nav className="space-y-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg">
                    API Status
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg">
                    Changelog
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg">
                    Support
                  </a>
                </nav>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1">
              {/* API Reference Tab */}
              {activeTab === "api-reference" && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Code className="w-6 h-6 mr-3 text-gray-400" />
                    API Reference
                  </h2>
                  <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                    <div className="grid grid-cols-12 bg-gray-800/50 border-b border-gray-800 p-4 text-sm text-gray-400 font-mono">
                      <div className="col-span-5">Endpoint</div>
                      <div className="col-span-2">Method</div>
                      <div className="col-span-5">Description</div>
                    </div>
                    {API_REFERENCE.map((api, index) => (
                      <div key={index} className="grid grid-cols-12 border-b border-gray-800/50 last:border-0 p-4 hover:bg-gray-800/30">
                        <div className="col-span-5 font-mono text-gray-300">{api.endpoint}</div>
                        <div className="col-span-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${api.method === "GET" ? "bg-blue-900/50 text-blue-400" : api.method === "POST" ? "bg-green-900/50 text-green-400" : "bg-gray-700 text-gray-300"}`}>
                            {api.method}
                          </span>
                        </div>
                        <div className="col-span-5 text-gray-400">{api.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SDKs Tab */}
              {activeTab === "sdks" && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <GitPullRequest className="w-6 h-6 mr-3 text-gray-400" />
                    SDKs & Libraries
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SDK_LIBRARIES.map((sdk, index) => (
                      <div key={index} className="bg-gray-900 rounded-xl border border-gray-800 p-6 hover:border-gray-700 transition-colors">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-bold text-white mb-1">{sdk.language}</h3>
                            <p className="text-gray-400 text-sm font-mono mb-4">Version {sdk.version}</p>
                          </div>
                          <div className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">
                            {sdk.language === "JavaScript" ? "Recommended" : "Stable"}
                          </div>
                        </div>
                        <a
                          href={sdk.docs}
                          className="inline-flex items-center text-sm text-gray-400 hover:text-white mt-4"
                        >
                          View documentation
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Guides Tab */}
              {activeTab === "guides" && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <BookText className="w-6 h-6 mr-3 text-gray-400" />
                    Quick Start Guides
                  </h2>
                  <div className="space-y-4">
                    {QUICK_START_GUIDES.map((guide, index) => (
                      <a
                        key={index}
                        href={guide.link}
                        className="block bg-gray-900 rounded-lg border border-gray-800 p-5 hover:border-gray-700 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <h3 className="text-lg font-medium text-white">{guide.title}</h3>
                          <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">
                            {guide.time} read
                          </span>
                        </div>
                        <p className="text-gray-400 mt-2 text-sm">Step-by-step guide to implement {guide.title.toLowerCase()}</p>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Webhooks Tab */}
              {activeTab === "webhooks" && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Server className="w-6 h-6 mr-3 text-gray-400" />
                    Webhooks
                  </h2>
                  <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                    <h3 className="text-lg font-bold text-white mb-4">Setting Up Webhooks</h3>
                    <p className="text-gray-400 mb-6">
                      Webhooks allow you to receive real-time notifications about payment events. Configure your endpoint to receive these events.
                    </p>

                    <div className="bg-gray-950 rounded-lg p-4 mb-6 overflow-x-auto">
                      <pre className="text-sm text-gray-300 font-mono">
                        <code>
{`// Example webhook payload
{
  "event": "payment.completed",
  "data": {
    "id": "pay_123456789",
    "amount": 1000,
    "currency": "GHS",
    "status": "completed"
  },
  "created_at": "2023-06-15T12:34:56Z"
}`}
                        </code>
                      </pre>
                    </div>

                    <h4 className="text-md font-semibold text-white mb-3">Available Events</h4>
                    <ul className="space-y-2 text-gray-400 mb-6">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        payment.completed
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        payment.failed
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        payment.pending
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        payout.processed
                      </li>
                    </ul>

                    <a
                      href="/docs/webhooks"
                      className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm"
                    >
                      View full webhook documentation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}