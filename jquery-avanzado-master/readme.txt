#Para ejecutar un server ligero http-server
# https://www.npmjs.com/package/http-server
#Se instala primro..
npm install --global http-server

#Se ejecuta....
http-server -o

#2-)  Lite server


#Crea el archivo json
npm init

#instala el server-lite
npm install lite-server --save-dev

#Configuracion
#.and add a "script" entry within your project's package.json file:

# Inside package.json...
  "scripts": {
    "dev": "lite-server"
  },


#Run it
With the above script entry, you can then start lite-server via:


npm run dev