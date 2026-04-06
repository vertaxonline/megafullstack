FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

# Vite ko 0.0.0.0 par host karna zaroori hai docker mein
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]