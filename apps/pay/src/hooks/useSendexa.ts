// hooks/useSendexa.ts
import { useEffect } from "react";

export const useSendexa = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.sendexa.co/modal.js";
    script.async = true;
    script.onload = () => {
      if (window.Sendexa) {
        window.Sendexa.init({
          publicKey: "test", // Replace with your actual public key
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
};
