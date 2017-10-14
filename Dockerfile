#Use nodev6.11.3
FROM node:boron

# Defined app directory
WORKDIR /usr/src/app

# Copy app dependencies
COPY . .

# Install package
RUN npm install


# Open 3000 Port
EXPOSE 3000

# Run npm start when container start
CMD [ "npm", "start" ]
