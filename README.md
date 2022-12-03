# Crud

Las tecnologias usadas para este proyecto son:
- React js + Vite
- MySQL
- Node 

# Procedimiento para levantar la App Web

1.- Luego de clonar la app, abriremos una Terminal dentro de Visual Studio Code seguido de nos moveremos a la carpeta que dice Frontend y una vez ahi, pondremos el comando  npm i.
2.-De igual manera instalaremos otros paquetes que necesitaremos con "npm install cors express expres mysql2 sequelize axios"

2.- Una vez hecho esto, levantaremos el proyecto con  npm run dev el cual nos permitira ver un pequeño login y precionaremos en Acceder, sin la necesidad de llenar nada.

3.- Despues encontraremos ya la pagina donde se mostrara la informacion. Sin embargo, aun no levantamos nuestras APIS y por ende no aparecera nada. Para  lo siguiente, vamos a movernos en una nueva terminal que creemos a la carpeta node y pondremos el siguiente comando "npm install nodemon" seguido del comando "npm start" y levantariamos un servidor en la url http://localhost:8088/. Seguido de esto, iremos al archivo "package.json" que se encuentra dentro de la carpeta node mismno,  y cambiamos la linea de codigo "start": "nodemon app2.js"  por "start": "nodemon app.js", creamos otra terminal e ingresamos nuevamente el comando "npm start" para levantar otro servidor en la url http://localhost:8000/. Siempre tener en cuanta la ubicacion donde estemos en la terminal, siempre debemos estar en la carpeta de node.

4.- Y listo, al recargar la pagina toda la informacion ya nos deberia cargar.


[![Fire-Shot-Capture-004-Vite-React-localhost.png](https://i.postimg.cc/pXvPKNPd/Fire-Shot-Capture-004-Vite-React-localhost.png)](https://postimg.cc/rzh6LP06)

