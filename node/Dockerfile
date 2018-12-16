FROM node:8.14.0-alpine

WORKDIR /src

COPY package.json .
RUN npm i

RUN npm install -g nodemon

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]
