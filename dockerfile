FROM node:latest

#create and fill app folder
WORKDIR /app
COPY package.json ./
COPY *.js ./
COPY jsconfig.json ./
COPY public/ ./public/
COPY src/ ./src/

#dl libraries
RUN npm i

#documenting ports to forward
EXPOSE 8081 8080

#run the app
ENTRYPOINT ["npm", "run", "serve"]