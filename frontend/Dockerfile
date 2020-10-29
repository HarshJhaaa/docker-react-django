FROM node:8.9-alpine

WORKDIR /app/

COPY ["package.json", "package-lock.json*", "/app/"] 

COPY . /app/
RUN npm install --production --silent && mv node_modules ../

EXPOSE 3000
