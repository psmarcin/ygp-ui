FROM node:alpine as builder

WORKDIR /app

COPY package* /app/

RUN ls -la

RUN npm i -g typescript
RUN npm ci

COPY . /app/

RUN npm run build


FROM nginx:alpine
ARG NGINX_PORT=8080
COPY --from=builder /app/dist/ /usr/share/nginx/html/
COPY ./nginx/default.conf /usr/share/nginx/conf.d/default.conf
