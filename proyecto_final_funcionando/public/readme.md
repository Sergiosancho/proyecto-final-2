Requerimientos técnicos

Web creada con React que trae datos de cotizaciones y noticias de criptomonedas , usando Rapidapi ,librerias como Axios, Chart.js y react-chartjs-2 para el renderizado de gráficos , Jest para test .

Wireframes : https://share.balsamiq.com/c/gHtzzycPuPRAqfgHK7gTKT.png
Deployment con Netlify: https://proyecto-final-sergio-sancho.netlify.app

Proceso:
Basado en la documentación de React , en el artículo " applying thinking in React "

-Planificar la aplicación :
 en React una aplicación consiste en componentes independientes reutilizables usados para mostrar partes del UI,por lo tanto  definirlos al principio  es importante.
 
-Mockup , dibuja esas partes del UI,sepáralas en componentes, si dudas sobré que es un componente ,básate en el principio "single responsability"

-Define los estados y donde vivirán , usualmente en el componente que los renderiza.

-Construyendo la aplicación: 

  -Crea la versión estática
  
  -Crea los estados mínimos necesarios , mantén el estado lo más "lean" posible, para determinar que tiene que ir a estado y que no puedes preguntarte:
    Viene de un ancestro por props? probablemente no será estado
    Se mantendrá estático ? probablemente no será estado
    Lo puedes calcular a partir de otro estado? no es estado
    No es resposable de renderizar? no es estado
    
  -Añade las funciones para cambiar  estados y hacer el UI interactivo , es la gracia de React !!!!  
    




En proceso , crear varias páginas con datos de otro tipo de activos relacionados , rutas con Reactrouter.
