import { styled } from "../../styles";

export const CardOrderContainer = styled("div", {
  border: "1px solid $gray100",
  borderRadius: "5px",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "center",
  width: "100%",
});

export const CardOrderContent = styled("button", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "$red300",
  borderRadius: "5px",
  width: "100%",
  height: "100px",
  border: 0,
  cursor: "pointer",
  transition: "all 0.2s",
  zIndex: 1,

  "&:hover": {
    opacity: 0.8,
  },

  variants: {
    buttonBg: {
      waiting: {
        background: "$red400",
        color: "$gray100",
      },

      in_production: {
        background: "$yellow500",
        color: "$gray900",
      },

      done: {
        background: "$green500",
        color: "$gray100",
      },
    },
  },

  strong: {
    fontSize: "1.3rem",
    fontWeight: "bolder",
  },

  span: {
    fontSize: "1rem",
  },
});

export const CardOrderHeader = styled("header", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  marginBottom: "1rem",

  variants: {
    amountBg: {
      waiting: {
        span: {
          background: "$red300",
        },
      },

      in_production: {
        span: {
          background: "$yellow500",

          color: "$gray900",
        },
      },

      done: {
        span: {
          background: "$green500",
        },
      },
    },
  },

  strong: {
    fontSize: "1.3rem",
    fontWeight: "bolder",
  },

  span: {
    borderRadius: "20px",
    fontSize: "1rem",
    padding: "0 0.5rem",
    fontWeight: "bold",
  },
});
