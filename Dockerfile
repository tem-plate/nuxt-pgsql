FROM node:20-alpine

WORKDIR /app

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

COPY package.json pnpm-lock.yaml .npmrc ./

RUN npm config set registry https://registry.npmmirror.com/
RUN npm install -g pnpm
RUN pnpm install

COPY . .

EXPOSE 3000

RUN pnpm build

CMD ["pnpm", "start"]
