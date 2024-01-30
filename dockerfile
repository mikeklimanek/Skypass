FROM node:latest

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

ENV NAME World

CMD ["node", "app.js"]