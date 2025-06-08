"use client";
import Link from "next/link";
import { useState } from "react";
import { HeartPulse, Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" },
  { href: "/story", label: "Story" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-border/50 px-6 py-4 flex items-center justify-between shadow-lg bg-background/90 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300">
      {/* Enhanced Logo Section */}
      <div className="flex items-center gap-3 group">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-chart-1 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
          <div className="relative p-2 bg-gradient-to-r from-primary to-chart-1 rounded-xl shadow-lg">
            <HeartPulse className="w-5 h-5 text-primary-foreground animate-pulse" />
          </div>
        </div>
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent hover:from-chart-1 hover:to-primary transition-all duration-300"
        >
          LifePatch
        </Link>
      </div>

      {/* Enhanced Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-1 bg-muted/50 backdrop-blur-sm rounded-2xl p-2 border border-border/30">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="relative px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-xl hover:bg-card/50 group"
          >
            <span className="relative z-10">{link.label}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-chart-1/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        ))}
      </nav>

      {/* Enhanced Desktop CTA */}
      <div className="hidden lg:flex items-center gap-4">
        <Button
          size="lg"
          className="group relative overflow-hidden bg-gradient-to-r from-primary to-chart-1 hover:from-primary/90 hover:to-chart-1/90 text-primary-foreground shadow-xl hover:shadow-primary/25 rounded-2xl px-8 py-3 transition-all duration-300 hover:-translate-y-0.5"
          asChild
        >
          <Link href="/signin" className="flex items-center gap-2">
            Sign In
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </Button>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="relative p-3 rounded-2xl hover:bg-muted/50 transition-all duration-300"
              aria-label="Open Menu"
            >
              <div className="relative">
                <Menu
                  className={`w-5 h-5 transition-all duration-300 ${
                    isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${
                    isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  }`}
                />
              </div>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[320px] sm:w-[400px] bg-background/95 backdrop-blur-xl border-l border-border/50"
          >
            <div className="flex flex-col gap-8 mt-8">
              {/* Enhanced Mobile Logo */}
              <div className="flex items-center gap-3 pb-6 border-b border-border/30">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-chart-1 rounded-xl blur opacity-30" />
                  <div className="relative p-2 bg-gradient-to-r from-primary to-chart-1 rounded-xl shadow-lg">
                    <HeartPulse className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
                  LifePatch
                </span>
              </div>

              {/* Enhanced Mobile Navigation Links */}
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between p-4 text-lg font-medium text-foreground hover:text-primary transition-all duration-300 rounded-2xl hover:bg-muted/50 border border-transparent hover:border-border/30"
                    onClick={() => setIsOpen(false)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="transition-all duration-300 group-hover:translate-x-2">
                      {link.label}
                    </span>
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                  </Link>
                ))}
              </nav>

              {/* Enhanced Mobile CTA */}
              <div className="flex flex-col gap-4 pt-6 border-t border-border/30">
                <Button
                  size="lg"
                  className="group w-full bg-gradient-to-r from-primary to-chart-1 hover:from-primary/90 hover:to-chart-1/90 text-primary-foreground shadow-xl hover:shadow-primary/25 rounded-2xl py-4 text-lg font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  asChild
                >
                  <Link
                    href="/signin"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2"
                  >
                    Sign In
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>

                {/* Additional mobile info */}
                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground">
                    Join thousands saving lives across Nepal
                  </p>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
