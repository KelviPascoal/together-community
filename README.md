# Together - Rede Social por Interesses

Uma plataforma de rede social focada em conectar pessoas através de interesses e atividades em comum, priorizando conexões autênticas ao invés de ostentação.

## 🚀 Tecnologias

### Backend
- **Node.js** com TypeScript
- **Express** para API REST
- **Prisma** como ORM
- **PostgreSQL** como banco de dados
- **JWT** para autenticação

### Frontend
- **Next.js 14** com TypeScript
- **React 18**
- **Tailwind CSS** para estilização
- **Axios** para requisições HTTP
- **Zustand** para gerenciamento de estado

### DevOps
- **Docker** e **Docker Compose** para orquestração
- Ambiente containerizado para desenvolvimento e produção

## 📁 Estrutura do Projeto

```
together-app/
├── backend/
│   ├── prisma/
│   │   └── schema.prisma          # Schema do banco de dados
│   ├── src/
│   │   ├── config/                # Configurações (env, etc)
│   │   ├── features/              # Features da aplicação
│   │   │   ├── auth/              # Autenticação
│   │   │   ├── users/             # Usuários
│   │   │   ├── interests/         # Interesses
│   │   │   ├── activities/        # Atividades
│   │   │   └── posts/             # Posts
│   │   ├── infra/                 # Infraestrutura (database, etc)
│   │   ├── shared/                # Código compartilhado
│   │   │   ├── middleware/        # Middlewares
│   │   │   └── types/             # Types globais
│   │   └── server.ts              # Entry point
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── app/                   # Next.js App Router
│   │   ├── config/                # Configurações
│   │   ├── features/              # Features da aplicação
│   │   │   ├── auth/              # Autenticação
│   │   │   ├── feed/              # Feed de posts
│   │   │   ├── profile/           # Perfil do usuário
│   │   │   └── activities/        # Atividades
│   │   └── shared/                # Código compartilhado
│   │       ├── components/        # Componentes reutilizáveis
│   │       └── lib/               # Utilitários e helpers
│   ├── Dockerfile
│   ├── next.config.js
│   ├── package.json
│   ├── tailwind.config.js
│   └── tsconfig.json
│
├── .github/
│   └── copilot-instructions.md
├── docker-compose.yml
└── README.md
```

## 🛠️ Setup do Projeto

### Pré-requisitos
- Docker e Docker Compose instalados
- Node.js 18+ (para desenvolvimento local sem Docker)
- PostgreSQL (se não usar Docker)

### 🐳 Usando Docker (Recomendado)

1. **Clone o repositório**
```bash
git clone <seu-repositorio>
cd together-app
```

2. **Configure as variáveis de ambiente**
```bash
# Backend
cp backend/.env.example backend/.env

# Frontend
cp frontend/.env.example frontend/.env
```

3. **Inicie todos os serviços com Docker Compose**
```bash
docker-compose up -d
```

4. **Execute as migrations do banco de dados**
```bash
docker-compose exec backend npx prisma migrate dev
```

5. **Acesse as aplicações**
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- Banco de dados: localhost:5432

### 💻 Desenvolvimento Local (Sem Docker)

#### Backend

1. **Instale as dependências**
```bash
cd backend
npm install
```

2. **Configure o arquivo .env**
```bash
cp .env.example .env
# Edite o .env com suas configurações
```

3. **Execute as migrations**
```bash
npx prisma migrate dev
```

4. **Inicie o servidor**
```bash
npm run dev
```

#### Frontend

1. **Instale as dependências**
```bash
cd frontend
npm install
```

2. **Configure o arquivo .env**
```bash
cp .env.example .env.local
# Edite o .env.local com suas configurações
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

## 📊 Banco de Dados

### Modelos Principais

- **User**: Usuários da plataforma
- **Interest**: Interesses/tópicos
- **Activity**: Atividades e eventos
- **Post**: Publicações dos usuários
- **Comment**: Comentários em posts
- **Like**: Curtidas em posts
- **Follow**: Relacionamento de seguidores

### Prisma Studio

Para visualizar e editar dados do banco:
```bash
# Com Docker
docker-compose exec backend npx prisma studio

# Local
cd backend && npx prisma studio
```

## 🔑 Features Principais

### Implementadas
- ✅ Estrutura base do projeto
- ✅ Configuração do Docker
- ✅ Setup do banco de dados com Prisma
- ✅ Configuração do Next.js com Tailwind
- ✅ API REST básica

### A Implementar
- 🔲 Sistema de autenticação (JWT)
- 🔲 CRUD de usuários
- 🔲 Sistema de interesses
- 🔲 Criação e participação em atividades
- 🔲 Feed de posts
- 🔲 Sistema de comentários e likes
- 🔲 Sistema de seguidores
- 🔲 Busca por interesses e atividades
- 🔲 Upload de imagens
- 🔲 Notificações em tempo real

## 🧪 Scripts Disponíveis

### Backend
```bash
npm run dev          # Desenvolvimento com hot-reload
npm run build        # Build para produção
npm start            # Inicia servidor de produção
npm run lint         # Executa linter
npm run format       # Formata código
```

### Frontend
```bash
npm run dev          # Desenvolvimento
npm run build        # Build para produção
npm start            # Inicia servidor de produção
npm run lint         # Executa linter
npm run format       # Formata código
```

## 🐳 Comandos Docker Úteis

```bash
# Iniciar todos os serviços
docker-compose up -d

# Ver logs
docker-compose logs -f

# Parar todos os serviços
docker-compose down

# Rebuild de um serviço específico
docker-compose up -d --build backend

# Executar comando no container
docker-compose exec backend <comando>
docker-compose exec frontend <comando>

# Limpar volumes (CUIDADO: apaga dados do banco)
docker-compose down -v
```

## 🏗️ Arquitetura

O projeto segue uma arquitetura modular e escalável:

### Backend (Clean Architecture)
- **Features**: Cada feature é independente com seu controller, service e routes
- **Shared**: Código compartilhado entre features (middleware, types, utils)
- **Config**: Configurações centralizadas
- **Infra**: Camada de infraestrutura (database, cache, etc)

### Frontend (Feature-based)
- **Features**: Componentes, hooks e services por feature
- **Shared**: Componentes e utilitários reutilizáveis
- **Config**: Configurações da aplicação
- **App Router**: Sistema de rotas do Next.js 14

## 🤝 Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
2. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
3. Push para a branch (`git push origin feature/AmazingFeature`)
4. Abra um Pull Request

## 📝 Convenções de Código

- Use TypeScript para todo código
- Siga os padrões do ESLint configurado
- Use Prettier para formatação
- Commits em português seguindo padrões semânticos
- Nomes de variáveis e funções em inglês
- Comentários em português

## 📄 Licença

Este projeto está sob a licença MIT.

## 👥 Autores

Seu nome aqui

---

**Desenvolvido com ❤️ para conectar pessoas por interesses reais**
