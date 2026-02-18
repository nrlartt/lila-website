FROM node:22-alpine
WORKDIR /app
COPY package.json vite.config.ts index.html ./
COPY src ./src
RUN npm install
EXPOSE 80
CMD ["npm","run","dev","--","--host","0.0.0.0","--port","80"]
