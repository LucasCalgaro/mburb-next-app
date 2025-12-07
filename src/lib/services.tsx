import {
  Home,
  Leaf,
  Building,
  Droplets,
  Recycle,
  Sprout,
  Trees,
  Wind,
  Drone,
  FileText,
  PencilRuler,
  Users,
  Briefcase,
  Map,
  MapPin,
} from "lucide-react";

export const categories = [
  { name: "Arquitetura", color: "from-orange-500 to-red-500" },
  { name: "Planejamento Urbano", color: "from-blue-500 to-cyan-500" },
  { name: "Saneamento", color: "from-green-500 to-emerald-500" },
  { name: "Sustentabilidade", color: "from-purple-500 to-pink-500" },
  { name: "Geotecnologia", color: "from-orange-500 to-amber-500" },
];

export const services = [
  {
    slug: "design-de-interiores",
    name: "Design de Interiores",
    category: "Arquitetura",
    icon: <Home className="text-orange-500" />,
    banner: "/servicos/design-de-interiores.jpg",
    description: (
      <>
        <p className="mb-4">
          O <b className="text-orange-600">designer de interiores</b> planeja e
          projeta os mais diferentes espaços internos residenciais, comerciais e
          institucionais, distribuindo os elementos pensando na estética, no
          conforto, na saúde e segurança dos usuários e na funcionalidade do
          local.
        </p>
      </>
    ),
  },
  {
    slug: "paisagismo",
    name: "Paisagismo",
    category: "Arquitetura",
    icon: <Trees className="text-orange-500" />,
    banner: "/servicos/paisagismo.jpg",
    description: (
      <>
        <p className="mb-4">
          <b className="text-orange-600">Paisagismo</b> é a técnica de projetar,
          planejar, fazer a gestão e a preservação de espaços livres, sendo eles
          públicos ou privados, urbanos e não-urbanos. Essa área é relacionada
          diretamente com a arquitetura e o urbanismo e visa, em suma, organizar
          a paisagem.
        </p>
      </>
    ),
  },
  {
    slug: "projetos-arquitetonicos",
    name: "Projetos Arquitetônicos",
    category: "Arquitetura",
    icon: <Building className="text-orange-500" />,
    banner: "/servicos/projetos-arquitetonicos.jpg",
    description: (
      <>
        <p className="mb-4">
          O Projeto Arquitetônico torna a ideia do espaço imaginado em algo
          materializado. Por meio dele é possível analisar a melhor maneira de
          atender as necessidades do usuário e a melhor forma de resolver todos
          os problemas envolvidos nesse processo. Ele busca prever possíveis
          problemas de execução do projeto proposto e garantindo que a obra saia
          como planejada.
        </p>
        <p className="mb-4">
          Contém a representação de todos os ambientes e suas dimensões, uma
          ideia prévia da modulação estrutural e detalhes construtivos: portas,
          janelas, paredes, forros, coberturas, especificação de materiais
          construtivos e revestimentos, referências para a implantação no
          terreno, indicações de níveis, acessos, circulações, ou seja, todas as
          informações importantes para a execução de um edifício.
        </p>
        <p className="font-bold text-orange-600">
          Um Projeto Arquitetônico tem 5 etapas:
        </p>
        <p className="mb-4">
          <b className="text-orange-600">1) Pré-projeto:</b> Onde são levantadas
          todas as necessidades pré-existentes do projeto.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">2) Estudos preliminares:</b> É a
          primeira etapa de elaboração técnica do projeto onde serão definidas
          as plantas humanizadas, perspectivas 3D, layouts etc.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">3) Anteprojeto:</b> Aprovado o projeto
          preliminar, são definidas as informações técnicas que auxiliam na
          execução da obra onde é colocado em prática o desenvolvimento do
          projeto.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">4) Projeto executivo:</b> É a fase
          concepção do projeto, realizada a representação final com todas as
          informações técnicas do mesmo.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">5) Compatibilização:</b> Realiza a
          união do projeto com todos os outros elementos complementares que o
          compõem.
        </p>
      </>
    ),
  },
  {
    slug: "analise-tecnica",
    name: "Análise Técnica",
    category: "Arquitetura",
    icon: <PencilRuler className="text-orange-500" />,
    banner: "/servicos/analise-tecnica.jpg",
    description: (
      <>
        <p className="mb-4">
          A <b className="text-orange-600">análise</b> modela o problema e
          consiste das atividades necessárias para entender o domínio do
          problema, o que deve ser feito. É uma atividade de investigação. O
          projeto modela a solução e consiste das atividades de criação, como
          pode ser feito.
        </p>
      </>
    ),
  },
  {
    slug: "plano-diretor-municipal",
    name: "Plano Diretor Municipal",
    category: "Planejamento Urbano",
    icon: <Map className="text-orange-500" />,
    banner: "/servicos/plano-diretor-municipal.jpg",
    description: (
      <>
        <p className="mb-4">
          Elaboração do{" "}
          <b className="text-orange-600">Plano Diretor Municipal</b>, em
          conformidade com a Lei Federal n° 10.257/2001 - Estatuto da Cidade e
          de acordo com os princípios da participação popular.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">Plano de Trabalho:</b> Detalhamento da
          metodologia e definição dos objetivos e atividades.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">Análise Temática Integrada</b>: Leitura
          Técnica, Levantamento e Mapeamento das Características do Meio Físico,
          Identificação de Tendências Sócio Espaciais, Caracterização e Tenência
          do Uso do Solo, Situação e Tendência da Infraestrutura, dos Serviços e
          Equipamentos Públicos, Análise da Legislação Urbanística e
          Físico-Territorial, Elaboração das Minutas de Lei.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">Leitura Participativa:</b>{" "}
          Identificação dos territórios comunitários, dos grupos de interesses e
          dos conflitos entre as formas de uso e ocupação de solo e confrontar
          os dados levantados e analisados na leitura técnica.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">A MBUrb Consultoria e Planejamento</b>{" "}
          tem uma vasta experiência em elaboração de Plano Diretor Municipal,
          primando pelo detalhamento de informações do mapeamento e qualidade da
          apresentação final.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">SISTEMA WEBGIS:</b> Desenvolver um
          sistema denominado de WEBGIS do Plano Diretor, para utilização em
          ambiente WEB, com atualização de dados diretamente em um repositório
          central (Banco de Dados Relacional), tornando o sistema
          georreferenciado e instalado na prefeitura para consultas.
        </p>
      </>
    ),
  },
  {
    slug: "plano-de-gestao-administrativa",
    name: "Plano de Gestão Administrativa",
    category: "Planejamento Urbano",
    icon: <Briefcase className="text-orange-500" />,
    banner: "/servicos/plano-de-gestao-administrativa.jpg",
    description: (
      <>
        <p className="mb-4">
          <b className="text-orange-600">
            Plano de Classificação de Cargos e Salários - PCCR
          </b>
        </p>
        <p className="mb-4">
          O Plano de Classificação de Cargos e Salários é um instrumento que
          contribui para a melhoria da política de recursos humanos expressa na
          legislação, evitando distorções funcionais e salariais, organiza a
          política de cargos, carreiras e salários, assegurando condições para
          atrair e manter pessoal qualificado e motivado no sentido de um
          constante crescimento no desempenho funcional.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">Estrutura Organizacional</b>
        </p>
        <p className="mb-4">
          O dimensionamento da Estrutura Organizacional pode contribuir
          significativamente para o sucesso e eficácia da Instituição, para
          tanto se faz necessário definir as atribuições das Unidades
          Administrativas, de forma a atender a demanda da comunidade alvo, bem
          como racionalizar a demanda dos serviços prestados.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">Estatuto dos Servidores</b>
        </p>
        <p className="mb-4">
          O Estatuto dos Servidores Municipais é a lei editada por cada
          Município que estabelece os direitos e os deveres dos servidores da
          Administração direta, autárquica e fundacional, segundo as
          peculiaridades locais e os comandos da Constituição Federal.
        </p>
        <p className="mb-4">
          O objetivo da elaboração do Estatuto dos servidores é suprimir as
          falhas porventura existentes, compatibilizar a legislação com a
          Constituição Federal e redefinir a relação jurídico - funcional do
          Governo Municipal com os servidores atuantes das várias áreas da
          Administração Municipal.
        </p>
      </>
    ),
  },
  {
    slug: "plano-de-regularizacao-fundiaria-sustentavel",
    name: "Plano de Regularização Fundiária Sustentável",
    category: "Planejamento Urbano",
    icon: <Briefcase className="text-orange-500" />,
    banner: "/servicos/plano-de-regularizacao-fundiaria.jpg",
    description: (
      <>
        <p className="mb-4">
          Elaboração do{" "}
          <b className="text-orange-600">
            Plano Municipal de Regularização Fundiária Sustentável
          </b>
          :
        </p>
        <p className="mb-4">
          <b className="text-orange-600">Planejamento para entrada em Campo:</b>{" "}
          Relatório contendo as estratégias de divulgação do plano: formato,
          conteúdo e quantidade de materiais para divulgação das atividades, dos
          seminários e audiências públicas, organograma dos segmentos sociais e
          das organizações existentes no município.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">Cronogramas</b> das oficinas,
          seminários e audiência pública, modelo de questionário para
          levantamento socioeconômico e identificação dos atores sociais
          Relatório do Trabalho Social, Estruturação do SIG Fundiário, Relatório
          Urbanístico.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">
            Caracterização do município e Relatório do Trabalho Jurídico:
          </b>{" "}
          descrição dos instrumentos jurídicos incidentes no município,
          elaboração da Minuta de Lei Elaboração da minuta de Legislação Básica
          para instituição do PMRFS - Plano Municipal de Regularização Fundiária
          Sustentável Processo Participativo.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">
            Registro de todas as etapas de elaboração do PMRFS
          </b>
          , contendo meios de divulgação, listas de presença das Audiências
          Públicas, Reuniões Comunitárias, Técnicas e de Trabalho, cópias dos
          materiais e apresentações utilizadas nos treinamentos e reuniões
          públicas, bem como o registro fotográfico destes eventos, ente outros.
        </p>
      </>
    ),
  },

  {
    slug: "plano-municipal-de-turismo",
    name: "Plano Municipal de Turismo",
    category: "Planejamento Urbano",
    icon: <Users className="text-orange-500" />,
    banner: "/servicos/plano-municipal-de-turismo.webp",
    description: (
      <>
        <p className="mb-4">
          O <b className="text-orange-600">Plano Municipal de Turismo</b> é uma
          ferramenta que tem o intuito de contribuir com o desenvolvimento da
          atividade em âmbito municipal, apresentando estratégias e ações
          voltadas ao incremento e estruturação do turismo no destino.
        </p>
        <p className="mb-4">
          Para a elaboração deve-se levar em conta o{" "}
          <b className="text-orange-600">Inventário Turístico</b> que é um
          levantamento detalhado sobre as características geográficas,
          demográficas, climáticas, socioeconômicas, tecnológicas, legais e
          políticas de uma localidade, com ênfase para a identificação de todos
          os equipamentos, infraestrutura, meios de acesso e serviços de apoio
          prestados nesta localidade, com identificação de seus atrativos
          turísticos.
        </p>
        <p className="mb-4">
          Por meio dele são diagnosticados todos os dados de cada empreendimento
          (restaurante, padaria, sorveteria, posto de combustível, farmácia,
          hospital, igreja, pontos turísticos, entre outros), com suas
          informações complementares específicas: localização, telefone,
          proprietário, e-mail, site, horário de funcionamento, capacidade, etc.
          O inventário possibilita a definição de prioridades para os recursos
          disponíveis e o incentivo ao turismo sustentável.
        </p>
      </>
    ),
  },
  {
    slug: "planta-generica-de-valores",
    name: "Planta Genérica de Valores",
    category: "Planejamento Urbano",
    icon: <FileText className="text-orange-500" />,
    banner: "/servicos/planta-generica-de-valores.jpg",
    description: (
      <>
        <p className="mb-4">
          <b className="text-orange-600">Planta Genérica de Valores - PGV</b>
        </p>
        <p className="mb-4">
          Com o propósito de cobrança do IPTU e ITBI, cada prefeitura necessita
          saber a área de terreno e área de construção de cada propriedade do
          município, após isso, necessita avaliar o terreno e construção, soma
          os dois valores e aplica um percentual pré-determinado sobre o
          resultado que será, por fim, o imposto devido.
        </p>
        <p className="mb-4">
          O IPTU e ITBI são calculados sobre o valor do imóvel e sobre a função
          social do imóvel. É sabido que, algumas prefeituras cobram menos
          impostos dos menos favorecidos.
        </p>
        <p className="mb-4">
          No caso do recadastramento da área de terreno e área de construção de
          cada imóvel, a prefeitura pode optar por fazer as medições no local,
          utilizando, para tanto, uma considerável mão-de-obra. Ou, então,
          contratar empresa de aerofotometria, que, por digitalização de fotos,
          determinar-se-ão tais áreas.
        </p>
        <p className="mb-4">
          O tipo e padrão construtivo do imóvel, assim como a sua área e
          localização do prédio, influenciam no valor da construção. O valor do
          terreno é fixado através da Planta Genérica do Município – PGM. Na
          PGM, cada região ou via pública possui um determinado valor por metro
          quadrado, que multiplicado pela área total do terreno determinará o
          valor total. – Os valores da PGM são calculados por engenheiros e
          arquitetos avaliadores.
        </p>
      </>
    ),
  },
  {
    slug: "plano-local-de-habitacao-de-interesse-social",
    name: "Plano Local de Habitação de Interesse Social",
    category: "Planejamento Urbano",
    icon: <Home className="text-orange-500" />,
    banner: "/servicos/plano-habitacional-social.jpg",
    description: (
      <>
        <p className="mb-4">
          Elaboração do{" "}
          <b className="text-orange-600">
            Plano Local de Habitação de Interesse Social
          </b>
          , em conformidade com a Lei federal nº 11.124/2005, compreendendo as
          seguintes atividades:
        </p>
        <p className="mb-4">
          <b className="text-orange-600">
            Proposta Metodológica e Plano de Trabalho
          </b>
          : Diagnóstico do Setor Habitacional, levantamento de dados com os
          cenários, metas, estratégias e mecanismos de implantação do PLHIS.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">Estratégias de Ação</b>: Elaboração de
          Propostas Técnicas da Política de Habitação do Município abordando os
          objetivos, diretrizes e linha de ação, Programas de Política
          Habitacional, captação de recursos, instrumentos de Gestão Democrática
          e Participativa e Estrutura de Suporte SIG.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">Estruturação do SIG Habitacional</b>{" "}
          Sistema de Informação Geográfica, contendo banco de dados e
          espacialização de dados relacionados às questões habitacionais,
          infraestrutura e equipamentos públicos associados a ferramentas de
          geoprocessamento.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">Processo Participativo:</b> registro de
          todas as etapas de elaboração do PLHIS, contendo meios de comunicação,
          listas de presença, audiências públicas, reuniões comunitárias,
          técnicas de trabalho, entre outros.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">A MBUrb Consultoria e Planejamento</b>{" "}
          já elaborou diversos PLHIS, identificando a situação atual do
          município, por meio de levantamentos do déficit habitacional
          apresentando metas e ações futuras.
        </p>
      </>
    ),
  },
  {
    slug: "plano-de-mobilidade-urbana",
    name: "Plano de Mobilidade Urbana",
    category: "Planejamento Urbano",
    icon: <MapPin className="text-orange-500" />,
    banner: "/servicos/plano-de-mobilidade-urbana.jpeg",
    description: (
      <>
        <p className="mb-4">
          O <b className="text-orange-600">Plano de Mobilidade Urbana (PMU)</b>{" "}
          é um instrumento de planejamento de ações de curto, médio e longo
          prazo. Baseado na Lei Federal n. 12.587/2001, que instituiu as
          diretrizes da Política Nacional de&nbsp;Mobilidade&nbsp;Urbana, exige
          que municípios elaborem os seus&nbsp;planos de mobilidade.
        </p>
      </>
    ),
  },
  {
    slug: "plano-de-recursos-hidricos",
    name: "Plano de Recursos Hídricos",
    category: "Saneamento",
    icon: <Wind className="text-orange-500" />,
    banner: "/servicos/plano-de-recursos-hidricos.jpg",
    description: (
      <>
        <p className="mb-4">
          Elaboração do{" "}
          <b className="text-orange-600">
            Plano Municipal de Recursos Hídricos
          </b>
          , em conformidade com a Lei Federal n° 9.433/1997, que compreende:
        </p>
        <p className="mb-4">
          <b className="text-orange-600">Plano de Trabalho</b>: Detalhamento da
          metodologia.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">Diagonósticos</b>: Levantamento e
          mapeamento fundamentados na avaliação quantitativa e qualitativa da
          disponibilidade hídrica das principais sub-bacias hidrográficas do
          município.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">Objetivos, Metas e Ações</b>:
          Identificação de prioridades das ações, possíveis Órgãos e entidades
          executadoras ou intervenientes, fontes de recursos e estabelecimento
          de prazos de execução, proposta para adequação e/ou estruturação do
          Sistema de Gerenciamento de Recursos Hídricos da Bacia, Ações de
          educação ambiental.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">
            Diretrizes e critérios para a cobrança da água.
          </b>
        </p>
        <p className="mb-4">
          <b className="text-orange-600">
            Propostas de Enquadramento dos corpos d&apos;água.
          </b>
        </p>
        <p className="mb-4">
          <b className="text-orange-600">Estruturação SIG</b>, Sistema de
          Informações Geográficas de caracterização física do município contendo
          camadas de informações sobre: hipsometria, declividade, sub-bacias
          hidrográficas, grupos de solos, potencial erosivo dos solos, poços e
          captações superficiais outorgadas e estação fluviométrica.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">
            Proposição de legislação sobre a gestão de recursos hídricos do
            município
          </b>
          : levantamento dos aspectos legais, com diretrizes para adequações e
          melhoramentos na normalização, monitoramento e fiscalização da gestão
          de recursos hídricos do município.
        </p>
        <p className="mb-4">
          A <b className="text-orange-600">MBUrb Consultoria e Planejamento</b>{" "}
          através deste plano visa melhorar o uso dos recursos hídricos buscando
          com o mínimo de impacto ambiental possível, elaborando um PMRH
          adequado com o cenário do município.
        </p>
      </>
    ),
  },
  {
    slug: "plano-de-saneamento-basico",
    name: "Plano de Saneamento Básico",
    category: "Saneamento",
    icon: <Droplets className="text-orange-500" />,
    banner: "/servicos/plano-de-saneamento-basico.png",
    description: (
      <>
        <p className="mb-4">
          Elaboração do{" "}
          <b className="text-orange-600">
            Plano Municipal de Saneamento Básico
          </b>
          , em conformidade com a Lei Federal n° 11.445/2007, compreendendo as
          seguintes atividades:
        </p>
        <p className="mb-4">
          <b className="text-orange-600">
            Plano de Trabalho, Plano de Mobilização Social e Diagnóstico
          </b>{" "}
          do abastecimento de água, esgotamento sanitário, limpeza urbana,
          manejo de resíduos sólidos, macro e micro drenagem e manejo de águas
          pluviais.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">
            Objetivos, Metas e Ações para o horizonte de 20 anos
          </b>
          , incluindo estimativa de valores e identificação de possíveis fontes
          de recursos. Ações para Emergências e Contingências e Mecanismos de
          Avaliação e Monitoramento.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">Institucionalização do Plano</b>:
          indicações de ações visando o fortalecimento institucional dos setores
          da Prefeitura Municipal ligados ao saneamento, proposição de minuta de
          legislação básica referente à política municipal de saneamento e
          regulamentos dos quatro setores do saneamento básico.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">SIG-Saneamento</b> e Mecanismos de
          Participação da Sociedade para a avaliação dos resultados após a
          implantação do plano.
        </p>
        <p className="mb-4">
          A <b className="text-orange-600">MBUrb Consultoria e Planejamento</b>{" "}
          elabora o PMSB de acordo com a realidade do município, propondo
          soluções adequadas para cada eixo do saneamento.
        </p>
      </>
    ),
  },
  {
    slug: "plano-de-residuos-solidos",
    name: "Plano de Resíduos Sólidos",
    category: "Saneamento",
    icon: <Recycle className="text-orange-500" />,
    banner: "/servicos/plano-de-residuos-solidos.webp",
    description: (
      <>
        <p className="mb-4">
          Elaboração do{" "}
          <b className="text-orange-600">
            Plano Municipal de Gestão de Resíduos Sólidos
          </b>
          , baseado na Lei Federal n° 12.305/2007, que compreende:
        </p>
        <p className="mb-4">
          <b className="text-orange-600">
            Plano de Trabalho e Plano de Mobilização Social
          </b>
          : Elaboração do Plano de Trabalho contendo: descrição das atividades
          necessárias para cumprir os objetivos de cada fase de elaboração do
          PGRS, processo de participação da sociedade, cronograma das fases de
          elaboração dos produtos, previsão de audiências públicas, detalhamento
          das responsabilidades de todos os agentes envolvidos no processo.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">Panorama dos Resíduos Sólidos</b>: O
          diagnóstico é a base orientadora dos prognósticos do Plano, da
          proposição de cenários, da definição de diretrizes e metas e do
          detalhamento de seus programas, projetos e ações.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">Estruturação SIG</b>: Sistema de
          Informações Geográficas de caracterização física do município contendo
          camadas de informações sobre: hipsometria, declividade, sub-bacias
          hidrográficas, grupos de solos, potencial erosivo dos solos,
          hidrografia e limite municipal.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">
            Proposição de legislação sobre a gestão de resíduos sólidos do
            município
          </b>
          : levantamento dos aspectos legais, com diretrizes para adequações e
          melhoramentos na normalização, monitoramento e fiscalização da gestão
          de resíduos sólidos do município.
        </p>
        <p className="mb-4">
          A <b className="text-orange-600">MBUrb Consultoria e Planejamento</b>{" "}
          através deste plano visa minimizar a geração de resíduos sólidos na
          fonte, elaborando um PMGRS adequado com o cenário do município.
        </p>
      </>
    ),
  },
  {
    slug: "cadastro-ambiental-rural",
    name: "Cadastro Ambiental Rural",
    category: "Sustentabilidade",
    icon: <FileText className="text-orange-500" />,
    banner: "/servicos/cadastro-ambiental-rural.jpeg",
    description: (
      <div>
        <p className="mb-4">
          O <b className="text-orange-600">Cadastro Ambiental Rural</b> um
          registro eletrônico, obrigatório para todos os imóveis rurais, que tem
          por finalidade integrar as informações ambientais referentes à
          situação das Áreas de Preservação Permanentes – APP, das áreas de
          Reserva Legal – RL, das florestas e dos remanescentes de vegetação
          nativa, das Áreas de Uso Restrito e das Áreas Consolidadas das
          propriedades e posses rurais.
        </p>
        <p className="mb-4">
          O CAR foi criado pela Lei 12,651/2010 no âmbito do Sistema Nacional de
          Informação sobre Meio Ambiente – SINIMA, e regulamentado pela
          Instrução Normativa MMA n. 2/2014.
        </p>
      </div>
    ),
  },
  {
    slug: "plano-de-manejo",
    name: "Plano de Manejo",
    category: "Sustentabilidade",
    icon: <Leaf className="text-orange-500" />,
    banner: "/servicos/plano-de-manejo.jpg",
    description: (
      <>
        <p className="mb-4">
          O <b className="text-orange-600">plano de manejo (PM)</b> é o
          documento técnico que, usando como base os objetivos gerais de uma
          unidade de conservação, estabelece seu zoneamento e as normas que
          devem nortear e regular o uso que se fará da área e o manejo dos
          recursos naturais, inclusive a implantação de estruturas físicas
          necessárias à gestão, conforme previsto na Lei do Sistema Nacional de
          Unidade de Conservação da Natureza (SNUC).
        </p>
        <p className="mb-4">
          O Plano serve para definir o que se pretende fazer na área da RPPN, de
          maneira responsável, técnica e legalmente aceitável. Sua função é
          também fazer com que a RPPN cumpra o seu papel, de acordo com as
          previsões pelas quais ela foi criada.
        </p>
      </>
    ),
  },
  {
    slug: "plano-de-arborizacao-urbana",
    name: "Plano de Arborização Urbana",
    category: "Sustentabilidade",
    icon: <Trees className="text-orange-500" />,
    banner: "/servicos/plano-de-arborizacao-urbana.jpg",
    description: (
      <>
        <p className="mb-4">
          A <b className="text-orange-600">arborização urbana</b> exerce
          inúmeras funções ambientais e socioambientais, dentre elas a
          manutenção e ampliação das Áreas Verdes Urbanas, a proteção de
          diversas espécies da fauna e a tutela do bem-estar e da qualidade de
          vida das presentes e futuras gerações de populações das cidades, razão
          pela qual se apresenta evidente o seu caráter de bem difuso e a sua
          inserção como tema prioritário de atuação do Ministério Público.
        </p>
        <p className="mb-4">
          A arborização de ruas desempenha inúmeras funções no meio urbano, tais
          como: ecológicas -melhoria do microclima, atenuação da poluição
          atmosférica e sonora, conservação da biodiversidade local (fauna e
          flora), entre outros; estéticas –identidade local, sensação de
          continuidade entre os componentes urbanos, contraste harmônico do
          concreto e asfalto com a árvore, adiciona dinamismo à paisagem urbana,
          entre outros; e sociais – amenização do estresse psicológico, conforto
          térmico, benefício econômico pela valorização imobiliária, educação
          ambiental e melhoria na qualidade de vida da população nas cidades
          (BIONDI &amp; ALTHAUS, 2005).
        </p>
      </>
    ),
  },
  {
    slug: "plano-de-recuperacao-de-areas-degradadas",
    name: "Plano de Recuperação de Áreas Degradadas",
    category: "Sustentabilidade",
    icon: <Sprout className="text-orange-500" />,
    banner: "/servicos/plano-de-recuperacao-de-areas-degradadas.jpg",
    description: (
      <>
        <p className="mb-4">
          Podemos considerar área degradada como toda área que, por ação natural
          ou antrópica, teve suas características originais alteradas além do
          limite de recuperação natural, exigindo, assim, a intervenção do homem
          para sua recuperação. Nessa situação é necessário criar um plano de
          ação para recuperar tal área, chamado de Plano de Recuperação de Áreas
          Degradadas (PRAD), instituído pelo{" "}
          <b className="text-orange-600">Decreto/Lei nº 97.632/1989</b>.
        </p>
        <p className="mb-4">
          O{" "}
          <b className="text-orange-600">
            Plano de Recuperação de Áreas Degradadas – PRAD
          </b>{" "}
          é solicitado pelos órgãos ambientais como parte integrante do processo
          de licenciamento de atividades degradadoras ou modificadoras do meio
          ambiente como também, após o empreendimento ser punido
          administrativamente por causar degradação ambiental.
        </p>
        <p className="mb-4">
          Tecnicamente, o PRAD refere-se ao conjunto de medidas que propiciarão
          à área degradada condições de estabelecer um novo equilíbrio dinâmico,
          com solo apto para uso futuro e paisagem esteticamente harmoniosa.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">A MBUrb Consultoria e Planejamento</b>{" "}
          temos profissionais preparados para coletar dados, analisá-los e
          montar um PRAD efetivo de acordo com o problema ambiental enfrentado.
        </p>
      </>
    ),
  },
  {
    slug: "georreferenciamento",
    name: "Georreferenciamento",
    category: "Geotecnologia",
    icon: <Drone className="text-orange-500" />,
    banner: "/servicos/georreferenciamento.jpg",
    description: (
      <>
        <p className="mb-4">
          A <b className="text-orange-600">MBUrb Consultoria e Planejamento</b>{" "}
          oferece soluções em geotecnologia nos seguintes serviços:
        </p>
        <p className="mb-4">
          <b className="text-orange-600">Estruturação e Implementação da SIG</b>
          : Sistema de Informações Georreferenciadas em gestão de cidades e em
          gestão do saneamento e meio ambiente.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">
            Modelagem de banco de dados visando a estruturação da SIG
          </b>
          .
        </p>
        <p className="mb-4">
          <b className="text-orange-600">
            Mapeamento Digital e Georreferenciado
          </b>
          .
        </p>
        <p className="mb-4">
          <b className="text-orange-600">
            Fornecimento de Imagens de Satélite e Ortofotos
          </b>
          .
        </p>
        <p className="mb-4">
          <b className="text-orange-600">SIG Web</b>: aplicações de SIG na Web.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">
            Treinamento e Qualificação profissional
          </b>{" "}
          nas ferramentas de Geotecnologia.
        </p>
      </>
    ),
  },
  {
    slug: "cadastro-tecnico-multifinalitario",
    name: "Cadastro Técnico Multifinalitário",
    category: "Geotecnologia",
    icon: <FileText className="text-orange-500" />,
    banner: "/servicos/cadastro-tecnico-multifinalitario.jpg",
    description: (
      <>
        <p className="mb-4">
          O{" "}
          <b className="text-orange-600">
            Cadastro Técnico Multifinalitário - CTM
          </b>
        </p>
        <p className="mb-4">
          É um conjunto de arquivos que contém o registro de dados da base
          urbana, que se referem ao planejamento físico e controle do uso do
          solo, arrecadação municipal.
        </p>
        <p className="mb-4">
          Funciona como um sistema de informações do espaço territorial, onde as
          informações são organizadas em torno da unidade territorial jurídica
          da parcela (imóvel, lote, propriedade), sendo possível acompanhar e
          controlar as atividades urbanas.
        </p>
        <p className="mb-4">
          <b className="text-orange-600">Objetivo:</b>
        </p>
        <p className="mb-4">
          - Elaborar um modelo de banco de dados espaciais para ser utilizado no
          planejamento urbano;
        </p>
        <p className="mb-4">
          - Estruturar um sistema de dados a ser integrado na base cartográfica;
        </p>
        <p className="mb-4">
          - Aplicar uma metodologia para facilitar a gestão urbana através da
          geotecnologia.
        </p>
      </>
    ),
  },
];
