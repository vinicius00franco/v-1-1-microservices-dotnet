# Frontend/Dockerfile

# Etapa de build
FROM node:18-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

# Etapa de produção
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

# Copia a configuração do Nginx para redirecionar o roteamento do React
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
