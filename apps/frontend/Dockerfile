FROM node:22-alpine AS base

WORKDIR /app

COPY package.json package-lock.json ./
COPY packages/shared ./packages/shared
COPY apps/frontend ./apps/frontend

RUN npm ci

FROM base AS development

WORKDIR /app/apps/frontend

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]