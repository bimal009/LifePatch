import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--surface)] text-gray-800 py-12 px-6 space-y-20">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold text-[var(--primary)]">
          About LifePatch
        </h1>
        <p className="text-lg text-gray-600">
          LifePatch is an AI-driven platform that bridges the gap between donors
          and patients in need of life-saving organ transplants.
        </p>
        <Button className="bg-[var(--primary)] text-[var(--text-on-primary)] hover:bg-[var(--primary-dark)]">
          Register as a Donor
        </Button>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              To enhance organ transplant accessibility and transparency through
              smart matching, public awareness, and secure donor management.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              A world where no life is lost due to a mismatch or lack of donor
              awareness—empowered by ethical AI and human compassion.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-[var(--primary)] mb-6">
          How LifePatch Works
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Step 1",
              desc: "Sign up as a donor or hospital with verified details.",
            },
            {
              title: "Step 2",
              desc: "Our AI securely matches patients with suitable donors.",
            },
            {
              title: "Step 3",
              desc: "Hospitals initiate communication and begin the transplant process.",
            },
          ].map((step, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle>{step.title}</CardTitle>
                <CardDescription>{step.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold text-[var(--primary)]">
          Core Features
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "AI-Based Matching System",
            "Donor & Hospital Verification",
            "Location-Aware Suggestions",
            "Anonymized Medical History Matching",
            "Secure Communication Channel",
            "Awareness Drives & Campaigns",
          ].map((feature, idx) => (
            <Card key={idx}>
              <CardContent className="py-6 font-medium">{feature}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold text-[var(--primary)]">
          Be the Patch That Saves a Life
        </h2>
        <p className="text-gray-600">
          Whether you're a donor or a healthcare provider, LifePatch connects
          your intent with real lives in need.
        </p>
        <Button className="bg-[var(--primary)] text-[var(--text-on-primary)] hover:bg-[var(--primary-dark)]">
          Join the Network
        </Button>
      </section>
    </div>
  );
}
