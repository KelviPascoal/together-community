FROM node:18-alpine

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./
COPY tsconfig.json ./

# Instalar dependências
RUN npm install

# Copiar código-fonte
COPY . .

# Gerar o Prisma Client
RUN npx prisma generate

# Expor porta
EXPOSE 3001

# Comando padrão (será sobrescrito no docker-compose)
CMD ["npm", "run", "dev"]
