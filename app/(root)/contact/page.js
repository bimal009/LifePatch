import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-8 space-y-24">
      {/* Header */}
      <section className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-[var(--primary)]">Contact Us</h1>
        <p className="text-gray-600 mt-2">
          We’d love to hear from you. Whether you have questions, feedback, or
          would like to support our mission—reach out.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Info Card */}
        <Card className="bg-gray-50">
          <CardHeader>
            <CardTitle>Our Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-gray-700">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-[var(--primary)]" />
              <span>LifePatch HQ, Maitighar, Kathmandu, Nepal</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-[var(--primary)]" />
              <span>+977-1-1234567</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-[var(--primary)]" />
              <span>support@lifepatch.org</span>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-[var(--primary)]" />
              <span>Support Hours: Sun–Fri, 9:00 AM – 5:00 PM</span>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card>
          <form>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Textarea placeholder="Your Message..." rows={5} required />
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                Submit Message
              </Button>
            </CardFooter>
          </form>
        </Card>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 text-sm text-gray-700">
          <div>
            <h3 className="font-medium">How do I register as a donor?</h3>
            <p>
              You can register through the 'Get Started' button on the homepage
              and fill out your profile with medical details.
            </p>
          </div>
          <div>
            <h3 className="font-medium">Is my data secure?</h3>
            <p>
              Yes. We use end-to-end encryption and comply with data privacy
              standards to protect your information.
            </p>
          </div>
          <div>
            <h3 className="font-medium">Do I have to pay to use LifePatch?</h3>
            <p>
              No, LifePatch is completely free for both donors and recipients.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
