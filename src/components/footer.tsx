'use client'
import { navigationItems } from "@/lib/navigation-items";
import { Building2, Mail, Phone } from "lucide-react";
import Link from "next/link";



const Footer = () => {
    return ( <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl font-bold">MBUrb</div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Soluções especializadas em arquitetura, planejamento urbano e sustentabilidade.
              </p>
              <div className="mt-4 text-sm text-gray-500">CAU A11950-4</div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+5504330174219"
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    (43) 3017-4219
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+5543991914219"
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    (43) 99191-4219
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contato@mburb.com.br"
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    contato@mburb.com.br
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} MBUrb. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer> );
}
 
export default Footer;