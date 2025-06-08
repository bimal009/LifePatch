"use client";

import { useState, useEffect } from "react";
import { Home, ArrowLeft, Search, MapPin } from "lucide-react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    setMounted(true);

    const positions = [
      { left: "10%", top: "20%" },
      { left: "30%", top: "60%" },
      { left: "50%", top: "10%" },
      { left: "70%", top: "50%" },
      { left: "80%", top: "30%" },
      { left: "20%", top: "80%" },
    ];

    const elements = positions.map((pos, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 rounded-full opacity-30 animate-pulse bg-primary"
        style={{
          left: pos.left,
          top: pos.top,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `${2 + (i % 3)}s`,
        }}
      />
    ));
    setFloatingElements(elements);

    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-background via-muted to-background text-foreground">
      <div className="absolute inset-0 overflow-hidden">
        {mounted && floatingElements}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse opacity-10 bg-primary" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-10 bg-accent animate-delay-1000" />
      </div>

      <div
        className={`relative z-10 min-h-screen flex flex-col items-center justify-center px-4 transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-4xl mx-auto">
          <div className="relative mb-8">
            <h1
              className={`text-8xl md:text-9xl font-black text-primary ${
                glitchActive ? "animate-pulse" : ""
              }`}
            >
              404
            </h1>
            {glitchActive && (
              <>
                <h1 className="absolute top-0 left-0 text-8xl md:text-9xl font-black opacity-70 text-destructive translate-x-1">
                  404
                </h1>
                <h1 className="absolute top-0 left-0 text-8xl md:text-9xl font-black opacity-70 text-chart-2 -translate-x-1">
                  404
                </h1>
              </>
            )}
          </div>

          <div className="space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Oops! Page Not Found
            </h2>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed text-muted-foreground">
              The page you're looking for seems to have vanished into the
              digital void. Don't worry though – even the best explorers
              sometimes take a wrong turn.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => window.history.back()}
              className="group flex items-center gap-3 px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300 bg-primary text-primary-foreground"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Go Back
            </button>
            <button
              onClick={() => (window.location.href = "/")}
              className="group flex items-center gap-3 px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300 bg-card text-card-foreground border border-border"
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Home Page
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <p className="text-sm text-center text-muted-foreground">
            Error Code: 404 • Page Not Found •{" "}
            <span className="cursor-pointer ml-1 hover:underline text-primary">
              Report Issue
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
