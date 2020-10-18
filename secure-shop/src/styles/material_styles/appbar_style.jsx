import { fade } from "@material-ui/core/styles";
export default (theme) => ({
  root: {
    flexGrow: 1,
    padding:"0px",
    margin:"0px"
  },
  marginStyles: {
    margin: theme.spacing(1),
    backgroundColor: "#004bae",
    color: "#fff",
    borderColor: "#fff",
    border: "2px",
  },
  marginStylesExtreme: {
    marginRight: theme.spacing(30),
  },
  appBarShift: {
    display: "flex",
    backgroundColor: "#000",
    padding: "0px",
    margin: "0px"
  },
  iconShift: {
    display: "flex",
    justifyContent: "flex-end",
    textTransform: "none",
  },
  search: {
    position: "absolute",
    borderRadius: "20px",
    backgroundColor: fade(theme.palette.common.black, 0.1),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.05),
    },
    color: "#858587",
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(20),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(67),
      width: "400px",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    paddingRight: `calc(1em + ${theme.spacing(30)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
  toolbar: {
    padding: "0px",
    margin: "0px"
  },
});
