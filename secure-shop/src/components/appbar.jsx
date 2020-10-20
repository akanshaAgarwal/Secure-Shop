import React from "react";
import { AppBar, IconButton } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import MenuIcon from "@material-ui/icons/Menu";
import Appbar_Style from "../styles/material_styles/appbar_style";
import styles from "../styles/appbar.module.css";
import CustomTypography from "./custom_typography";

// Styles used in the Appbar

export function Appbar(props) {
  const { classes } = props;

  // uncommet when search bar/ add panel button is needed

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const displayChartType = (type) => {
  //   props.changeChartType(type);
  //   setAnchorEl(null);
  // };
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  return (
    // Appbar is used to create the top bar which displays the title and the icon
    <div className={classes.root}>
      <AppBar elevation={0} position="fixed" className={classes.appBarShift}>
        <Toolbar variant="dense" className={classes.toolbar}>
          {/* <img src={} alt="logo" className={styles.imageIcon} /> */}
          <CustomTypography
            text="Secure Shop (CSCE - 689)"
            color="#fff"
            fontWeight="bold"
            fontSize="24px"
            marginLeft="20px"
          />
          {console.log("hello", props.authenticated, props.name)}
          {props.authenticated ? (
            <CustomTypography
              text={`Hi, ${props.name}`}
              color="#fff"
              fontWeight="bold"
              fontSize="24px"
              marginLeft="20px"
            />
          ) : null}

          {/* commented for now, can uncommet if required
           consists of a search bar and add panel button */}

          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon color="action" />
            </div>
            <InputBase
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          {props.addPanelButton === true ? (
            <StyledButtonGreen
              className={classes.iconShift}
              style={{ marginRight: "10px" }}
              color="default"
              size="small"
              variant="outlined"
            >
              Add Panel
            </StyledButtonGreen>
          ) : (
            <React.Fragment>
              <StyledButtonGreen
                className={classes.iconShift}
                color="default"
                size="small"
                variant="outlined"
                style={{ outline: "none", marginRight: "10px" }}
                onClick={handleClick}
              >
                Chart Type
              </StyledButtonGreen>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {props.chartTypeList.map((value, index) => (
                  <MenuItem onClick={() => displayChartType(value)}>
                    {value}
                  </MenuItem>
                ))}
              </Menu>
            </React.Fragment>
          )} */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    authenticated: state.common_data.authenticated,
    name: state.common_data.name,
  };
};
export default connect(mapStateToProps, {})(withStyles(Appbar_Style)(Appbar));
