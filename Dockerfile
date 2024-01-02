# Builder container to compile typescript
FROM node:lts-alpine AS build
WORKDIR /usr/src/app

# Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm i

# Copy the application source
COPY . .
# Build typescript
RUN npm run build


FROM node:lts-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY .prod.env .env
RUN npm i

COPY --from=build /usr/src/app/dist /app

CMD [ "npm", "run","start:build"]