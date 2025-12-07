import { Award, Heart, Target, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "A MBUrb é uma empresa líder em assessoria de planejamento urbano e arquitetura, comprometida em criar cidades mais sustentáveis, funcionais e humanas.",
};

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-neutral-50 via-white to-[#FFF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wider">
              Quem somos
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mt-4 mb-6 leading-tight">
              Transformando espaços urbanos com expertise e dedicação
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              A MBUrb é uma empresa líder em assessoria de planejamento urbano e
              arquitetura, comprometida em criar cidades mais sustentáveis,
              funcionais e humanas.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/marcia-apresentacao.jpg"
                  alt="Nossa equipe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] rounded-3xl -z-10 opacity-20"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  A MBUrb Planejamento e Consultoria é uma empresa formada por
                  uma equipe multidisciplinar de profissionais com vasta
                  experiência. Atua na elaboração de projetos e serviços
                  técnicos de Engenharia e Arquitetura, no desenvolvimento de
                  Planos de Gestão de Cidades, em Projetos na área de Saneamento
                  Básico e Ambiental, na implementação de projetos utilizando
                  soluções de Geotecnologia em organizações públicas e privadas.
                </p>
                <p>
                  Dentro de um enfoque único e de uma abordagem precisa, nossos
                  consultores elaboram projetos e diagnósticos fidedignos das
                  reais necessidades de cada cliente, implementando ideias e
                  soluções inovadoras para obtenção de resultados planejados.
                </p>
                <p>
                  Fundada em 2003, a MBUrb tem como premissa estabelecer uma
                  relação transparente entre sua equipe e o cliente,
                  ajustando-se com a cultura de cada organização e garantindo um
                  atendimento personalizado.
                </p>
                <p>
                  De acordo com o contrato social, os seus objetivos são:
                  Consultoria em Tecnologia da Informação; Soluções em
                  Geotecnologia; Imagens de alta resolução e Implantação de
                  Sistema de Informações Geográficas - SIG Corporativo; Serviços
                  Técnicos em Engenharia e Arquitetura; Consultoria em Gestão
                  Ambiental; Consultoria e Assessoria Empresarial; Consultoria e
                  Assessoria em Administração Pública; Desenvolvimento,
                  Treinamento e Qualificação Profissional; Pesquisa de Mercado e
                  de Opinião Pública.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-[#FFF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Princípios que guiam nosso trabalho e relacionamento com clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excelência",
                description:
                  "Compromisso com qualidade e resultados superiores em cada projeto",
              },
              {
                icon: Users,
                title: "Colaboração",
                description:
                  "Trabalho em equipe e parceria próxima com nossos clientes",
              },
              {
                icon: Target,
                title: "Inovação",
                description:
                  "Soluções criativas e tecnologias de ponta para desafios complexos",
              },
              {
                icon: Heart,
                title: "Sustentabilidade",
                description:
                  "Desenvolvimento urbano consciente e responsável com o meio ambiente",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFE5DC] to-[#FFD4C4] flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Liderança
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Conheça quem está à frente da UrbanPlan
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-neutral-50 to-[#FFF5F0] rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="aspect-square rounded-full overflow-hidden shadow-xl">
                    <img
                      src="/marcia.png"
                      alt="Marcia Bounassar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                    Marcia Bounassar
                  </h3>
                  <p className="text-[#FF6B35] font-semibold mb-6">
                    Fundadora e CEO
                  </p>

                  <div className="space-y-4 text-neutral-600 leading-relaxed">
                    <p>
                      Arquiteta e Urbanista graduada pela Universidade Estadual
                      de Londrina em 1985, CAU A119.50-4, mestre em Planejamento
                      e Gestão do Turismo – UNIBERO SP, pós-graduada em
                      Planejamento e Gestão do Meio Urbano – PUC Pr/GTU França,
                      especialista em Gestão Ambiental de Município – UTF/PR
                      2014.
                    </p>
                    <p>
                      Atua em prefeituras de diversos estados e empresas
                      privadas na elaboração de projetos arquitetônicos e
                      paisagísticos, em planejamento urbano e regional e em
                      gestão de cidades.
                    </p>
                    <p>
                      <b>Cargos Exercidos:</b> Diretora de Turismo de
                      Londrina-CODEL; Chefe do Escritório Regional da Paraná
                      Turismo; Diretora Executiva do Londrina Convention Bureau;
                      Docente (UNOPAR, CESUMAR, UNIPAR, UNIFIL e FAP);
                      Ministério do Turismo/UNB; consultora do SEBRAE e
                      AMUNOP-Cornélio Procópio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
