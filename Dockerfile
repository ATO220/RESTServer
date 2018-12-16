#############################################################
# Dockerfile para configurar aplicacion en node.js -Express
#############################################################

# Establece la imagen de base
FROM node

# Informacion de Metadata
LABEL "restserver.appNode"="ATHOS DESARROLLO"
LABEL maintainer="serranolaureano.220@gmail.com"
LABEL version="1.0"

# Se establece el directorio de trabajao
WORKDIR /app

# Instala losmpaquetes existentes en el package-json
COPY . .
RUN npm install --quiet

# Expone la aplicaion en el puerto 3007
EXPOSE 3007

# Inicia la aplicacion con el comando "npm start"
CMD [ "npm", "start"]



