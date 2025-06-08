import Link from "next/link";
import { HeartPulse } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border px-4 py-12 bg-gradient-to-br from-muted/30 to-background mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
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
            <p className="text-muted-foreground mb-4 max-w-md">
              Connecting organ donors and recipients using AI to save lives
              across Nepal. Join our mission to create a healthier tomorrow.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span
                className="px-2 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: "oklch(var(--primary) / 0.1)",
                  color: "oklch(var(--primary))",
                }}
              >
                WHO Certified
              </span>
              <span
                className="px-2 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: "oklch(var(--primary) / 0.1)",
                  color: "oklch(var(--primary))",
                }}
              >
                Nepal Health Ministry
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                href="/how-it-works"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                How It Works
              </Link>
              <Link
                href="/signup"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Become a Donor
              </Link>
              <Link
                href="/dashboard"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Dashboard
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contact Us
              </Link>
              <Link
                href="/faq"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                FAQ
              </Link>
              <Link
                href="/help"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Help Center
              </Link>
              <Link
                href="/emergency"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Emergency
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} LifePatch. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
