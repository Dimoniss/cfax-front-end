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
# COPY --from=build /prj/dist/css/ /usr/share/nginx/html/portal/css/
# COPY --from=build /prj/dist/fonts/ /usr/share/nginx/html/portal/fonts/
# COPY --from=build /prj/dist/js/ /usr/share/nginx/html/portal/js/
COPY --from=build /prj/dist/index.html /usr/share/nginx/html/portal/
COPY --from=build /prj/dist/*.txt /usr/share/nginx/html/portal/
COPY --from=build /prj/dist/*.json /usr/share/nginx/html/portal/
COPY --from=build /prj/dist/*.png /usr/share/nginx/html/portal/
COPY --from=build /prj/dist/*.ico /usr/share/nginx/html/portal/
# COPY --from=build /prj/dist/cfg/ /usr/share/nginx/html/portal/cfg/
# COPY --from=build /prj/dist/img/ /usr/share/nginx/html/portal/img/

# List the contents of the Nginx HTML directory
RUN ls -latrR /usr/share/nginx/html/portal
