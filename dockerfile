FROM node:18.11.0

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY next.config.js ./next.config.js

COPY @core ./@core
COPY components ./components
COPY context ./context
COPY pages ./pages
COPY styles ./styles
COPY public ./public
COPY ultils ./ultils

CMD ["npm","dev", "fake-api"]