# Development Dockerfile
FROM node:24.10-trixie

WORKDIR /workspaces

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
