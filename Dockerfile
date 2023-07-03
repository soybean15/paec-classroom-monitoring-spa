FROM node:18-alpine AS build-stage
WORKDIR /usr/src/app
COPY package.json ./
RUN NODE_ENV=development npm install
COPY . .
RUN npm run build


FROM nginx:stable-alpine as prod-stage
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]