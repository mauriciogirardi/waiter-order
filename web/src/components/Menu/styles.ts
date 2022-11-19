import { styled } from "../../styles";
import { NavLink } from "react-router-dom";

export const MenuContainer = styled("div", {
  padding: "0 1rem 1rem 1rem",
  maxWidth: "1300px",
  margin: "auto",
});

export const Menus = styled("ul", {
  display: "flex",
  alignItems: "center",
  listStyle: "none",
  gap: "1rem",
});

export const MenuLink = styled(NavLink, {
  color: "$gray100",
  textDecoration: "none",
  fontSize: "1.1rem",
  fontWeight: "bold",
  padding: "0.2rem 1rem",
  borderRadius: "5px",
  border: "1px solid transparent",
  display: "flex",
  alignItems: "center",
  gap: "5px",

  "&.active": {
    background: "$red500",
    boxShadow: "7px 11px 28px -7px rgba(0,0,0,0.58)",
    border: "1px solid $gray400",
  },

  "&:hover": {
    border: "1px solid $gray400",
    borderRadius: "5px",
  },
});
