FROM node:14.20.1

# Set working directory
WORKDIR /app

# Install npm v6
RUN npm install -g npm@6

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "run", "watch"] 