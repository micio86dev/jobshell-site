# Build the static site with pnpm, then serve it with nginx. The image has no Node at run time.
FROM node:24-alpine AS build
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM nginx:1.27-alpine
# Railway sets PORT and nginx listens on it. Locally the default is 8080.
ENV PORT=8080
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx/default.conf.template /etc/nginx/templates/default.conf.template
EXPOSE 8080
