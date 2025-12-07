"use client";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

// TODO: set page title to service Name

const ServicePage = () => {
  const { slug } = useParams();

  useEffect(() => {
    if (!slug || !document) return;

    document.title =
      services.find((s) => s.slug === slug)?.name ?? "Não Encontrado";
  }, [services, slug]);

  if (!slug || !services.find((s) => s.slug === slug)) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Serviço não encontrado
          </h2>
          <Button asChild>
            <Link href="/">Voltar para home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const service = services.find((s) => s.slug === slug);

  return (
    <div className="bg-white min-h-screen mt-30 max-w-7xl mx-auto">
      <section className="py-12">
        <Button asChild variant="ghost" className="mb-8 hover:bg-neutral-100">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para serviços
          </Link>
        </Button>

        <div className="flex items-start gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FFE5DC] to-[#FFD4C4] flex items-center justify-center flex-shrink-0">
            {service?.icon}
          </div>
          <div>
            <div className="inline-block px-4 py-1 bg-[#FFE5DC] text-[#FF6B35] text-sm font-semibold rounded-full">
              {service?.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 leading-tight">
              {service?.name}
            </h1>
          </div>
        </div>
      </section>
      {service?.banner && (
        <section className="aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={service?.banner}
            alt={service?.name}
            className="w-full h-full object-cover"
          />
        </section>
      )}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none text-base text-neutral-600 leading-relaxed whitespace-pre-line">
          {service?.description}
        </div>
        <div className="mt-16 bg-gradient-to-br from-neutral-50 to-[#FFF5F0] rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
            Benefícios do serviço
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Análise técnica detalhada e personalizada",
              "Equipe especializada e multidisciplinar",
              "Metodologia comprovada e eficiente",
              "Acompanhamento em todas as etapas",
              "Conformidade com legislação vigente",
              "Resultados mensuráveis e sustentáveis",
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-[#FFE5DC] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35]" />
                </div>
                <p className="text-neutral-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            Interessado neste serviço?
          </h3>
          <p className="text-neutral-600 mb-8">
            Entre em contato conosco para saber mais e solicitar um orçamento
          </p>
          <Button
            asChild
            className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-8 py-6 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Link href={"/#contact"}>Solicitar orçamento</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
