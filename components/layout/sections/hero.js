import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Users,
  MapPin,
  Zap,
  ArrowRight,
  Shield,
  Activity,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-muted to-card px-6 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Floating orbs */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-primary/20 to-primary/15 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-r from-chart-2/15 to-chart-3/15 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-chart-1/10 to-chart-5/10 blur-3xl animate-pulse delay-2000" />

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-bounce delay-300" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-chart-2 rounded-full animate-bounce delay-700" />
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-chart-1 rounded-full animate-bounce delay-1000" />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/10 backdrop-blur-md border border-border/20 text-foreground shadow-lg hover:bg-card/15 transition-all duration-300 group">
                <div className="w-2 h-2 bg-chart-4 rounded-full animate-pulse" />
                <MapPin className="w-4 h-4 text-chart-4" />
                <span className="text-sm font-medium">Live in Nepal</span>
                <div className="w-1 h-1 bg-muted-foreground/40 rounded-full group-hover:bg-muted-foreground/60 transition-colors" />
              </div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight">
                  <span className="bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent">
                    Give Life,
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-chart-1 to-chart-5 bg-clip-text text-transparent">
                    Share Hope
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                  LifePatch revolutionizes organ donation with AI-powered
                  matching, connecting donors and recipients across Nepal to
                  save precious lives.
                </p>
              </div>

              {/* Enhanced Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 py-6">
                <div className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-card/10 backdrop-blur-md border border-border/20 hover:bg-card/15 transition-all duration-300 hover:scale-105">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-chart-2 to-chart-3">
                    <Users className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      5,000+
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Active Donors
                    </div>
                  </div>
                </div>

                <div className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-card/10 backdrop-blur-md border border-border/20 hover:bg-card/15 transition-all duration-300 hover:scale-105">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-primary to-chart-1">
                    <Activity className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      98%
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Success Rate
                    </div>
                  </div>
                </div>

                <div className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-card/10 backdrop-blur-md border border-border/20 hover:bg-card/15 transition-all duration-300 hover:scale-105">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-chart-4 to-chart-5">
                    <Zap className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">AI</div>
                    <div className="text-xs text-muted-foreground">Powered</div>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-primary to-chart-1 hover:from-primary/90 hover:to-chart-1/90 text-primary-foreground shadow-2xl hover:shadow-primary/25 transform hover:-translate-y-1 transition-all duration-300 rounded-2xl px-8 py-6 text-lg font-semibold"
                >
                  <a href="/signin" className="flex items-center gap-3">
                    <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                    Become a Donor
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="group rounded-2xl px-8 py-6 text-lg font-semibold bg-card/10 backdrop-blur-md border-border/20 text-foreground hover:bg-card/20 hover:border-border/30 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  asChild
                >
                  <a href="/how-it-works" className="flex items-center gap-3">
                    <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                    How It Works
                  </a>
                </Button>
              </div>

              {/* Enhanced Trust indicators */}
              <div className="pt-8 border-t border-border">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                  <Shield className="w-4 h-4 text-chart-4" />
                  <p className="text-sm text-muted-foreground font-medium">
                    Certified & Trusted
                  </p>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-8">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card/5 backdrop-blur-sm border border-border/10">
                    <div className="w-2 h-2 bg-chart-4 rounded-full" />
                    <span className="text-xs font-medium text-muted-foreground tracking-wider">
                      NEPAL HEALTH MINISTRY
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card/5 backdrop-blur-sm border border-border/10">
                    <div className="w-2 h-2 bg-chart-2 rounded-full" />
                    <span className="text-xs font-medium text-muted-foreground tracking-wider">
                      WHO CERTIFIED
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Main card */}
              <Card className="group relative overflow-hidden shadow-2xl border-0 bg-card/10 backdrop-blur-md border border-border/20 hover:bg-card/15 transition-all duration-500 rounded-3xl">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-3xl">
                    <Image
                      src="/lifepatch_hero.jpg"
                      alt="Organ donation illustration"
                      width={600}
                      height={400}
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Enhanced overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-chart-1/10" />

                    {/* Floating badge */}
                    <div className="absolute top-6 left-6 bg-card/20 backdrop-blur-md shadow-xl rounded-2xl px-4 py-3 border border-border/30">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-gradient-to-r from-destructive to-chart-1 rounded-full">
                          <Heart className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <span className="text-sm font-semibold text-foreground">
                          Saving Lives
                        </span>
                      </div>
                    </div>

                    {/* Bottom stats overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-card/20 backdrop-blur-md rounded-2xl p-4 border border-border/30">
                        <div className="flex items-center justify-between">
                          <div className="text-foreground">
                            <div className="text-sm font-medium text-muted-foreground">
                              Lives Saved
                            </div>
                            <div className="text-2xl font-bold">1,247</div>
                          </div>
                          <div className="text-foreground">
                            <div className="text-sm font-medium text-muted-foreground">
                              This Year
                            </div>
                            <div className="text-2xl font-bold">326</div>
                          </div>
                          <div className="p-3 bg-gradient-to-r from-chart-4 to-chart-5 rounded-xl">
                            <Activity className="w-6 h-6 text-primary-foreground" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-chart-1 rounded-2xl blur-xl opacity-30 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-chart-2 to-chart-3 rounded-2xl blur-xl opacity-20 animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
