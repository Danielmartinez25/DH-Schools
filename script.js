const data =
  "https://script.google.com/macros/s/AKfycby-gD-R5_3mnrp7Nx1XG869mbKrdt9kPHpPN_ye4E8-_YfuRt60G6sc2faes_d1_3Hi/exec?columnaFiltro=marca&criterioFiltro=Samsung";
let celulares = "";
fetch(data)
  .then((response) => response.json())
  .then((resultados) => {
    resultados.datos.forEach((celular) => {
      celulares = celulares += `
        <div class="celular">
            <img class="poster" src="${celular.imagen}">
            <div class= "celular-propiedades">
            <h2 class="marca">Marca: ${celular.marca}</h2>
            <h3 class="modelo">Modelo: ${celular.modelo}</h3>
            <h4 class="precio">Precio: ${celular.precio}</h4>  
            </div>
        </div>`;
    });
    document.getElementById("contenedor").innerHTML = celulares;
  })
  .catch(() => alert("Error al conectarnos a nuestra API"));
