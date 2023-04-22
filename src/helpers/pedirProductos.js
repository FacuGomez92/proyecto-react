import {stock} from '../data/stock';

const pedirProductos = () => {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve(stock);
      rejected("Rechazado");
    }, 500);
  });
};

export default pedirProductos;
