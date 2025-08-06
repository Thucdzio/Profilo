# Stage 1: Base image
FROM node:20-alpine AS base
WORKDIR /app


# Stage 2: Install dependencies
FROM base AS deps
# Install optional system dependencies if needed
RUN apk add --no-cache libc6-compat
# Copy lock files and package.json for installing only dependencies
COPY package.json package-lock.json* ./
RUN npm install


# Stage 3: Build app
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 4: Production runner
FROM base AS runner
WORKDIR /app

# Chỉ copy những gì cần cho production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json


COPY next.config.js ./

# Cổng mặc định của Next.js
EXPOSE 3000
CMD ["npm", "start"]
