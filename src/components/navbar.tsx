"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigationItems } from "@/lib/navigation-items";
import { Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaBars, FaInstagram, FaLinkedin } from "react-icons/fa6";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || pathname !== "/"
        ? "bg-orange-500/95 backdrop-blur-md shadow-md"
        : "bg-transparent"
        } ${hideNav ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 md:block hidden">
        <div className="flex items-center justify-between h-8 text-white text-xs font-semibold font-sans">
          <div className="flex items-center gap-2">
            <p className="">Siga-nos:</p>
            <Link href="https://www.facebook.com/MBurb.com.br" target="_blank">
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
            </Link>
            <Link href="https://www.instagram.com/mbconsultoriaeplanejamento/" target="_blank">

              <FaInstagram size={20} color="#fff" />
            </Link>
            <Link href="https://www.linkedin.com/in/m%C3%A1rcia-bounassar-24528323/" target="_blank">
              <FaLinkedin size={20} color="#fff" />
            </Link>
          </div>
          <div className="flex items-center gap-4 ">
            <Link href="tel:4330174219" >
              <p>(43) 3017-4219</p>
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=5543991914219"
              className="flex items-center gap-1"
              target="_blank"
            >
              (43) 99191-4219
              <FaWhatsapp size={16} color="#fff" />
            </Link>
            <Link href="mailto:contato@mburb.com.br" className="flex  items-center gap-1">
              <p>contato@mburb.com.br</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={"/"} className="flex items-center">
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
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${isActive
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
              <Button variant="ghost" size="icon" className="hover:bg-white/30 ">
                <FaBars className="text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-gray-600">
              <div className="flex flex-col gap-6 mt-8 items-center ">
                {navigationItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`text-lg font-medium transition-colors ${isActive
                        ? "text-orange-600"
                        : "text-white hover:text-orange-600"
                        }`}
                    >
                      {item.title}
                    </Link>
                  );
                })}
                <div className="flex flex-col pt-6 border-t space-y-3 w-full items-center text-white">
                  <Link
                    href="https://api.whatsapp.com/send?phone=5543991914219"
                    className="flex items-center gap-3 hover:text-orange-600"
                    target="_blank"
                  >
                    (43) 99191-4219
                    <FaWhatsapp className="w-5 h-5" />
                  </Link>
                  <Link href="tel:4330174219" target="_blank" className="hover:text-orange-600">
                    (43) 3017-4219
                  </Link>
                  <Link
                    href="mailto:contato@mburb.com.br"
                    target="_blank"
                    className="hover:text-orange-600"
                  >
                    contato@mburb.com.br
                  </Link>
                  <div className="flex items-center gap-3">
                    <p className="">Siga-nos:</p>
                    <Link href="https://www.facebook.com/MBurb.com.br" target="_blank">
                      <svg
                        className="bg-white fill-gray-600 rounded p-0.5"
                        height="20px"
                        width="20px"
                        version="1.1"
                        id="Layer_1"
                        viewBox="-337 273 123.5 256"

                      >
                        <path d="M-260.9,327.8c0-10.3,9.2-14,19.5-14c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3  c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H-337V396h26.5v133h49.6V396h39.3l2.9-38.3h-42.2V327.8z" />
                      </svg>
                    </Link>
                    <Link href="https://www.instagram.com/mbconsultoriaeplanejamento/" target="_blank">

                      <FaInstagram size={20} color="#fff" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/m%C3%A1rcia-bounassar-24528323/" target="_blank">
                      <FaLinkedin size={20} color="#fff" />
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
