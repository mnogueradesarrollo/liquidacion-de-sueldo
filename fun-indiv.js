const calcularAntiguedad = (sueldoBasico, anios) => {
  let porcAntiguedad = 3;
  let totalAntiguedad = anios * porcAntiguedad;
  let antiguedad = (sueldoBasico * totalAntiguedad) / 100;
};

const calcularActCritica = (sueldoBasico, porcActCritica) => {
  let actCritica = (sueldoBasico * porcActCritica) / 100;
};

const calcularProductividad = (sueldoBasico, porcProductividad) => {
  let productividad = (sueldoBasico * porcProductividad) / 100;
};

const calcularFuncion = (sueldoBasico, porcFuncion) => {
  let funcion = (sueldoBasico * porcFuncion) / 100;
};

const calcularTitulo = (sueldoBasico, porcTitulo) => {
  let titulo = (sueldoBasico * porcProductividad) / 100;
};

function calcularBruto() {
  let bruto = sueldoBasico + antiguedad + actCritica + funcion + titulo;
}

const calcularDescLey = (bruto, porcLey) => {
  let ley = (bruto * porcLey) / 100;
};

const calcularDescIoma = (bruto, porcIoma) => {
  let ioma = (bruto * porcIoma) / 100;
};

function calcularDescuento() {
  let descuento = ley + ioma;
}

function calcularNeto() {
  let neto = bruto - descuento;
}
