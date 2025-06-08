"use client";

import Link from "next/link";
import { useState } from "react";
import { HeartPulse, Menu } from "lucide-react";
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
    <header className="w-full border-b px-4 py-3 flex items-center justify-between shadow-sm bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <HeartPulse
          className="w-6 h-6"
          style={{ color: "oklch(var(--primary))" }}
        />
        <Link
          href="/"
          className="text-xl font-semibold transition-colors"
          style={{ color: "oklch(var(--primary))" }}
        >
          LifePatch
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-sm">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition-colors font-medium text-muted-foreground hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-3">
        <Button
          size="sm"
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
          asChild
        >
          <Link href="/signin">Sign In</Link>
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" aria-label="Open Menu">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 mt-6">
              <div className="flex items-center gap-2 pb-4 border-b border-border">
                <HeartPulse
                  className="w-6 h-6"
                  style={{ color: "oklch(var(--primary))" }}
                />
                <span
                  className="text-xl font-semibold"
                  style={{ color: "oklch(var(--primary))" }}
                >
                  LifePatch
                </span>
              </div>

              <nav className="flex flex-col gap-4 mx-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg transition-colors text-foreground hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <Link href="/signin" onClick={() => setIsOpen(false)}>
                    Sign In
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
