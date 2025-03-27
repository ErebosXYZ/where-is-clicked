// Recuerda todas las propiedades que tiene el objeto event !


// Haig de fer que quan es cliqui sobre la imatge del mapa es dibuixi la creu (line1 i line2). Creem la variable map

let map = document.querySelector(".map");



function drawCross(x, y) {
  // Creamos un elemento div para la primera línea
  const line1 = document.createElement("div");
  line1.style.position = "absolute";
  line1.style.backgroundColor = "green";
  line1.style.width = "2px";
  line1.style.height = "20px";
  line1.style.left = x + "px";
  line1.style.top = y - 10 + "px";
  document.body.appendChild(line1);

  // Creamos un elemento div para la segunda línea
  const line2 = document.createElement("div");
  line2.style.position = "absolute";
  line2.style.backgroundColor = "green";
  line2.style.width = "20px";
  line2.style.height = "2px";
  line2.style.left = x - 10 + "px";
  line2.style.top = y + "px";
  document.body.appendChild(line2);
}

// Hem de crear una funció que executi drawCross en el punt que cliquem del mapa.
// Creem dues variables que guardin les posicions del click en el moment de l'event (e.clientX, e.clientY)
// Cridem la funció drawCross amb els valors de x i y en el moment del click.

map.addEventListener("click", function(e){
  let x = e.clientX;
  let y = e.clientY;
  console.log(x, y);
  drawCross(x, y);
});



