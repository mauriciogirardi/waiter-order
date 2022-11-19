import { StatusOrder } from "../types/Order";

export const orderStatus = (status: StatusOrder) => {
  return {
    WAITING: {
      name: "Fila de espera",
    },
    IN_PRODUCTION: {
      name: "Em produção",
    },
    DONE: {
      name: "Pronto!",
    },
  }[status];
};
