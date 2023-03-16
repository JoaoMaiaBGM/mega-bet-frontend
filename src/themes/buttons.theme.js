const buttonTheme = {
  baseStyle: {
    border: "1.5px solid",
    borderRadius: "4px",
    fontWeight: "600",
    fontFamily: "Inter",
  },
  sizes: {
    small: {
      padding: "12px 20px",
      h: "38px",
      fontSize: "14px",
      w: "119px",
    },
    "small-auto": {
      padding: "12px 20px",
      h: "38px",
      fontSize: "14px",
      w: "auto",
    },
    "small-100%": {
      padding: "12px 20px",
      h: "38px",
      fontSize: "14px",
      w: "100%",
    },
    large: {
      padding: "12px 28px",
      h: "48px",
      fontSize: "16px",
      w: "146px",
    },
    "large-auto": {
      padding: "12px 20px",
      h: "38px",
      fontSize: "14px",
      w: "auto",
    },
    "large-100%": {
      padding: "12px 28px",
      h: "48px",
      fontSize: "16px",
      w: "100%",
    },
  },
  variants: {
    "open-modal-announcement": {
      backgroundColor: "greyScale.grey10",
      color: "brand.brand1",
      borderColor: "brand.brand1",
      _hover: {
        backgroundColor: "brand.brand4",
      },
    },
    "create-announcement:disable": {
      backgroundColor: "brand.brand3",
      color: "brand.brand4",
      borderColor: "brand.brand3",
    },
    "create-announcement:enable": {
      backgroundColor: "brand.brand1",
      color: "greyScale.whiteFixed",
      borderColor: "brand.brand3",
      _hover: {
        backgroundColor: "brand.brand2",
      },
    },
    "exclude/cancel-announcement": {
      backgroundColor: "greyScale.grey6",
      color: "greyScale.grey2",
      borderColor: "greyScale.grey6",
      _hover: {
        backgroundColor: "greyScale.grey5",
      },
    },
    "select-type-announcement:disabled": {
      backgroundColor: "greyScale.whiteFixed",
      color: "greyScale.grey0",
      borderColor: "greyScale.grey4",
      _hover: {
        backgroundColor: "greyScale.grey1",
        color: "greyScale.grey10",
      },
    },
    "select-type-announcement:enable": {
      backgroundColor: "brand.brand1",
      color: "greyScale.whiteFixed",
      borderColor: "brand.brand3",
      _hover: {
        backgroundColor: "brand.brand2",
      },
    },
    "create-field-image-announcement": {
      backgroundColor: "brand.brand4",
      color: "brand.brand1",
      borderColor: "brand.brand4",
    },
    "select-type-vehicle-home": {
      backgroundColor: "transparent",
      color: "greyScale.grey10",
      borderColor: "solid 1px greyScale.grey10",
      fontFamily: "fonts.inter",
    },
    "buy-vehicle": {
      backgroundColor: "brand.brand1",
      color: "greyScale.whiteFixed",
      borderColor: "brand.brand3",
      marginTop: "2rem",
      _hover: {
        backgroundColor: "brand.brand2",
      },
    },
    "vehicle-sell": {
      backgroundColor: "greyScale.whiteFixed",
      color: "greyScale.grey1",
      borderColor: "greyScale.grey1",
      marginTop: "2rem",
      _hover: {
        backgroundColor: "greyScale.grey1",
        color: "greyScale.grey10",
      },
    },
    "vehicle-auction": {
      backgroundColor: "brand.brand1",
      color: "greyScale.grey10",
      borderColor: "greyScale.grey10",
      marginTop: "0.5rem",
      _hover: {
        backgroundColor: "greyScale.grey10",
        color: "brand.brand1",
      },
    },
    "exclude-announcement": {
      backgroundColor: "feedback.alert3",
      color: "feedback.alert1",
      borderColor: "feedback.alert2",
      _hover: {
        backgroundColor: "feedback.alert2",
        color: "feedback.alert1",
      },
    },
    "show-profile": {
      marginTop: "1rem",
      backgroundColor: "greyScale.grey0",
      color: "greyScale.whiteFixed",
      borderColor: "greyScale.grey0",
      _hover: {
        backgroundColor: "greyScale.grey1",
        color: "greyScale.whiteFixed",
      },
    },
  },
};
export default buttonTheme;
