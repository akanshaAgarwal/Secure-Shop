import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Appbar from "./components/appbar";
import Dashboard_Styles from "./styles/material_styles/dashboard_style";
import { withStyles } from "@material-ui/core/styles";

class Dashboard extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div >
      <div>
        <Appbar/>
      </div>

      <div className={classes.root}>
      {/* <Sign_In/>
      <Sign_Up/> */}
      </div>
    </div>
      
    );
  }
}
// map the state using redux to the props of this component
// we can use the state here then in form of props
Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps, {})((withStyles(Dashboard_Styles)(Dashboard)));
