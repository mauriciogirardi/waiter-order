import { styled } from "../../styles";

export const HeaderContainer = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "2rem 1rem",
  maxWidth: "1300px",
  margin: "auto",

  img: {
    width: "100px",
  },
});

export const HeaderBackground = styled("div", {
  background: "$red500",
});

export const HeaderContent = styled("div", {
  h1: {
    fontSize: "2rem",
    fontWeight: "900",
    color: "$white",
  },

  span: {
    fontSize: "1rem",
    color: "$gray100",
  },
});

export const HeaderWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
