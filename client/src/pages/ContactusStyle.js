const styles = {
  topImageBox: {
    position: "relative",
    height: "50vh",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "flex-end",
    padding: "40px 5%",
    "@media (max-width: 600px)":{
      topImageBox: {
        height: "30vh",
        padding: "20px 5%",
      }
    }

    
  },

  headingTypography: {
    color: "#f2d7aa",
    fontWeight: "bold",
    fontFamily: "serif",
    fontSize: "3rem",
    zIndex: 2,
  },

  contactDetailsBox: {
    bgcolor: "#f2d7aa",
    color: "#000",
    py: 6,
  },

  contactText: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    fontFamily: "Arial, sans-serif",
  },

  formSection: {
    bgcolor: "#fff8e1", // Bright background
    color: "#000",
    py: 6,
  },

  formHeading: {
    fontWeight: "bold",
    mb: 2,
    // textAlign: "center",
    fontSize: "1.3rem"
  },

  formBox: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    mt:2,
  },

  textField: {
    backgroundColor: "#ffffff",
  },

  submitButton: {
    mt: 2,
    backgroundColor: "#f2d7aa",
    color: "#000",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#e0bf85",
    },
  },
};

export default styles;
