export default (theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    marginTop:"100px"
  },
  root1: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    marginTop:"100px"
  },
  container: {
    paddingTop: theme.spacing(0.5),
    backgroundColor: "#f1f1f1",
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    paddingLeft: theme.spacing(0.5),
    height: "100",
  },
  gridItem: {
    borderRadius: 20,
    padding: theme.spacing(0.6),
  },
  paper: {
    borderRadius: "10px",
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  appBarSpacer: theme.mixins.toolbar,
  link: {
    textDecoration: "none",
  },
});
