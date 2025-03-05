---
title: "Caso de Estudio: Aivia"
slug: "caso-de-estudio-aivia"
description: "Un análisis detallado del desarrollo e implementación del proyecto Aivia"
pubDate: "Feb 15 2024"
heroImage: "/projects/aivia/thumbnail.png"
tags: ["ux", "next.js", "typescript", "strapi", "lead"]
---

## Introducción al proyecto

En el 2020 el equipo de Iknelia pasó a ser finalista de un concurso organizado por el Tec de Monterrey, la universidad donde trabajo. En este, los concursantes debían crear una herramienta tecnológica que proporcionara un medio para mejorar la situación medioambiental y, gracias a su gran esfuerzo y creatividad, su idea fue la ganadora. Sin embargo, no tenían el conocimiento técnico necesario para crearla del modo que deseaban.

#### Problemática

Poco tiempo después de haber terminado el concurso tuve la suerte de ser contactado por el equipo de Iknelia para ser el desarrollador del proyecto. Desde la etapa inicial notamos una gran dificultad: la idea de la aplicación era demasiado grande para el corto tiempo que tenían, ya que consistía en un conjunto de juegos, cursos, noticias, videos, retos, elementos de redes sociales, entre otras cosas, y contábamos con solo pocos meses para poder desarrollarlo.

#### Creación de Persona

Debido a la gran cantidad de ideas y proyectos que implicaba el cubrir todos los puntos de la aplicación y el corto periodo del que disponíamos, decidimos limitar la idea al producto mínimo viable: una aplicación web para jóvenes universitarios que facilitara el aprendizaje de temas medioambientales por medio de cursos y retos en línea. Habiendo definido esto, el equipo creó el perfil de la persona en que enfocaríamos todos nuestros esfuerzos y quien sería nuestra línea guía para las siguientes etapas. Te presento a Santiago López Rodríguez:

![Características principales de perfil de persona desarrollado por el equipo de Marketing junto con el equipo de Iknelia. Frustración 1: Tiene miedo a las consecuencias en la salud provocadas por la contaminación ambiental. Frustración 2: No puede encontrar una forma fácil de apoyar en el medio ambiente.](/projects/aivia/01-persona.png)


#### Diseño de prototipo e investigación con usuarios.

Una vez identificadas las frustraciones de nuestros usuarios, guié al equipo a través de una semana enfocada en el ciclo de diseño del Google Design Sprint para facilitar el flujo de ideas, la comunicación y la creación de un prototipo, el cual creé utilizando Webflow:

![Estructura general de la aplicación hecho a mano por mí. Se enfoca principalmente en tres pantallas que se listan en la siguiente imagen.](/projects/aivia/02-mapa.png)

Estructura general de la aplicación hecho por mí


![Diseño de prototipo de páginas principales de la aplicación: Página de catálogo, visualización de curso y toma de lección. En la imagen puede observarse un reproductor de video, un cuestionario y una sección de comentarios.](/projects/aivia/03-prototipo.png)

Diseño de prototipo de páginas principales de la aplicación: Página de catálogo, visualización de curso y toma de lección.

#### Entrevistas y pruebas con usuario

Utilizamos el prototipo para hacer pruebas de usabilidad con un grupo de usuarios similar a Santiago, de las cuales posteriormente recopilamos una gran cantidad de información que nos llevó a pequeñas modificaciones en la aplicación. De las entrevistas de usuario hubo dos citas que destacaron sobre el resto y nos llevaron a hacer algunos de los cambios más importantes para la aplicación real:

- **"¿A qué me estoy suscribiendo? No sé por qué me piden mi nombre y correo."** - Gracias a que un entrevistado mencionó esto, notamos que era necesario mejorar la transparencia de información de la aplicación y la solicitud de datos personales, por lo que cambiamos la navegación a una estructura más pública y que no requiriera hacer una cuenta antes de ver los cursos disponibles
- **"¿Por qué me sacó de la página al querer ver un reto? No entendí qué pasó."** - Debido a la mención de una entrevistada de esta frase, y de la confusión reflejada en algunos otros entrevistados al interactuar con esta sección de la aplicación, decidimos cambiar la estructura de esta parte a algo que trabajara dentro del mismo sitio, en vez de llevar al usuario a una página externa.


<br />
#### Rediseño e implementación de aplicación

Una vez finalizada la recopilación y análisis de los datos brindados por las entrevistas, compartí el prototipo, los comentarios y la estructura propuesta con una diseñadora especializada en diseño de interfaces gráficas, que realizó un rediseño total de la aplicación. Una vez terminado, hicimos un breve ciclo de pruebas con usuarios y posteriormente comenzamos el desarrollo.

![Mapeo formal de pantallas y secciones de aplicación realizado por mí. Pueden visualizarse todas las pantallas de la aplicación.](/projects/aivia/04-mapa-2.png)

Mapeo formal de pantallas y secciones de aplicación realizado por mí.

![Rediseño visual realizado por diseñadora de interfaces de usuario.](/projects/aivia/05-redisenio.png)

Rediseño visual realizado por diseñadora de interfaces de usuario

## Conclusión y estado actual

Gracias al enorme esfuerzo realizado por el equipo y al tiempo invertido en el proyecto, la aplicación y todo lo que la involucra fueron recientemente aprobados para ser lanzados a mercado. De momento, se encuentra en un proceso burocrático largo debido a la naturaleza de inicio del proyecto; sin embargo, actualizaré esta sección en un futuro para incluir los resultados, comentarios y cualquier detalle relevante sobre la historia de este proyecto.