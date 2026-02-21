// src/components/layout/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

// Definisikan props yang diterima
interface NavbarProps {
  companyName?: string;
}

export default function Navbar({ companyName = 'CorpBrand.' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek untuk mendeteksi scroll dan memicu animasi Glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update NavLinks menyesuaikan section yang sudah kita buat
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/85 backdrop-blur-lg shadow-sm py-3' 
          : 'bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8 max-w-7xl">
        
        {/* Brand Logo Dinamis dari Sanity */}
        <a href="/" className="group flex items-center gap-1">
          <span className="text-2xl font-extrabold tracking-tighter text-slate-900 transition-transform group-hover:scale-105">
            {companyName}
          </span>
          <span className="h-2 w-2 rounded-full bg-blue-600 mb-1 transition-colors group-hover:bg-[#333333]"></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="relative text-sm font-bold text-slate-600 transition-colors hover:text-slate-900 group"
            >
              {link.name}
              {/* Animated Underline Effect */}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[2.5px] bg-slate-900 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop CTA (Menuju Contact) */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-[#333333] hover:bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Nav (Sheet) */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-slate-100 rounded-full" aria-label="Open menu">
                <Menu className="h-6 w-6 text-slate-900" />
              </Button>
            </SheetTrigger>
            
            {/* Custom Sheet Content untuk Mobile */}
            <SheetContent side="right" className="w-full sm:w-[400px] bg-white border-l-0 p-8 flex flex-col">
              
              <div className="mb-12 mt-4">
                <span className="text-2xl font-extrabold tracking-tighter text-slate-900">
                  {companyName}<span className="text-blue-600">.</span>
                </span>
              </div>

              {/* Mobile Links dengan Tipografi Besar */}
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-extrabold tracking-tight text-slate-800 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Mobile Footer / CTA di dalam menu */}
              <div className="mt-auto pt-8 border-t border-slate-100 flex flex-col gap-4">
                <p className="text-sm font-medium text-slate-500">Ready to start a project?</p>
                <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="inline-flex w-full items-center justify-center bg-[#333333] text-white px-6 py-4 rounded-full text-lg font-semibold transition-colors hover:bg-slate-900 shadow-md"
                >
                  Get in Touch
                </a>
              </div>

            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}