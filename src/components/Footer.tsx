import React from 'react';
import { Waves, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Waves className="h-6 w-6" />
              <span className="text-xl font-bold">AquaElite</span>
            </div>
            <p className="text-blue-200">Professional swimming instruction for all ages and abilities.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>info@aquaelite.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>123 Swim Lane, Watertown, ST 12345</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-blue-200 transition">Services</a></li>
              <li><a href="#about" className="hover:text-blue-200 transition">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-blue-200 transition">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-blue-200 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 6:00 AM - 9:00 PM</li>
              <li>Saturday: 8:00 AM - 6:00 PM</li>
              <li>Sunday: 9:00 AM - 5:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} AquaElite Swimming. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}