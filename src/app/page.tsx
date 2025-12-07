"use client";
import ContactForm from "@/components/contact-form";
import ServiceCard from "@/components/service-card";
import { categories, services } from "@/lib/services";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Users
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Homepage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { value: "20+", label: "Anos de Experiência" },
    { value: "200+", label: "Projetos Realizados" },
    { value: "100+", label: "Municípios Atendidos" },
    { value: "100%", label: "Satisfação" },
  ];



  const servicesByCategory = (categoryName: string) => {
    return services.filter((s) => s.category === categoryName);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax */}
        <div
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/90 via-orange-600/85 to-gray-900/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="MBUrb Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
          <div
            className="opacity-0 animate-fade-in"
            style={{ animation: "fadeInUp 0.8s ease-out 0.2s forwards" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Planejamento Urbano
              <br />
              <span className="text-orange-300">que Transforma Cidades</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Soluções especializadas em arquitetura, planejamento urbano e
              sustentabilidade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="group px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all flex items-center justify-center gap-2"
              >
                Entre em Contato
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all"
              >
                Nossos Serviços
              </button>
            </div>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 opacity-0 animate-fade-in"
            style={{ animation: "fadeInUp 0.8s ease-out 0.6s forwards" }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Por que escolher a MBUrb?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiência e dedicação para transformar suas ideias em realidade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Experiência Comprovada",
                description:
                  "Mais de 20 anos de atuação no mercado de planejamento urbano e arquitetura",
              },
              {
                icon: Users,
                title: "Equipe Especializada",
                description:
                  "Profissionais qualificados e certificados para atender suas necessidades",
              },
              {
                icon: Award,
                title: "Resultados Garantidos",
                description:
                  "Projetos entregues com qualidade, dentro do prazo e do orçamento",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wider">
              O que fazemos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mt-4 mb-6">
              Nossos Serviços
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Soluções completas e personalizadas para o desenvolvimento urbano
              sustentável
            </p>
          </div>

          <div className="space-y-20">
            {categories.map((category, idx) => {
              const categoryServices = servicesByCategory(category.name);

              if (categoryServices.length === 0) return null;

              return (
                <div key={category.name} className="scroll-mt-24">
                  <div className="mb-8">
                    <div className="inline-block">
                      <h3
                        className={`text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}
                      >
                        {category.name}
                      </h3>
                      <div
                        className={`h-1 bg-gradient-to-r ${category.color} rounded-full`}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryServices.map((service, idy) => (
                      <ServiceCard key={idx + idy} service={service} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600">
              Vamos transformar suas ideias em realidade
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
