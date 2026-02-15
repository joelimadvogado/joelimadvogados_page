export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    content: string; // Em um cenário real, isso seria MDX ou HTML
}

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: "revisao-da-vida-toda-2026",
        title: "Revisão da Vida Toda: O que mudou em 2026?",
        excerpt: "Entenda as novas diretrizes do STF e como elas impactam o cálculo da sua aposentadoria neste ano.",
        date: "12 Mar, 2026",
        readTime: "5 min",
        category: "Direito Previdenciário",
        image: "/images/blog/revisao.jpg", // Placeholder
        content: `
      <p>A "Revisão da Vida Toda" continua sendo um dos temas mais debatidos no Direito Previdenciário. Em 2026, novas diretrizes foram estabelecidas para garantir que os segurados que contribuíram com valores maiores antes de 1994 não sejam prejudicados.</p>
      <h3>Quem tem direito?</h3>
      <p>Em tese, trabalhadores que se aposentaram nos últimos 10 anos e possuíam salários de contribuição mais altos antes do Plano Real.</p>
      <h3>Como solicitar?</h3>
      <p>É imprescindível realizar um cálculo prévio com um advogado especialista. Nem sempre a revisão é vantajosa. Em alguns casos, o valor do benefício pode até diminuir se não for calculado corretamente.</p>
      <p>Entre em contato conosco para uma análise detalhada do seu caso.</p>
    `,
    },
    {
        slug: "planejamento-sucessorio-familiar",
        title: "Planejamento Sucessório: Como evitar brigas e impostos excessivos",
        excerpt: "Proteja o patrimônio da sua família e garanta uma transição tranquila com estratégias jurídicas inteligentes.",
        date: "05 Fev, 2026",
        readTime: "7 min",
        category: "Direito Civil",
        image: "/images/blog/sucessao.jpg", // Placeholder
        content: `
      <p>Muitas famílias brasileiras enfrentam processos de inventário longos e custosos. O planejamento sucessório surge como uma alternativa para organizar a transferência de bens ainda em vida.</p>
      <h3>Ferramentas principais</h3>
      <ul>
        <li><strong>Doação com reserva de usufruto:</strong> Garante que os pais continuem usando os bens enquanto viverem.</li>
        <li><strong>Holdings Familiares:</strong> Estruturas empresariais para gestão de patrimônio com menor carga tributária.</li>
        <li><strong>Testamentos:</strong> Para garantir que a vontade do testador seja respeitada nos limites da lei.</li>
      </ul>
      <p>Não deixe para resolver questões patrimoniais apenas no momento de dor. Planeje agora.</p>
    `,
    },
    {
        slug: "auxilio-doenca-novas-regras",
        title: "Auxílio-Doença: Novas regras para perícia médica",
        excerpt: "Saiba como agilizar seu benefício por incapacidade com o novo sistema de documentação online.",
        date: "20 Jan, 2026",
        readTime: "4 min",
        category: "Direito Previdenciário",
        image: "/images/blog/auxilio.jpg", // Placeholder
        content: `
      <p>O INSS modernizou o processo de concessão do Auxílio-Doença (agora Benefício por Incapacidade Temporária). A análise documental, conhecida como Atestmed, foi ampliada.</p>
      <h3>O que é o Atestmed?</h3>
      <p>É a possibilidade de concessão do benefício apenas com a análise de documentos médicos e odontológicos, sem a necessidade de perícia presencial, para afastamentos de até 180 dias.</p>
      <h3>Cuidados com o Laudo</h3>
      <p>Para ser aceito, o laudo deve conter CID, tempo estimado de repouso, assinatura e carimbo do médico, além de estar legível e sem rasuras.</p>
    `,
    },
];
