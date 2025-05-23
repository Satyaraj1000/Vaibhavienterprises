"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-7xl">
      <h1 className="text-4xl font-bold text-center text-[#0E9696] mb-12">
        📞 Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-[#0E9696]">
              📬 Get in Touch
            </CardTitle>
          </CardHeader>
          <Separator className="mb-4" />
          <CardContent className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#0E9696] mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Address</h3>
                <p className="text-gray-600">
                  N/3, Cama I.E., Opp. Jaipan Ind., Walbhat Rd., Goregaon (E),
                  Mumbai - 400063, Maharashtra, India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-[#0E9696] mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+91 9820052056 / 9820052057</p>
                <p className="text-gray-600">022-49789807</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#0E9696] mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <a
                  href="mailto:response@vaibhavientp.com"
                  className="text-[#0E9696] hover:underline"
                >
                  response@vaibhavientp.com
                </a>
                <br />
                <a
                  href="mailto:vaibhavient@gmail.com"
                  className="text-[#0E9696] hover:underline"
                >
                  vaibhavient@gmail.com
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Map Placeholder Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-[#0E9696]">
              🗺️ Our Location
            </CardTitle>
          </CardHeader>
          <Separator className="mb-4" />
          <CardContent>
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              Map will be integrated here
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
