const inventario = [
  {nombre: 'manzanas', cantidad: 2},
  {nombre: 'bananas', cantidad: 0},
  {nombre: 'cerezas', cantidad: 5}
];

let resultado = inventario.find((item,index,arr) => item.nombre  === 'manzanas');
console.log(resultado);