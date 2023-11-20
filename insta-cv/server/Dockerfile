# Start from a Node.js base image
FROM node:18

# Install LaTeX
RUN apt-get update && apt-get install -y \
    texlive \
    texlive-latex-extra \
    && rm -rf /var/lib/apt/lists/*

# Install pnpm
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package*.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of the files
COPY . .

# Start the application
CMD ["pnpm", "start"]
