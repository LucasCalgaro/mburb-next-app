import { Award, Heart, Target, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "A MBUrb é uma empresa líder em assessoria de planejamento urbano e arquitetura, comprometida em criar cidades mais sustentáveis, funcionais e humanas.",
};

export default function About() {
  const oursValues = [
    {
      icon: Award,
      title: "Excelência",
      description: (
        <>
          Para nossa empresa, é o compromisso permanente com o mais alto padrão
          técnico na elaboração de planos, projetos, diagnósticos e instrumentos
          legais voltados à gestão municipal. A excelência é um princípio
          contínuo, presente em todas as etapas do trabalho — do diagnóstico
          inicial à entrega final — garantindo que cada produto represente {""}
          <b>
            segurança técnica, confiabilidade e valor duradouro para a gestão
            pública.
          </b>
        </>
      ),
    },
    {
      icon: Users,
      title: "Colaboração",
      description: (
        <>
          É o princípio que orienta a forma como desenvolvemos cada trabalho: de
          maneira integrada, participativa e alinhada à realidade administrativa
          do município. Acreditamos que planos, projetos e instrumentos legais
          só alcançam efetividade quando são construídos em{" "}
          <b>
            diálogo com a equipe técnica da prefeitura, gestores, conselhos e
            comunidade
          </b>
          , incorporando conhecimento local ao rigor técnico.
        </>
      ),
    },
    {
      icon: Target,
      title: "Inovação",
      description: (
        <>
          É aplicar novas metodologias, tecnologias e abordagens ao planejamento
          urbano e à gestão municipal, sempre com foco na{" "}
          <b>eficiência, precisão técnica e aplicabilidade prática</b>. Para
          nós, inovar não é apenas utilizar ferramentas modernas, mas{" "}
          <b>
            aperfeiçoar continuamente a forma de diagnosticar, planejar e
            estruturar o território
          </b>
          , traduzindo conhecimento técnico em soluções mais inteligentes para o
          município. Inovar é fazer o planejamento evoluir junto com as
          necessidades do território e da gestão municipal.
        </>
      ),
    },
    {
      icon: Heart,
      title: "Sustentabilidade",
      description: (
        <>
          É o princípio que orienta nossas decisões técnicas para que cada
          plano, projeto ou instrumento legal contribua para o equilíbrio entre
          desenvolvimento urbano, proteção ambiental e qualidade de vida. No
          contexto municipal, sustentabilidade significa{" "}
          <b>planejar o território com responsabilidade intergeracional</b>,
          reduzindo impactos, prevenindo riscos e promovendo o uso eficiente dos
          recursos naturais. Sustentabilidade é planejar hoje o território que
          as próximas gerações irão viver.
        </>
      ),
    },
  ];

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
                  src="/marcia-apresentacao-2.png "
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
                  Fundada em <b>2003</b>, nossa empresa atua de forma contínua
                  no{" "}
                  <b>
                    planejamento urbano e regional, arquitetura pública e gestão
                    ambiental municipal
                  </b>
                  , desenvolvendo planos, diagnósticos e instrumentos legais que
                  se convertem em <b>ferramentas reais</b> de gestão dentro das
                  prefeituras.
                </p>
                <p>
                  Ao longo de mais de duas décadas, consolidamos um método
                  próprio de trabalho:{" "}
                  <b>
                    leitura técnica do território, integração com dados oficiais
                    e tradução em documentos executáveis
                  </b>
                  , compatíveis com a estrutura administrativa e a legislação
                  vigente.
                </p>
                <p className="font-bold text-base">
                  Experiência que se traduz em segurança para o gestor público
                </p>
                <p>
                  Desde 2003, acompanhamos a evolução das exigências legais,
                  ambientais e urbanísticas, adaptando nossos métodos às novas
                  demandas sem perder o foco na <b>aplicabilidade prática.</b>
                </p>
                <p>
                  Essa trajetória oferece ao gestor a segurança de contar com
                  uma equipe que <b>conhece a realidade municipal</b>, suas
                  limitações e suas potencialidades.
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

          <div className="grid md:grid-cols-2 gap-8">
            {oursValues.map((value, idx) => (
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
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-[#FFF5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Nosso Compromisso
            </h2>
            <p className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow w-1/2 mx-auto text-lg text-neutral-900">
              Transformar conhecimento técnico em soluções públicas concretas, estruturando o território, qualificando a gestão e deixando como legado documentos que permanecem úteis por muitos anos.<br/>
Mais que tempo de mercado, entregamos tempo de experiência aplicado ao território.
            </p>
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
              Conheça quem está à frente da MBUrb.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-neutral-50 to-[#FFF5F0] rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="aspect-square rounded-full overflow-hidden shadow-xl">
                    <img
                      src="/marcia2.png"
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
