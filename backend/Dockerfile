FROM node:18-alpine

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar Prisma schema
COPY prisma ./prisma/

# Gerar o Prisma Client
RUN npx prisma generate

# Copiar o resto do código-fonte
COPY tsconfig.json ./
COPY src ./src/

# Expor porta
EXPOSE 3001

# Comando padrão (será sobrescrito no docker-compose)
CMD ["npm", "run", "dev"]
