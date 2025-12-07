"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigationItems } from "@/lib/navigation-items";
import { Mail, Menu, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setScrolled(true);
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          setHideNav(true);
        } else {
          setHideNav(false);
        }
      } else {
        setScrolled(false);
        setHideNav(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || pathname !== "/"
          ? "bg-orange-500/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      } ${hideNav ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-8 text-white text-xs font-semibold font-sans">
          <div className="flex items-center gap-2">
            <p className="">Siga-nos:</p>
            <svg
              fill="#ff6900"
              className="bg-white rounded p-0.5"
              height="20px"
              width="20px"
              version="1.1"
              id="Layer_1"
              viewBox="-337 273 123.5 256"
            >
              <path d="M-260.9,327.8c0-10.3,9.2-14,19.5-14c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3  c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H-337V396h26.5v133h49.6V396h39.3l2.9-38.3h-42.2V327.8z" />
            </svg>
          </div>
          <div className="flex items-center gap-4 ">
            <p>CAU A11950-4</p>
            <p>(43) 3017-4219</p>
            <p>(43) 99191-4219</p>
            <p>contato@mburb.com.br</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={"/"} className="flex items-center gap-3 group">
            <img src="/logo.png" alt="MBUrb Logo" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigationItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive
                      ? "text-orange-600 bg-orange-50"
                      : "text-white  hover:bg-orange-50/20"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
            <Link
              href="/#contact"
              className="ml-4 px-5 py-2.5 bg-orange-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-orange-500/50 transition-all"
            >
              <Phone className="w-4 h-4 inline mr-2" />
              Contato
            </Link>
          </div>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-6 mt-8">
                {navigationItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`text-lg font-medium transition-colors ${
                        isActive
                          ? "text-orange-600"
                          : "text-white hover:text-orange-600"
                      }`}
                    >
                      {item.title}
                    </Link>
                  );
                })}
                <div className="pt-6 border-t space-y-3">
                  <a
                    href="tel:+5543991914219"
                    className="flex items-center gap-3 text-white hover:text-orange-600 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    (43) 99191-4219
                  </a>
                  <a
                    href="mailto:contato@mburb.com.br"
                    className="flex items-center gap-3 text-white hover:text-orange-600 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    contato@mburb.com.br
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
