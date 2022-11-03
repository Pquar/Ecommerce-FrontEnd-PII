FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY next.config.js next.config.js ./
COPY tsconfig.json tsconfig.json ./

COPY src ./src
COPY posivel-api.json posivel-api.json ./
COPY public ./public

CMD ["npm","run","dev-api"]