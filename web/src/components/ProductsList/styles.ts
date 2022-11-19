import { styled } from "../../styles";

export const OrderContainer = styled("div", {
  margin: "2rem 0",
});

export const OrderStatus = styled("div", {
  display: "flex",
  flexDirection: "column",

  span: {
    color: "$gray500",
  },

  strong: {
    color: "$gray900",
    fontWeight: 900,
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
});

export const OrderDetails = styled("div", {
  marginTop: "2rem",

  "> strong": {
    color: "$gray700",
    fontWeight: 500,
    fontSize: "0.875rem",
  },
});

export const OrderCardProduct = styled("div", {
  marginTop: "1rem",
  display: "flex",
  alignItems: "flex-start",
  gap: "1rem",

  "> img": {
    width: "3rem",
    height: "3rem",
    borderRadius: "2px",
    objectFit: "cover",
  },
});

export const OrderCardContent = styled("div", {
  display: "flex",
  flexDirection: "column",

  "& > span": {
    color: "$gray500",

    strong: {
      color: "$gray900",
    },
  },

  p: {
    color: "$gray600",
    paddingLeft: "1.4rem",
  },
});

export const OrderCardTotal = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "$gray800",
  marginTop: "2rem",
});
