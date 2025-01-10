# Step 1: Build the image based on Node.js image
FROM node:16 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the Next.js app
RUN npm run build

# Step 2: Set up the production environment
FROM node:16

# Set working directory
WORKDIR /app

# Copy only the build output from the builder stage
COPY --from=builder /app ./

# Expose the port on which the app will run
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
