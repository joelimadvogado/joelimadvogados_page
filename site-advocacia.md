# PLAN: Site de Advocacia (Joel Lima Advocacia)

Este é o roteiro técnico para a criação do site de advocacia especializado em Direito Civil e Previdenciário.

## 📋 Visão Geral
Criação de um site de alta performance, visualmente sóbrio e impressionante, com foco em autoridade e facilidade de contato.

**Tipo de Projeto: WEB**

## 🎯 Critérios de Sucesso
- Carregamento inicial em menos de 1.5s.
- Efeito "Puzzle Hero" funcionando sem falhas (8 quadros sincronizados).
- Integração funcional com Instagram Reels.
- 100% responsivo (Mobile First).

## 🛠️ Tech Stack Proposto
- **Framework**: Next.js (App Router) - Para SEO e performance.
- **Styling**: Tailwind CSS - Para agilidade e design system.
- **Animações**: Framer Motion - Para a entrada do puzzle e micro-interações de zoom.
- **Icons**: Lucide React.
- **Components**: Radix UI (para acessibilidade).

## 📂 Estrutura de Arquivos (Proposta)
```plaintext
src/
├── components/
│   ├── hero/
│   │   ├── PuzzleGrid.tsx
│   │   └── PuzzleCard.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── shared/
│       ├── WhatsAppButton.tsx
│       └── InstagramFeed.tsx
├── app/
│   ├── page.tsx (Home)
│   ├── quem-somos/
│   │   └── page.tsx
│   └── contato/
│       └── page.tsx
└── styles/
    └── globals.css
```

## 📝 Lista de Tarefas (Work Breakdown)

### Fase 1: Fundação
- [ ] **Task 1.1**: Setup do projeto Next.js com Tailwind e Framer Motion.
  - **Agente**: `devops-engineer` | **Skill**: `app-builder`
- [ ] **Task 1.2**: Implementação do Design System (Cores: Verde #009600, Azul #0200F1).
  - **Agente**: `frontend-specialist` | **Skill**: `frontend-design`

### Fase 2: Hero & Interatividade
- [ ] **Task 2.1**: Criação do "Puzzle Hero" (8 quadros com entrada animada).
  - **Agente**: `frontend-specialist` | **Skill**: `ui-ux-pro-max`
- [ ] **Task 2.2**: Implementação do micro-zoom nos quadros do escritório.
  - **Agente**: `frontend-specialist` | **Skill**: `frontend-design`

### Fase 3: Conteúdo e Feed
- [ ] **Task 3.1**: Integração do Feed do Instagram (Reels de @joellimaadvocacia).
  - **Agente**: `frontend-specialist` | **Skill**: `api-patterns`
- [ ] **Task 3.2**: Criação das páginas "Quem Somos" e "Contato".
  - **Agente**: `frontend-specialist` | **Skill**: `frontend-design`

### Fase 4: Polimento
- [ ] **Task 4.1**: Adição do botão flutuante de WhatsApp.
  - **Agente**: `frontend-specialist` | **Skill**: `clean-code`
- [ ] **Task 4.2**: Otimização de SEO e Meta Tags.
  - **Agente**: `seo-specialist` | **Skill**: `seo-fundamentals`

## ✅ Phase X: Verificação Final
- [ ] Segurança: `python .agent/scripts/checklist.py .`
- [ ] UX Audit: `python .agent/scripts/frontend-design/scripts/ux_audit.py .`
- [ ] Build: `npm run build`
- [ ] Sem cores proibidas (Purple Ban).
