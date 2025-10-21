import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import logo from "@/assets/niscar-logo.png";

declare global {
  interface Window {
    fbq?: (action: string, event: string) => void;
  }
}

const Index = () => {
  useEffect(() => {
    // Dispara evento Lead do Meta Pixel
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead');
    }

    const timer = setTimeout(() => {
      window.location.href = "https://api.whatsapp.com/send/?phone=351935373988";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="flex flex-col items-center space-y-8 text-center">
        <img
          src={logo}
          alt="NISCAR WASH"
          className="h-32 w-auto object-contain"
        />

        <div className="flex flex-col items-center space-y-6">
          <Loader2 className="h-12 w-12 animate-spin text-secondary" />

          <p className="max-w-sm text-lg font-medium text-foreground">
            Estamos te direcionando para falar com a nossa equipe
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
