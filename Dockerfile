#Use alpine-node v6.11.4
FROM mhart/alpine-node:6

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
