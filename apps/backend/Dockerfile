FROM node:22-alpine AS base

WORKDIR /app

COPY package.json package-lock.json ./
COPY packages/shared ./packages/shared
COPY apps/backend ./apps/backend

RUN npm ci


FROM base AS development

WORKDIR /app/apps/backend

CMD ["npm", "run", "dev"]


FROM base AS production

WORKDIR /app/apps/backend

CMD ["npm", "run", "start"]
