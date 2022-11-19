export const formattedCurrency = (amount: number) => {
  return Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(amount);
};
