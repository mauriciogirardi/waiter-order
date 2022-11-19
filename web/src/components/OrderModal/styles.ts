import { styled } from "../../styles";

export const Overlay = styled("div", {
  left: 0,
  top: 0,
  background: "rgba(0,0,0,0.4)",
  backdropFilter: "blur(4.5px)",
  width: "100%",
  height: "100%",
  position: "fixed",
  zIndex: 99999,
});

export const ModalContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});

export const ModalCard = styled("div", {
  background: "$gray100",
  borderRadius: "5px",
  padding: "2rem",
  minWidth: "28rem",
});

export const ModalCloseButton = styled("button", {
  lineHeight: 0,
  background: "transparent",
  border: 0,
  cursor: "pointer",

  "&:hover": {
    color: "$red400",
  },
});

export const ModalCancelButton = styled("button", {
  lineHeight: 0,
  background: "transparent",
  border: 0,
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "bold",
  color: "$red400",

  "&:hover": {
    color: "$red500",
  },
});

export const ModalConfirmButton = styled("button", {
  background: "$gray700",
  color: "$gray100",
  height: "3rem",
  borderRadius: "25px",
  fontSize: "1rem",
  fontWeight: "bold",
  border: 0,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",

  "&:hover": {
    opacity: 0.9,
  },
});

export const ModalHeader = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  h2: {
    color: "$gray700",
  },
});

export const ModalFooter = styled("footer", {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});
