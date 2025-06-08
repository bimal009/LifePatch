import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, MapPin, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background px-6 py-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[size:20px_20px] opacity-30 bg-primary/10" />
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full blur-3xl opacity-30 bg-primary/15" />
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full blur-3xl opacity-20 bg-primary/20" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <Card className="overflow-hidden shadow-2xl border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/lifepatch_hero.jpg"
                    alt="Organ donation illustration"
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-card/90 shadow-lg rounded-full px-3 py-1.5 text-sm font-medium flex items-center gap-1.5 text-primary">
                    <Heart className="w-3 h-3" />
                    Saving Lives
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="mb-4 rounded-full px-3 py-1.5 text-sm font-medium inline-flex items-center gap-1.5 border border-primary/30 text-primary bg-primary/10">
                  <MapPin className="w-3 h-3" />
                  Serving Nepal
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-primary/80 to-primary/90 bg-clip-text text-transparent">
                  Give Life,
                  <br />
                  Share Hope
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                  LifePatch connects organ donors and recipients using AI to
                  save lives across Nepal. Join our mission to create a
                  healthier tomorrow.
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 py-4">
                <div className="flex items-center gap-2 rounded-full px-4 py-2 shadow-sm bg-card/80">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    5000+ Donors
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-full px-4 py-2 shadow-sm bg-card/80">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    AI Powered
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <a href="/signup" className="flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    Become a Donor
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="shadow-sm hover:shadow-md transition-all duration-200 hover:bg-muted border border-primary/30 text-primary"
                  asChild
                >
                  <a href="/how-it-works" className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    How It Works
                  </a>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">
                  Trusted by healthcare providers
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-6 opacity-60">
                  <div className="text-xs font-medium text-muted-foreground">
                    NEPAL HEALTH MINISTRY
                  </div>
                  <div className="text-xs font-medium text-muted-foreground">
                    WHO CERTIFIED
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
