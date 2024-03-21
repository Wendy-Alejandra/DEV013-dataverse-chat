# Cruise Lines Dataverse Chat

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Funcionalidades](#2-funcionalidades)
* [3. Estructura](#3-estructura)
* [4. Tecnologías y Herramientas](#4-tecnologías-y-herramientas)
* [5. Criterios de aceptación mínimos](#5-criterios-de-aceptación-mínimos)
* [6. Objetivos de aprendizaje](#6-objetivos-de-aprendizaje)


***

## 1. Resumen del proyecto


En nuestro día a día, las aplicaciones web son como amigas
inseparables. Desde las redes sociales hasta las herramientas de
trabajo, las usamos todo el tiempo. Pero lo que hace que este
momento sea realmente especial es que estas aplicaciones nos pueden
abrir una puerta a algo asombroso: la interacción con inteligencia
artificial.

¿Qué tal si pudiéramos conversar con alguien que vivió hace más de
cien años o incluso con los personajes de nuestras series y
películas favoritas o con entidades que normalmente no pueden hablar
como por ejemplo planetas o animales? La inteligencia artificial nos
puede ayudar a entender el pasado y a conectarnos con figuras
históricas, así como a sumergirnos en mundos ficticios.

![Preview app](https://github-production-user-asset-6210df.s3.amazonaws.com/123121338/271433237-2bd1477b-15ef-49d4-9fcb-226b3263c46a.png)

## 2. Resumen del proyecto

En este proyecto convertirás la aplicación desarrollada
en Dataverse en una
[Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application),
manteniendo las funcionalidades de visualizar, filtrar, ordenar y
calcular alguna estadística, adicionando una nueva vista para
consultar información detallada de cada personaje/entidad y agregando
la posibilidad de interactuar con un personaje/entidad o todos ellos
a través de un sistema de chat impulsado por la
[API de OpenAI](https://openai.com/product).

### Los objetivos generales de este proyecto son los siguientes

* Desarrollar una [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
* Aplicar los conceptos de responsividad en el desarrollo de las vistas
* Implementar un router para la navegación entre las diferentes
vistas de la aplicación
* Integrar una API externa
* Entender la asincronía en JavaScript
* Crear una suite de pruebas unitarias que permitan testear código asíncrono

## 3. Consideraciones generales

* Este proyecto se debe resolver en duplas.

* El rango de tiempo estimado para completar el proyecto es de 4 a 5 Sprints.

* La lógica del proyecto debe estar implementada completamente en JavaScript
  (ES6+), HTML y CSS. Para este proyecto **no está permitido** utilizar
  _frameworks_ o librerías de CSS y JS.

* Reutilizar cierta parte del código del proyecto Dataverse, sobre todo el dataset.
  Además debes refactorizar el código para que sea más modular y reutilizable
  implementando nuevas funciones para lograr las funcionalidades requeridas
  en este proyecto.

* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando cualquiera de estas opciones:
  [Vercel](https://vercel.com/) o [Netlify](https://www.netlify.com/).

* La división y organización del trabajo debe permitir, sin excepciones, que
  **cada integrante** del equipo practique el aprendizaje de todo lo involucrado
  en **cada historia**. _No se dividan el trabajo como en una fábrica._
  - ¿Hasta acá has avanzado en tus proyectos con cierta fluidez y sin mayores
    problemas? Sé generosa con tus compañeras, permíteles aprender y practicar
    sin restricciones, aunque tome un poco más de tiempo. Aprovecha de
    _coachearlas_, de hacer _pair programming_, una de las mejores maneras de
    aprender es explicando verbalmente.
  - ¿Se te está haciendo difícil y te cuesta un poco más avanzar? No te quedes
    con las partes "fáciles" del proyecto, conversa, negocia, exige tu oportunidad
    para practicar y aprender lo que se te hace más difícil.
  Para comenzar tendrás que hacer un _fork_ y _clonar_ este repositorio.

## 2. Funcionalidades

Como entregable final tendrás una Single Page Application (SPA) que permita,
además de **visualizar la data, filtrarla, ordenarla y calcular alguna
estadística** tal como se hizo en Dataverse, acceder a una página de detalle
de cada personaje y poder _interactuar_ con
los personajes o entidades del set de data que utilizaste anteriormente.

Aquí definimos en más detalle las funcionalidades mínimas que debe tener:

* La aplicación debe ser _responsive_
* La aplicación debe ser una SPA con múltiples vistas:
  - Implementar un sistema de enrutamiento que permita la navegación
    dentro de la aplicación.
  - Cada vista de la aplicación debe ser cargada dinámicamente
    mediante JavaScript.
  - Asegurarse de que la URL se actualice de manera acorde a la vista
    cargada al igual que el `title` del documento (la pestaña del navegador).
  - La aplicación debe ser capaz de cargar la vista correspondiente a
    la URL actual al iniciar la aplicación.
* La aplicación debe mantener las funcionalidades de Dataverse: visualizar,
  filtrar, ordenar y calcular estadística de la data.
* Al hacer clic en una tarjeta de personaje/entidad, la aplicación debe
  redirigirse a una vista **con su propia URL** que muestre la información
  detallada sobre ese personaje/entidad en particular
* La aplicación debe permitir a la usuaria configurar la API Key para
  interactuar con la API de Open AI
* Usando la API de Open AI, la aplicación debe permitir al usuario
  interactuar con un personaje/entidad a través de un chat.
  Por ejemplo, si usamos la data de ejemplo de Dataverse, correspondiente
  a las mujeres con mayores contribuciones a la programación en la historia,
  una usuaria puede establecer una conversación
  interactiva con
  [Ada Lovelace](https://es.wikipedia.org/wiki/Ada_Lovelace)
  a través del sistema de chat, obteniendo
  información sobre sus logros, desafíos y contribuciones a la informática.
  La inteligencia artificial de OpenAI permite que las respuestas sean
  informativas y personalizadas según las preguntas de los usuarios.

```text
Usuaria: "Hola, Ada. Cuéntame más sobre tus contribuciones a la informática."

Ada Lovelace (AI de OpenAI): "¡Hola! Claro, estaré encantada de hablar sobre eso.
Mis contribuciones más destacadas se relacionan con el trabajo junto a Charles Babbage
en el diseño de la Máquina Analítica. Además, desarrollé el primer algoritmo destinado
a ser procesado por una máquina, lo que me convierte en la primera programadora de la historia.
¿Hay algo más en particular que te gustaría saber?"

Usuaria: "¡Eso es fascinante! ¿Qué desafíos enfrentaste en ese tiempo?"

Ada Lovelace (AI de OpenAI): "En ese tiempo, enfrenté varios desafíos, uno de los
principales fue la limitación de recursos y la falta de reconocimiento del potencial
de la Máquina Analítica. También tuve que superar las restricciones sociales de
la época, ya que las mujeres tenían un acceso limitado a la educación en
matemáticas y ciencias. Sin embargo, mi pasión por la matemática y la visión
de lo que estas máquinas podrían lograr me impulsaron a seguir adelante."
```

* La aplicación debe  permitir al usuario interactuar de manera simultánea
  con **todos** los personajes/entidades a través de un chat:
  - Esta funcionalidad debe cargarse en la URL `/panel`
  - La usuaria puede ingresar su pregunta o mensaje para todos los
    personajes/entidades en un cuadro de texto y enviarlo con un botón
  - El mensaje de la usuaria debe ser ajustado para cada personaje/entidad,
    con el objetivo que este genere una respuesta basada en su personalidad
    y conocimiento
  - Las respuestas de todos los personajes se muestran de acuerdo al orden
    respuesta.
  - Indicar visualmente cuando uno o varios personajes/entidades esten
    generando una respuesta al mensaje enviado
* La aplicación debe informar a la usuaria los errores que puedan surgir al
  interactuar con la API, como por ejemplo alcanzar la cuota de tokens por
  minuto o cualquier otro error relacionado con la API. Debería
  proporcionarse una descripción clara de la causa del problema y posibles
  soluciones.

Para que los chats anteriores puedan funcionar, es esencial que la aplicación
se integre con la IA a través de la API de OpenAI. Para ello, el equipo de
Laboratoria te proporcionará una API Key que la usuaria deberá poder ingresar
en la aplicación que tu construirás.

_Nota_: puedes revisar esta [implementación](https://laboratoria-dataverse-talks.netlify.app/)
de ejemplo, cuyo principal objetivo es mostrarte cómo se vería la
funcionalidad de chat en tu aplicación, más no tomes el diseño como
referencia para tu proyecto, siente libre de hacer volar tu imaginación
diseñando tu propia interfaz.

## 5. Estructura del proyecto

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


## 5. Criterios de aceptación mínimos del proyecto

Para realizar el presente proyecto, definimos 3 historias de usuario, diseñamos la interfaz de usuaria mediante el uso de sketches o prototipos de baja fidelidad y prototipos de alta fidelidad en [Figma](https://www.figma.com/file/V5doEKg8V9PpNrpNUzrGH3/Prototipos-HU1?type=design&node-id=0-1&mode=design&t=oiz0EfUpai0hLcqp-0) para cada una de las vistas de nuestra SPA.

### Definición del producto

Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuaria.
En este proyecto se **construyó una SPA (Single Page Application) en donde se visualiza un  _conjunto (set) de datos_ de cruceros** generados con la herramienta de Inteligencia Articial [ChatGPT](https://openai.com/chatgpt).
Además, 



### Historias de usuaria

Una vez que entiendas las necesidades de tus usuarias, escribe las [Historias
de Usuaria](https://es.wikipedia.org/wiki/Historias_de_usuario) que representen
todo lo que la usuaria necesita hacer/ver. Las **Historias de Usuaria** deben
ser el resultado de tu proceso de investigación o _research_ de tus usuarias.

Asegúrate de incluir la definición de terminado (_definition of done_) y los
Criterios de Aceptación para cada una.

Usa tus historias de usuaria para planificar tus sprints dividiendo
cada historia en tareas.

En la medida de lo posible, termina una Historia de Usuaria antes de pasar
a la siguiente (cumpliendo con la Definición de Terminado y los Criterios
de Aceptación).

### Diseño de la Interfaz de Usuaria

#### Prototipo de baja fidelidad o Sketch

#### Prototipo de alta fidelidad 

### Testeos de usabilidad

### Pruebas unitarias

