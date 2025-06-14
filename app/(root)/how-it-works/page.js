import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  BrainCircuit,
  HandHeart,
  Target,
  HelpCircle,
} from "lucide-react";

const steps = [
  {
    icon: <HeartHandshake className="w-8 h-8 text-primary" />,
    title: "Register",
    description:
      "Donors and recipients create a profile with essential health and identity details.",
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: "AI Matching",
    description:
      "Our AI evaluates compatibility based on health data, location, and urgency.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Secure Communication",
    description:
      "We enable anonymous, secure messaging between potential matches.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Connect & Save",
    description:
      "Once verified, we coordinate through certified medical partners to proceed safely.",
  },
];

const extras = [
  {
    icon: <HandHeart className="w-7 h-7 text-primary" />,
    title: "Why LifePatch?",
    description:
      "We combine empathy, trust, and AI to bridge the gap between donors and recipients in a dignified manner.",
  },
  {
    icon: <Target className="w-7 h-7 text-primary" />,
    title: "Our Mission",
    description:
      "To eliminate barriers in organ donation through innovation, awareness, and ethical coordination.",
  },
  {
    icon: <HelpCircle className="w-7 h-7 text-primary" />,
    title: "Support Channels",
    description:
      "We offer multilingual support, medical partner access, and awareness resources to guide you every step.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="py-16 px-4 bg-[var(--primary-bg)] text-[var(--text-color)] min-h-screen space-y-24">
      {/* Process */}
      <section>
        <h1 className="text-4xl font-bold text-center mb-4">
          How LifePatch Works
        </h1>
        <p className="text-center max-w-2xl mx-auto mb-12 text-[var(--muted-color)]">
          LifePatch simplifies organ donation using AI and secure processes.
          Here's a step-by-step guide.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <Card
              key={idx}
              className="border border-[var(--border-color)] rounded-2xl bg-[var(--card-bg)] shadow-sm"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--muted-color)]">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Extra Info */}
      <section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold">More About LifePatch</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {extras.map((item, idx) => (
            <Card
              key={idx}
              className="border border-[var(--border-color)] rounded-2xl bg-[var(--card-bg)] shadow-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-[var(--muted-color)]">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
