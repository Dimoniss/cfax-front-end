# Stage 1: Build
FROM node:18.10.0-alpine as build

# Display the current directory
RUN pwd

# Install git and update packages
RUN apk update && apk add git

# Set working directory
WORKDIR /prj

# Copy package.json and package-lock.json
COPY package.json .
COPY package-lock.json .

# Install dependencies with npm
RUN npm install

# Copy the rest of the project files
COPY . .

# Lint and build the application
RUN npm run lint
RUN npm run build

# Check the structure of the dist directory
RUN ls -R dist/

# Display the contents of the dist directory
RUN ls -latr ./dist

# Stage 2: Serve with Nginx
FROM nginx:1.25.2-alpine

# Copy build files from the previous stage to the Nginx HTML directory
COPY --from=build /prj/dist/favicon/ /usr/share/nginx/html/portal/favicon/
COPY --from=build /prj/dist/config/ /usr/share/nginx/html/portal/config/
COPY --from=build /prj/dist/assets/ /usr/share/nginx/html/portal/assets/
COPY --from=build /prj/dist/index.html /usr/share/nginx/html/portal/
COPY --from=build /prj/dist/icon/ /usr/share/nginx/html/portal/icon/
COPY --from=build /prj/dist/logo/ /usr/share/nginx/html/portal/logo/

# List the contents of the Nginx HTML directory
RUN ls -latrR /usr/share/nginx/html/portal
