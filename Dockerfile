FROM node:alpine

WORKDIR /www
COPY package.json index.js /www/
RUN npm install

EXPOSE 3000
CMD ["node", "index.js"]
