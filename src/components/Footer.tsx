'use client';

import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  MessageSquareText,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-auto w-full">
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold">🌐 Follow Us</h3>
          <Separator className="bg-[#0E9696] my-2" />
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                className="flex items-center space-x-2 hover:text-[#0E9696] transition"
              >
                <Linkedin size={18} /> <span>LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                className="flex items-center space-x-2 hover:text-[#0E9696] transition"
              >
                <Facebook size={18} /> <span>Facebook</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://web.whatsapp.com"
                target="_blank"
                className="flex items-center space-x-2 hover:text-[#0E9696] transition"
              >
                <MessageSquareText size={18} /> <span>WhatsApp</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                className="flex items-center space-x-2 hover:text-[#0E9696] transition"
              >
                <Instagram size={18} /> <span>Instagram</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold">📞 Quick Contact</h3>
          <Separator className="bg-[#0E9696] my-2" />
          <div className="mt-4 text-sm leading-relaxed space-y-2">
            <p><strong>🏢 VAIBHAVI ENTERPRISES</strong></p>
            <p><strong>👩‍💼 MS. VAIBHAVI BHATT</strong> (Owner)</p>
            <p className="flex items-start space-x-1">
              <MapPin size={16} className="mt-1" />
              <span>
                N/3, Cama I.E., Opp. Jaipan Ind., Walbhat Rd., Goregaon (E),<br />
                Mumbai - 400063, Maharashtra, India
              </span>
            </p>
            <p className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+91 9820052056 / 9820052057</span>
            </p>
            <p className="flex items-center space-x-2">
              <Phone size={16} />
              <span>Tel: 022-49789807</span>
            </p>
            <p className="flex items-start space-x-2">
              <Mail size={16} className="mt-1" />
              <span className="space-y-1">
                <Link
                  href="mailto:response@vaibhavientp.com"
                  className="underline hover:text-[#0E9696]"
                >
                  response@vaibhavientp.com
                </Link>
                <br />
                <Link
                  href="mailto:vaibhavient@gmail.com"
                  className="underline hover:text-[#0E9696]"
                >
                  vaibhavient@gmail.com
                </Link>
              </span>
            </p>
          </div>
        </div>

        {/* Location Map Placeholder */}
        <div>
          <h3 className="text-lg font-bold">📍 Location</h3>
          <Separator className="bg-[#0E9696] my-2" />
          <Card className="bg-white text-black mt-4 h-48 flex items-center justify-center rounded-md">
            Google Map
          </Card>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
