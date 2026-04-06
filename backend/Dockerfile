# Node image use karein
FROM node:20-alpine

# Working directory set karein
WORKDIR /app

# Dependencies install karein
COPY package*.json ./
RUN npm install

# Poora code copy karein
COPY . .

# Port expose karein
EXPOSE 5000

# App start karein
CMD ["npm", "run", "dev"]