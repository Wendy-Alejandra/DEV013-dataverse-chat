# Cruise Lines Dataverse Chat

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Funcionalidades](#2-funcionalidades)
* [3. Estructura](#3-estructura)
* [4. Tecnologías y Herramientas](#4-tecnologías-y-herramientas)
* [5. Criterios mínimos de aceptación](#5-criterios-mínimos-de-aceptación)



***

## 1. Resumen del proyecto
El presente proyecto es una SPA (Single Page Application) donde mantuvimos las funcionalidades del proyecto [detaverse](https://wendy-alejandra.github.io/DEV013-dataverse/) como filtrar, ordenar y calcular una estadística (promedio de precios de los cruceros), adicionando nuevas vistas para consultar información detallada de cada crucero, implementado mediante la creación de un router para la navegación entre las diferentes vistas de la aplicación, y agregando la posibilidad de interactuar individualmente o de forma grupal con los cruceros a través de un sistema de chat impulsado por la API de OpenAI, usando la asincronía en JavaScript y creando una suite de pruebas unitarias para probar el código asíncrono.

## ---MODIFICAR---
![imagen]()


## 2. Funcionalidades



## 3. Estructura del proyecto

La lógica del proyecto debe se implementó completamente en JavaScript
(ES6), HTML y CSS. 
El _boilerplate_ que del proyecto es el siguiente:

```text
.
├── src
|  ├── components
|  |  └── CardsRender.js
|  |  └── Footer.js
|  |  └── Header.js
|  |  └── Menu.js
|  |  └── Statistics.js
|  ├── data
|  |  └── dataset.js
|  ├── lib
|  |  └── apiStorage.js
|  |  └── dataFunctions.js
|  |  └── openAIApi.js
|  ├── views
|  |  └── adventurOfTheSeasAruba.jpeg
|  |  └── ApiKey.js
|  |  └── Cards.js
|  |  └── Error.js
|  |  └── GroupChat.js
|  |  └── Home.js
|  |  └── IndividualChat.js
|  |  └── MoreInfoCards.js
|  ├── error.png
|  ├── favicon.png
|  ├── fondo_cruceros.jpg
|  ├── index.html
|  ├── index.js
|  ├── router.js
|  └── style.css
├── test
|  └── apiKey.spec.js
|  └── cardsRender.spec.js
|  └── data.js
|  └── dataFunctions.spec.js
|  └── footer.spec.js
|  └── header.spec.js
|  └── menu.spec.js
|  └── openAIApi.spec.js
|  └── statistics.spec.js
├── README.md
└── package.json

```
## 4. Tecnologías y herramientas
* Este proyecto se realizó en dupla.
* El proyecto se completó en 8 sprints.
* La lógica del proyecto se implementó completamente en JavaScript (ES6+), HTML y CSS.

<p align="center">
  <img src=https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) alt="HTML5">
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript">   
</p>

## ---AGREGAR FIGMA---
* Las herramientas usadas fueron:
<p align="center">
  <img src= https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white alt="Visual Studio Code">
  <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git">
  <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  <img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white">
</p>


## ---MODIFICAR---
* La interfaz del proyecto fue desplegada en GitHub pages y en 
  [Vercel](https://vercel.com/) o [Netlify](https://www.netlify.com/).

## 5. Criterios mínimos de aceptación del proyecto

Para realizar el presente proyecto, definimos 3 historias de usuario, diseñamos la interfaz de usuaria mediante el uso de sketches o prototipos de baja fidelidad y prototipos de alta fidelidad en [Figma](https://www.figma.com/file/V5doEKg8V9PpNrpNUzrGH3/Prototipos-HU1?type=design&node-id=0-1&mode=design&t=oiz0EfUpai0hLcqp-0) para cada una de las vistas de nuestra SPA.

### Definición del producto ---COMPLETAR---

Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuaria.


En este proyecto se **construyó una SPA (Single Page Application) en donde se visualiza un  _conjunto (set) de datos_ de cruceros** generados con la herramienta de Inteligencia Articial [ChatGPT](https://openai.com/chatgpt).
Además, 



### Historias de usuaria


### Diseño de la Interfaz de Usuaria
El dieseño de nuestra SPA se realizó con la herramienta de diseño [Figma](https://www.figma.com/file/V5doEKg8V9PpNrpNUzrGH3/Prototipos-HU1?type=design&node-id=0-1&mode=design&t=RBWKfeMFY3DVlC7R-0). Ver a continuación, los prototipos de alta y baja fiddelidad realizados:

#### Prototipo de baja fidelidad o Sketch

#### Prototipo de alta fidelidad 

### Testeos de usabilidad
Durante el proceso de testeo de usabilidad, se identificaron varias áreas de mejora en la interfaz de usuario, así como oportunidades para optimizar la experiencia del usuario. A continuación, se detallan las modificaciones realizadas en base a los hallazgos obtenidos:

1. **Agregación de Botones Explicativos:**
   - Se añadieron botones explicativos que redirigen a vistas específicas, con el objetivo de mejorar la navegación y proporcionar una guía clara sobre las funcionalidades disponibles.

2. **Reubicación del Botón de Chat Grupal:**
   - El botón de chat grupal fue reubicado hacia arriba, siguiendo los principios de visual design para garantizar diseños ergonómicos, especialmente para personas diestras, lo que facilita su accesibilidad y uso.

3. **Modificación en la Presentación del Precio de los Cruceros:**
   - Se eliminó el estilo de botón del precio de los cruceros en las tarjetas, ya que no representaba una acción interactiva. En su lugar, se integró este detalle al botón "Ver más" para acceder a información adicional de la tarjeta correspondiente.

4. **Reorganización de los Botones de Chat Individual:**
   - Los botones de chat individual, previamente ubicados en cada tarjeta en la vista de "Cards", fueron trasladados a la vista de "More Info Cards", simplificando así la interfaz y evitando redundancias.

5. **Optimización de la Vista de API Key:**
   - Se implementó una validación previa de la API introducida, con el propósito de mejorar la experiencia del usuario al garantizar la corrección de la API ingresada. Además, se ajustó el diseño para reflejar el estado de validación de la API y se añadió la capacidad de eliminar la API guardada.

6. **Inclusión de Botón de Regreso en Vistas de Chat:**
   - Se agregó un botón con forma de llave en las vistas de chat individual y grupal para permitir un retorno fácil y claro a la vista de la API Key, abordando así la carencia de una opción de regreso previa.

7. **Rediseño de la Vista de Error:**
   - Se realizaron modificaciones en el diseño de la vista de error para reducir la sobrecarga visual y mejorar la visibilidad del botón de acción. El botón fue agrandado para indicar claramente al usuario que puede continuar navegando libremente por el sitio tras presionarlo.

Estas modificaciones se llevaron a cabo con el objetivo de mejorar la usabilidad y la experiencia del usuario en la plataforma, optimizando la navegación, la accesibilidad y la comprensión de las funcionalidades disponibles.


### Pruebas unitarias
Las pruebas unitarias de nuestro proyecto se ejecutan con el comando `npm run test` y tienen una cobertura del 100% de statements (sentencias), functions (funciones), lines (líneas), y branches (ramas) para todos los componentes, api storage y funciones asícronas, y un 91.48% para el archivo datafunctions.js donde están las funciones de filtrado y ordenamiento.


