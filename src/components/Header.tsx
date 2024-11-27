import React from 'react';
import { Waves, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Waves className="h-8 w-8" />
          <span className="text-2xl font-bold">AquaElite</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="hover:text-blue-200 transition">Services</a>
          <a href="#about" className="hover:text-blue-200 transition">About</a>
          <a href="#testimonials" className="hover:text-blue-200 transition">Testimonials</a>
          <a href="#contact" className="hover:text-blue-200 transition">Contact</a>
        </div>
        <button className="md:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </nav>
    </header>
  );
}