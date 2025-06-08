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
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-8">
      {/* Page Header */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-[var(--primary)]">Contact Us</h1>
        <p className="text-gray-600 mt-2">
          We’d love to hear from you. Whether you have questions, feedback, or
          would like to support our mission—reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Contact Info */}
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
      </div>
    </div>
  );
}
