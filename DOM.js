                                        /**
                                         * ELEMENTOS DEL DOM
                                         */
// console.log(`******** ELEMENTOS DEL DOM ********`);
// console.log(document);
// console.log(document.head); //entrega solo la parte del head del html
// console.log(document.body); //entrega la parte del body del html
// console.log(document.documentElement);  //entrega solo el html sin tl tipo
// console.log(document.doctype);  //entrega el tipo de html usado
// console.log(document.characterSet); //muetsra el tipo de caracteres del dom
// console.log(document.title);    //muestra el titulo de la pagina
// console.log(document.links);    //muetsra todos los links que tiene la pagina, en forma de arrelgo pero no es arreglo
// console.log(document.images);   //muestra todas las imagenes del DOM
// console.log(document.forms);    //muetsra todos los formularios del DOM
// console.log(document.styleSheets);  //muestra todsas las hojas de stylos que tiene la pagina
// console.log(document.scripts);  //muestra todos los scrips que tiene la pagina
// setTimeout(() => {
//     console.log(document.getSelection().toString()); //entrega la seleccion con el maus en string
// }, 3000);
// document.write("<h2> Hola amigos </h2>")    //inserta codigo html al DOM

                                        /**
                                         * NODOS, ELEMENTOS Y SELECTORES
                                         */

// //un elemento es una etiqueta html
// //un nodo de texto es el texto que tiene dentro una etiqueta html

// //METODOS QUE TIENE EL DOM PARA CAPTURAR ELEMENTOS EN VARIABLES DE JS
// console.log(document.getElementById("menu")); //es mas rapido que el queryselector
// console.log(document.querySelector("#menu")); //es un metodo mas usado, al igual que el getelementbyid
// console.log(document.querySelector("a")); //el queryselector trae solo el primer encontrado
// console.log(document.querySelectorAll("a").length); //comparte varios metodos de los arreglos pero no todos
// document.querySelectorAll("a").forEach((e)=>console.log(e))//tienen el foreach de los arreglos
// console.log(document.querySelectorAll(".cards")[2]);    //trae el tercer elemento con clase cards
// console.log(document.querySelectorAll("#menu li")); //trae todos los li del menu

                                        /**
                                         * ATRIBUTOS Y DATA-ATTRIBUTES
                                         */

// // hay dos maneras de llamar atributos y establecerle valores a estos

// console.log(document.documentElement.lang); //entrega el valor del atributo lang de la etiqueta html

// console.log(document.documentElement.getAttribute("lang")); //entrega lo mismo que el anterior

// console.log(document.querySelector(".link-DOM").href); //me entrega toda la url

// console.log(document.querySelector(".link-DOM").getAttribute("href")); //entrega solo lo que dice en el html es mejor usar getAttribute

// document.documentElement.lang = "en";

// console.log(document.documentElement.lang);

// document.documentElement.setAttribute("lang", "es-MX");

// console.log(document.documentElement.getAttribute("lang"));

// //cuando se guarda un elemento del DOM en JS se usa el $ para llamar las variables
// const $linkDOM = document.querySelector(".link-DOM");

// $linkDOM.setAttribute("target", "_blank");    //abre una nueva pestaña
// $linkDOM.setAttribute("rel", "noopener");    //verifica que no haya relacion entre la redireccion y la pagina actual
// $linkDOM.setAttribute("href", "www.google.com");   //cambia el atributo del elemento
// console.log($linkDOM.hasAttribute("rel"));     //identifica si hay el atributo en el elemento
// $linkDOM.removeAttribute("rel");     //remueve atributos de elementos
// console.log($linkDOM.hasAttribute("rel"));

// //para data-attributes

// console.log($linkDOM.getAttribute("data-description"));
// console.log($linkDOM.dataset);   //entrega un map de todos los data-attribute del elemento
// $linkDOM.setAttribute("data-description", "modelo de objeto del documento") //cambia el valor del atrbuto de un data-attribute
// console.log($linkDOM.dataset.description); //muestra con la notacion del punto el valor de un data-attribute

//                                         /**
//                                          *ESTILOS Y VARIABLES CSS
//                                          */

// const $linkDOM = document.querySelector(".link-DOM");

// console.log($linkDOM.getAttribute("style")); //muetsra solo las propiedades utilizadas de css
// console.log($linkDOM.style);    //muestra todas las propiedades de css para la etiqueta
// console.log($linkDOM.style.backgroundColor); //muestra solo el color
// //cuando se usan los estilos css en js, se usa el lowercamelcase (backgroundColor), es decir primera parlabra en minusculas e inicio de segunda en mayusculas

// //los estilos pueden ser mostrados por la web API de los navegadores asi

// console.log(window.getComputedStyle($linkDOM)); //mapeara todas las propiedades de estilos css de la etiqueta, y mostrara como el navegador pone por defecto las propiedades

// console.log(window.getComputedStyle($linkDOM).getPropertyValue("background-color"));

// $linkDOM.style.setProperty("text-decoration", "none");

// $linkDOM.style.setProperty("display", "block");

// $linkDOM.style.width = "50%";

// $linkDOM.style.textAlign = "center";

// $linkDOM.style.margin = "auto";

// $linkDOM.style.padding = "1rem";

// $linkDOM.style.borderRadius = ".5rem";

// //CUSTOM PROPERTIES CSS O VARIABLES css

// //permite acceder usando las compute properties a variables de css
// const $html = document.documentElement,
//       $body = document.body;

// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
// varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

// console.log(varDarkColor);
// console.log(varYellowColor);

// $body.style.backgroundColor = varDarkColor;
// $body.style.color = varYellowColor;

// $html.style.setProperty("--dark-color", "#000");

// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

// console.log(varDarkColor);

// $body.style.setProperty("background-color", varDarkColor);

// /////////////****************************///////////////// */

                                        /**
                                         * CLASES CSS
                                         */

// const $card = document.querySelector(".card");

// console.log($card.className);

// console.log($card.classList);

// console.log($card.classList.contains("rotate-45")); //entrega si contiene o no la clase

// $card.classList.add("rotate-45"); //agrega una clase a un elemento

// $card.classList.remove("rotate-45"); //remueve una clse de un elemento

// $card.classList.toggle("rotate-45"); //verifica si exite una clase o no, si hay la remueve, sino existe la crea en el elemento

// $card.classList.replace("rotate-45", "rotate-135") // reemplaza una clase

// $card.classList.add("opacity-80", "sepia") //se pueden agregar eliminar y el resto de metodos mas de una vez en una linea

                                        /**
                                         * TEXTO Y html
                                         */

// const $whatisDom = document.getElementById("que-es");

// let text = `<p>El DOM es un API para documentos HTML y XML</p>
//             <p>Este provee una representaon estructural del documento, permitiendo modificar su contenido y representacion visual mediante codigo JS</p>
//             <p><mark>El DOM no es parte de la especificacion de JS, es una API para los navegadores</mark></p>`;

// //$whatisDom.innerText = text; //no es estantard

// $whatisDom.innerHTML = text; //muestra el contenido de text sin etiquetas html, inyectandolas en el elemento
// $whatisDom.outerHTML = text; //muestra el contendo de text reemplazando el elemento con el contenido del text
// $whatisDom.textContent = text; //muestra de manera esttica el text, es decir con todo y etiquetas

                                        /**
                                         *DOM TRAVERSING: RECORRIENDO EL DOM
                                        */

// //usar el api del dom para recorrer diferentes elementos del dom

// //el dom traversing se usa para el manejo de unicamente las etiquetas del dom, pues antes se hablo de nodos, y hasta los saltos de linea son nodos

// $cards = document.querySelector(".cards");

// console.log($cards);

// //entrega los hijos de u elemento en este caso de la seccion cards
// console.log($cards.children);

// console.log($cards.children[3]);

// console.log($cards.parentElement); //entrega el elemento padre de la etiqueta

// console.log($cards.firstChild); //entrega el primer nodo, en este caso un salto de linea

// console.log($cards.firstElementChild);//entrega el primer nodo elemento o etiqueta de la seccion cards

// console.log($cards.lastElementChild); //entrega el ultimo nodo elemento o etiqueta de la seccion cards

// console.log($cards.previousSibling);//muestra el anterior nodo del elemento nodo cards

// console.log($cards.previousElementSibling);//muestra el anterior elemento del nodo cards

// console.log($cards.nextSibling);//muestra el siguiente nodo en el caso un salto de linea del elemento cards

// console.log($cards.previousElementSibling); //muestra el siguiente elemento nodo de cards

// console.log($cards.closest("section")); //entrega el ancestro mas cercano dandole una etiqueta

                                        /**
                                         * CREACION DE ELEMENTOS Y FRAGMENTOS DOM
                                         */

// const $figure = document.createElement("figure"), //creacion nodo figure
//     $img = document.createElement("img"),   //creacion nodo img
//     $figCap = document.createElement("figcaption"), //creacion nodo figcaption
//     $figCapText = document.createTextNode("Animals"); //creaccion texto para el figcaption

//     $figCap.appendChild($figCapText);   //asignacion de texto al figcaption
//     $img.setAttribute("src", "https://placeimg.com/200/200/animals");   //asignacion de atributo src y direccion de la imagen
//     $img.setAttribute("alt", "Animals") //asignacion de atributo alt
//     $figure.classList.add("card") //asignacion de una clase a la figure creada para que tome los estilos de las demas
//     $cards = document.querySelector(".cards"); //guardado de elemento cards o seccion para usarlo
//     $figure.appendChild($img);  //asignacion a figure el img
//     $figure.appendChild($figCap);   //asignacion a figure el figcaption

//     $cards.appendChild($figure)     //asignacion al nodo cards la figure


//     //forma de agregar dinamicamente varios elementos al dom usando propiedades de los arreglos

// const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
//     $ul = document.createElement("ul");

// document.write("ESTACIONES DEL AÑO");

// document.body.appendChild($ul);

// estaciones.forEach(e => {
//     const $li = document.createElement("li");
//     $li.textContent = e;

//     $ul.appendChild($li);
// });

// //mejor forma de adicionar elementos al DOM dinamicamente utilizando los fragment del api del 
// //DOM para que no sea necesario estar enviando un cargue a la pagina, sino solo se hace la carga una vez

// const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Juilio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
//     $ulMeses = document.createElement("ul"),
//     $fragment = document.createDocumentFragment();

//     meses.forEach(e => {
//         const $li = document.createElement("li");
//         $li.textContent = e;

//         $fragment.appendChild($li);
//     });

// $ulMeses.appendChild($fragment);
// document.body.appendChild($ulMeses);

                                        /**
                                         * TEMPLATES HTML
                                         */

// //etiqueta nueva para html 5
// //usada en combinacion con los fragmentos del API DOM


// const  $cards = document.querySelector(".cards"), 
//     $template = document.getElementById("template-card").content,
//     $fragment = document.createDocumentFragment(),
//     cardContent = [
//         {
//             title : "Tecnologia",
//             img : "https://placeimg.com/200/200/tech"
//         },{
//             title : "Animales",
//             img : "https://placeimg.com/200/200/animals"
//         },{
//             title : "Arquitectura",
//             img : "https://placeimg.com/200/200/arch"
//         },{
//             title : "Personas",
//             img : "https://placeimg.com/200/200/people"
//         },{
//             title : "Naturaleza",
//             img : "https://placeimg.com/200/200/nature"
//         }
//     ];

//     cardContent.forEach(e => {

//         $template.querySelector("img").setAttribute("src", e.img); //asignacion de attributos
//         $template.querySelector("img").setAttribute("alt", e.title);
//         $template.querySelector("figcaption").textContent = e.title;    //asignacion texto del figcaption

//         //como el template es unico, no esta disponible para la segunda, entonces se clona la estructura, el true indica
//         //que copia toda la estructura interna mientras un false indicara solo las etiquetas de apertura y cierre del template
//         let $clone = document.importNode($template, true);
//         $fragment.appendChild($clone);
//     });

//     $cards.appendChild($fragment)

                                        /**
                                         * MODIFICANDO ELEMENTOS DEL DOM estilo antiguo
                                         */

// //Hay otros metodos que perminten ademas del appenchild agregar elementos en determinada parte del DOM

// const $cards = document.querySelector(".cards"), 
//     $newCard = document.createElement("figure");
//     $newCard.innerHTML = `<img src = "https://placeimg.com/200/200/people" alt = "People">
//                             <figcaption>People</figcaption>`;

//     $newCard.classList.add("card");

//     $cards.replaceChild($newCard, $cards.children[3]); //reemplaza una card por otra nueva

//     $cards.insertBefore($newCard, $cards.firstElementChild); // inserta una card antes de un elemento o otra card

//     $cards.removeChild($cards.lastElementChild); //elimina un elemento de un nodo padre 

//     $cloneCards = $cards.cloneNode(true); //clona todo el contenido del nodo cards

//     document.body.appendChild($cloneCards);

                                        /**
                                         * MODIFICANDO ELEMENTOS DEL DOM ESTILO MODERNO
                                         */

// //al igual que los metodos anteriores, los siguientes permiten agregar elementos en un determinado punto del dom

// // .insertAdjacent
// // .insertAdjacentElement(posicion, elemento)
// // .insertAdjacentHTML(posicion, elemento)
// // .insertAdjacentText(posicion, elemento)

// // Posiciones:
// // beforebegin(hermano anterior a un elemento)
// // afterbegin(primer hijo)
// // beforeend(ultimo hijo)
// // afterend(hermano siguiente)

// const $cards = document.querySelector(".cards"),
//     $newCard = document.createElement("figure");

//     // $newCard.innerHTML = `<img src = "https://placeimg.com/200/200/people" alt = "People">
//     //                         <figcaption>People</figcaption>`;    //se uso pero el figcaption no tenia el nombre de manera dinamica

//     let $contentCard = `<img src = "https://placeimg.com/200/200/people" alt = "People">
//                             <figcaption></figcaption>`;   //se genera html de manera no recomendada, y el texto es dinamico con insertAdjacentText

//     $newCard.classList.add("card"); //agregacion de clase a la nueva card

//     $newCard.insertAdjacentHTML("beforeend", $contentCard); //inserta en el figure el contenido antes de que termine
//     $newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "People") //inserta en el figcaption el texto people despues de empezado el elemento
//     // $cards.insertAdjacentElement("beforebegin", $newCard); //antes de comenzar la seccion cards
//     //$cards.insertAdjacentElement("afterbegin", $newCard);   //despues de comenzar la seccion cards o sea primera
//     // $cards.insertAdjacentElement("beforeend", $newCard); //anter de terminar o sea ultimo elemento
//     // $cards.insertAdjacentElement("afterend", $newCard); //despues de terminar la seccion cards

//     $cards.prepend($newCard); //primer hijo
//     $cards.before($newCard); //hermano anterior
//     $cards.append($newCard); //ultimo hijo
//     $cards.after($newCard); //hermano siguiente

                                        /**
                                         * MANEJADORE DE EVENTOS
                                         */

// //En js hay tres forma de manejar eventos, cuando se dice manejador
// //de eventos, se refiere a funciones que haran algo al generar un evento

// //existen eventos multiples, eventos semanticos y eventos de etiqueta

// //las funciones que son manejadores, el unico parametro que pueden recibir es el evento, ninguno mas
// function holaMundo() {
//     alert("Hola mundo desde manejador holaMundo");
//     console.log(event); //usar event es depreciado hoy dia, no se usa
// }

// //evento semantico

// const $eventoSemantico = document.getElementById("evento-semantico");

// $eventoSemantico.onclick = holaMundo; //no se ponen los parentisis porque si se hace una vez se ejecute el programa, se ejecuta automaticamente la funcion

// //cuando se usan eventos semanticos o de etiqueta no se puede agregar mas manejadores o funciones que uno solo

// //addEventListener permite asignar multiples manejadores a un elemento que desencadena un evento
// $eventoSemantico.addEventListener("click", ()=>{
//     console.log("HOLA");
// })

// $eventoSemantico.addEventListener("click", ()=>{
//     console.log("Hola, segundo manejador");
// })

// $eventoSemantico.addEventListener("click", holaMundo);

// //son importantes tener en cuenta el type de el evento y el target, que es quien o que elemento desencadeno el eventos

                                        /**
                                         * EVENTOS CON PARAMETROS Y REMOVER EVENTOS
                                         */

// function saludar(nombre = "Desconocido/a") {
//     console.log(`Hola ${nombre}`);
// }

// const $eventoSemantico = document.getElementById("evento-semantico");

// $eventoSemantico.addEventListener("click", ()=>{
//     saludar();              //por lo tanto se usa una funcion que llame a otra funcion, la primera se convierte entonces en el manejador
//     saludar("Jeasson")      //esta es la manera de pasar parametros en eventos
// });


// //remover eventos, es necesario que la funcion manejadora este declarada o expresada, ya que es necesario saber que existe, por lo tato las funciones fecha no funcionan para remover eventos
// const $removerEvento = document.querySelector("#remover-e");

// const removerDBclick = (e)=>{
//     alert(`Removiendo el evento ${e.type}`);
//     console.log(e);
//     $removerEvento.removeEventListener("dblclick", removerDBclick);
//     $removerEvento.disabled = true;
// }

// $removerEvento.addEventListener("dblclick", removerDBclick);

                                        /**
                                         * FLUJO DE EVENTOS (BURBUJA Y CAPTURA)
                                         */

// //Como js trabaja e interpreta los eventos
// //tercer parametro del addEventListener

// //la fase de burbuja se refiere a la propagacion de adentro hacia afuera, es 
// //el modelo que los navegadores utilizando

// const $divEventos = document.querySelectorAll(".flujo-eventos div");

// console.log($divEventos);

// function flujoEventos(e){
//     console.log(`Hola ${this.className} origino el evento el div ${e.target.className}`);
// }

// $divEventos.forEach(e => {
//     //fase de burbuja del elemento mas interno al mas externo
//     e.addEventListener("click", flujoEventos, false) //el tercer parametro
//     //fase de captura del elemento mas externo al mas interno
//     e.addEventListener("click", flujoEventos, true) //el tercer parametro
//     e.addEventListener("click", flujoEventos, {
//         capture:false, // o true para captura o  burbbuja
//         once: true,     //indica si solo se puede ejecutar una vez y no mas
//     }) //el tercer parametro
// });

                                        /**
                                         * STOP PROPAGATION Y PREVENTDEFAULT
                                         */

// //evita que los eventos se propaguen por ejemplo al pulsar un boton el formulario se ejecute 

// const $divEventos = document.querySelectorAll(".flujo-eventos div"),
//     $linkEventos = document.querySelector(".flujo-eventos a");

// console.log($divEventos);

// function flujoEventos(e){
//     console.log(`Hola ${this.className} origino el evento el div ${e.target.className}`);
//     e.stopPropagation();    //elimina la propagacion de los eventos
// }

// $divEventos.forEach(e => {
//     e.addEventListener("click", flujoEventos, false);
// })

// $linkEventos.addEventListener("click", (e)=>{
//     e.preventDefault(); //cancela la accion que tiene por defecto un elemento en este caso es redireccion de pagina
//     console.log("GOLA");
//     e.stopPropagation();
// })

                                        /**
                                         * DELEGACION DE EVENTOS
                                         */

// function flujoEventos(origin, e){
//     console.log(`Hola ${origin.className} origino el evento el div ${e.target.className}`);
// }

// document.addEventListener("click", (e) => {
//     if (e.target.matches(".flujo-eventos a")) {
//         e.preventDefault(); //cancela la accion que tiene por defecto un elemento en este caso es redireccion de pagina
//         console.log("GOLA");    //ya no es necesario el stopPropagation debido a que ya no hay mas padre fuera del document
//     }

//     if (e.target.matches(".flujo-eventos div")) {
//         console.log(e.target);
//         flujoEventos(e.target, e);
//     }
// })

                                        /**
                                         * BOM: PROPIEDADES Y EVENTOS
                                         */

// //Son eventos o metodos que cuelgan directamente del window, es decir a la ventana del navegador

// window.addEventListener("resize", (e)=>{
//     console.clear();
//     console.log("Evento resize");
//     console.log(window.innerWidth); //entrega valor solo del viewport o sea lo que se ve 
//     console.log(window.innerHeight);
//     console.log(outerWidth);        //muetsra el valor de toda la ventana
//     console.log(outerHeight);
//     console.log(window.scrollX);  //muestra cueanto scroll se hace desde x = 0
//     console.log(window.scrollY);    //muestra cuanto scroll se hace desde y = 0
// })

// window.addEventListener("scroll", (e)=>{
//     // console.clear();
//     console.log("Evento scroll");
//     console.log(window.scrollX);  //muestra cueanto scroll se hace desde x = 0
//     console.log(window.scrollY);    //muestra cuanto scroll se hace desde y = 0
// })

// window.addEventListener("load", (e)=>{
//     console.log("Evento load window");
//     console.log(screenX);
//     console.log(screenY);
//     console.log(e.timeStamp);
// })

// //es mejor trabaar el load con document, ya que tarda mucho menos en ejecutarse
// document.addEventListener("DOMContentLoaded", (e)=>{
//     console.log("Evento load document (DOMContentLoaded)");
//     console.log(screenX);
//     console.log(screenY);
//     console.log(e.timeStamp);
// })

                                        /**
                                         * BOM metodos
                                         */

// alert("HOLA");
// confirm("HOLA CONFIRM");
// prompt("Hola prompt");

// const $abrir = document.getElementById("abrir-ventana"),
//     $cerrar = document.getElementById("cerrar-ventana"),
//     $imprimir = document.getElementById("imprimir-ventana");


// let ventana;
//     $abrir.addEventListener("click", (e) =>{
//         ventana = open("https://jonmircha.com"); //no es necesario usar window.open
//     })
//     $cerrar.addEventListener("click", (e) =>{
//         ventana.close(); //cierra la ventana que se abrio con el open
//     })
//     $imprimir.addEventListener("click", (e) =>{
//         print();
//     })

/**
 *BOM OBJETOS: URL, HISTORIAL, NAVEGADOR
 */

console.log("************Objeto URL (location)**********");
console.log(window.location);
console.log(location.origin);  //ruta de donde se origina live server
console.log(location.protocol);//protocolo http
console.log(location.host); //hostname(nombre dominio) y puerto
console.log(location.hostname); //solo la ip (nombre del dominio)
console.log(location.port); //solo el puerto
console.log(location.href); //direccion completa 
console.log(location.hash); //detecta el valor de url que esta luego del #  ejemplo #contacto
console.log(location.pathname); //solo la url sin el origen
//location.reload(); //se ejecuta ciclicamente la recarga del documento 
console.log(location.search); //paso de parametros por la url


console.log("************History**********");
console.log(history);
console.log(history.length); //indica la cantidad de paginas que he visitado en la pagina
history.back(3); //devuelve un numero de veces las paginas
history.forward(3); //se mueve adelante un numero de veces en la pagina
history.go(1) //sirve para or adelante o atras con home 0, hacia atras negativos y hacia adelante positivos


console.log("*********Objeto navigation***********");
console.log(navigator);
console.log(navigator.connection); //informacion  de la red del que se contenta
console.log(navigator.geolocation); //geolocalizacion
console.log(navigator.mediaDevices); //dispositivos del aparato
console.log(navigator.mimeTypes);
console.log(navigator.onLine); //el usuario tiene o no conexion en el navegador
console.log(navigator.serviceWorker); //sirve para hacer aplicaciones progresive web app que funcionen como de escritorio
console.log(navigator.storage);
console.log(navigator.usb); //identifica usb conectadas
console.log(navigator.userAgent); //datos sobre el navegador y datos del pc