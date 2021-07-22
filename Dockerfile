FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

#maybe npm ci --only=production
RUN npm install

COPY . . 

EXPOSE 3000


CMD ["node","server.js"]