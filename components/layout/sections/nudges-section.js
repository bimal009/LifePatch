import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Users,
  Heart,
  Shield,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  Star,
  MapPin,
  Zap,
} from "lucide-react";

export default function NudgesSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Every Second Counts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of Nepalis who are already making a difference. Your
            decision today could save multiple lives tomorrow.
          </p>
        </div>

        {/* Main Nudges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Urgency Nudge */}
          <Card
            className="border-l-4 hover:shadow-lg transition-all duration-300"
            style={{ borderLeftColor: "oklch(var(--primary))" }}
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-full"
                  style={{ backgroundColor: "oklch(var(--primary) / 0.1)" }}
                >
                  <Clock
                    className="w-6 h-6"
                    style={{ color: "oklch(var(--primary))" }}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Time is Critical
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Over 2,500 Nepalis are currently waiting for organ
                    transplants. Every day matters.
                  </p>
                  <div
                    className="text-xs font-medium"
                    style={{ color: "oklch(var(--primary))" }}
                  >
                    ⏰ Register now - it takes just 2 minutes
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Proof */}
          <Card
            className="border-l-4 hover:shadow-lg transition-all duration-300"
            style={{ borderLeftColor: "oklch(var(--chart-2))" }}
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-full"
                  style={{ backgroundColor: "oklch(var(--chart-2) / 0.1)" }}
                >
                  <Users
                    className="w-6 h-6"
                    style={{ color: "oklch(var(--chart-2))" }}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Join 5,000+ Heroes
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Doctors, teachers, students - people from all walks of life
                    are already registered.
                  </p>
                  <div
                    className="flex items-center gap-1 text-xs font-medium"
                    style={{ color: "oklch(var(--chart-2))" }}
                  >
                    <Star className="w-3 h-3" />
                    98% would recommend to friends
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Impact */}
          <Card
            className="border-l-4 hover:shadow-lg transition-all duration-300"
            style={{ borderLeftColor: "oklch(var(--chart-3))" }}
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-full"
                  style={{ backgroundColor: "oklch(var(--chart-3) / 0.1)" }}
                >
                  <Heart
                    className="w-6 h-6"
                    style={{ color: "oklch(var(--chart-3))" }}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Save 8 Lives
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    One donor can save up to 8 lives and help 75 others through
                    tissue donation.
                  </p>
                  <div
                    className="text-xs font-medium"
                    style={{ color: "oklch(var(--chart-3))" }}
                  >
                    💝 Your legacy of hope
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust & Security Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card
            className="border-0 hover:shadow-lg transition-all duration-300"
            style={{
              background:
                "linear-gradient(to right, oklch(var(--accent) / 0.3), oklch(var(--accent) / 0.2))",
            }}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="p-3 rounded-full"
                  style={{ backgroundColor: "oklch(var(--accent) / 0.5)" }}
                >
                  <Shield
                    className="w-6 h-6"
                    style={{ color: "oklch(var(--accent-foreground))" }}
                  />
                </div>
                <h3 className="font-semibold text-foreground">
                  100% Secure & Private
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Your data is encrypted and protected. Only authorized medical
                professionals can access donor information when needed.
              </p>
              <div
                className="flex items-center gap-2 text-xs font-medium"
                style={{ color: "oklch(var(--accent-foreground))" }}
              >
                <CheckCircle className="w-4 h-4" />
                Nepal Health Ministry Approved
              </div>
            </CardContent>
          </Card>

          <Card
            className="border-0 hover:shadow-lg transition-all duration-300"
            style={{
              background:
                "linear-gradient(to right, oklch(var(--chart-2) / 0.1), oklch(var(--chart-2) / 0.05))",
            }}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="p-3 rounded-full"
                  style={{ backgroundColor: "oklch(var(--chart-2) / 0.2)" }}
                >
                  <Zap
                    className="w-6 h-6"
                    style={{ color: "oklch(var(--chart-2))" }}
                  />
                </div>
                <h3 className="font-semibold text-foreground">
                  AI-Powered Matching
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Our advanced AI ensures the best possible matches, increasing
                success rates and saving more lives.
              </p>
              <div
                className="flex items-center gap-2 text-xs font-medium"
                style={{ color: "oklch(var(--chart-2))" }}
              >
                <Zap className="w-4 h-4" />
                92% faster matching than traditional methods
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Scarcity & Local Impact */}
        <Card
          className=" mb-12"
          style={{
            background:
              "linear-gradient(to right, oklch(var(--primary)), oklch(var(--primary) / 0.9))",
          }}
        >
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div
                className="p-4 rounded-full"
                style={{
                  backgroundColor: "oklch(var(--primary-foreground) / 0.2)",
                }}
              >
                <AlertCircle className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Nepal Needs You</h3>
            <p className="mb-6 max-w-2xl mx-auto opacity-90">
              Nepal has one of the lowest organ donation rates in South Asia. Be
              part of the change that transforms healthcare in our country.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>All 7 provinces covered</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>24/7 coordination</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span>Free for all Nepalis</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Save Lives?
            </h3>
            <p className="text-gray-600 mb-6">
              Registration is free, quick, and can be done entirely online. You
              can change your mind anytime.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Heart className="w-4 h-4 mr-2" />
                Register as Donor
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Learn More First
              </Button>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              ✓ No spam, ever ✓ Unsubscribe anytime ✓ Your choice, your control
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
