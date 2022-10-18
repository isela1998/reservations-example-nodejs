FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install --save nodemon
COPY . /app
EXPOSE 4000
CMD ["npm", "start"]