/*
 * Pago por horas
 * El total de horas trabajadas
 *
 * Si el total de horas trabajadas es mayor a 40, entonces
 * se debe calcular el pago por horas extras y el pago por horas
 * Si el total de horas no es mayor a 40, entonces
 * se debe calcular el pago por horas
 */

const calcularTotales = (sueldoBasico, anios) => {
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

  document.querySelector("#resultado").innerHTML = `El sueldo Haberes es: ${totalHaberes}, Exento es: ${totalExentos}., Descuento es: ${totalDescuentos} SUELDO NETO ES: ${totalNeto}`;
};

document.querySelector("#pro_calc").addEventListener("click", (e) => {
    e.preventDefault();
    let sueldoBasico = +document.querySelector("#sueldo_basico").value;
    let anios = +document.querySelector("#anios_").value;
    calcularTotales(sueldoBasico, anios);
});
