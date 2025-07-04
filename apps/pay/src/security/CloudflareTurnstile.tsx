"use client";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    onVerify?: (token: string) => void;
    onError?: (error: unknown) => void;
    onExpire?: () => void;
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "error-callback"?: (error: unknown) => void;
          "expired-callback"?: () => void;
          theme?: "light" | "dark";
        }
      ) => void;
    };
  }
}

interface CloudflareTurnstileProps {
  siteKey: string;
  onVerify: (token: string) => void;
  onError?: (error: unknown) => void;
  onExpire?: () => void;
}

export const CloudflareTurnstile: React.FC<CloudflareTurnstileProps> = ({
  siteKey,
  onVerify,
  onError,
  onExpire,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const widgetId = `cf-turnstile-${Math.random().toString(36).substring(2, 9)}`;

  useEffect(() => {
    // Load the Cloudflare Turnstile script
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    script.onload = () => setIsLoaded(true);
    document.body.appendChild(script);

    // Set up global callbacks
    window.onVerify = onVerify;
    if (onError) window.onError = onError;
    if (onExpire) window.onExpire = onExpire;

    return () => {
      document.body.removeChild(script);
      // Clean up global callbacks
      delete window.onVerify;
      if (onError) delete window.onError;
      if (onExpire) delete window.onExpire;
    };
  }, [onVerify, onError, onExpire]);

  useEffect(() => {
    if (isLoaded) {
      // Re-render the widget when theme changes
      const widget = document.getElementById(widgetId);
      if (widget) {
        widget.innerHTML = "";
        window.turnstile?.render(`#${widgetId}`, {
          sitekey: siteKey,
          callback: onVerify,
          "error-callback": onError,
          "expired-callback": onExpire,
          theme: document.documentElement.classList.contains("dark")
            ? "dark"
            : "light",
        });
      }
    }
  }, [isLoaded, siteKey, widgetId, onVerify, onError, onExpire]);

  return (
    <div
      id={widgetId}
      className="cf-turnstile"
      data-sitekey={siteKey}
      data-theme={document.documentElement.classList.contains("dark") ? "dark" : "light"}
    />
  );
};