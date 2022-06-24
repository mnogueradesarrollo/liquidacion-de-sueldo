function calcularSueldoNeto(sueldoBasico, anios) {
  
  let porc_antiguedad = 3;
  let total_antiguedad = parseInt(anios + porc_antiguedad);
  let sueldoBasicoConcepto = sueldoBasico;
  let antiguedad = parseFloat((sueldoBasicoConcepto * total_antiguedad) / 100);
  let actividadCritica = parseFloat((sueldoBasicoConcepto * 20) / 100);
  let boniFuncion = parseFloat((sueldoBasicoConcepto * 30) / 100);
  let boniTitulo = parseFloat((sueldoBasicoConcepto * 12) / 100);
  let productividad = parseFloat((sueldoBasicoConcepto * 30) / 100);
  let totalHaberes = parseFloat(
    sueldoBasicoConcepto +
      antiguedad +
      actividadCritica +
      boniFuncion +
      boniTitulo +
      productividad
  );
  let presentismoPuntualidad = 500;
  let totalExentos = parseInt(presentismoPuntualidad);
  let ley = parseFloat((totalHaberes * 14) / 100);
  let ioma = parseFloat((totalHaberes * 4.8) / 100);
  let totalDescuentos = parseFloat(ley + ioma);
  let totalNeto = parseFloat(totalHaberes + totalExentos - totalDescuentos);

  document.getElementById("sueldoBasicoConcepto").innerHTML =
    "<h3>$" + sueldoBasicoConcepto.toFixed(2) + "</h3>";
  document.getElementById("antiguedad").innerHTML =
    "<h3>$" + antiguedad.toFixed(2) + "</h3>";
  document.getElementById("actividadCritica").innerHTML =
    "<h3>$" + actividadCritica.toFixed(2) + "</h3>";
  document.getElementById("boniFuncion").innerHTML =
    "<h3>$" + boniFuncion.toFixed(2) + "</h3>";
  document.getElementById("boniTitulo").innerHTML =
    "<h3>$" + boniTitulo.toFixed(2) + "</h3>";
  document.getElementById("productividad").innerHTML =
    "<h3>$" + productividad.toFixed(2) + "</h3>";
  document.getElementById("totalHaberes").innerHTML =
    "<h3>$" + totalHaberes.toFixed(2) + "</h3>";
  document.getElementById("presentismoPuntualidad").innerHTML =
    "<h3>$" + presentismoPuntualidad.toFixed(2) + "</h3>";
  document.getElementById("totalExentos").innerHTML =
    "<h3>$" + totalExentos.toFixed(2) + "</h3>";
  document.getElementById("ley").innerHTML = "<h3>$" + ley.toFixed(2) + "</h3>";
  document.getElementById("ioma").innerHTML =
    "<h3>$" + ioma.toFixed(2) + "</h3>";
  document.getElementById("totalDescuentos").innerHTML =
    "<h3>$" + totalDescuentos.toFixed(2) + "</h3>";
  document.getElementById("totalNeto").innerHTML =
    "<h3>$" + totalNeto.toFixed(2) + "</h3>";
}


document.querySelector("#calcular").addEventListener("click", (e) => {
  e.preventDefauld();
  let sueldoBasico = parseFloat(+document.querySelector("#sueldoBasico").value);
  let anios = parseInt(+document.querySelector("#anios").value);
  calcularSueldoNeto(sueldoBasico, anios);
});