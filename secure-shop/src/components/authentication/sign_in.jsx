import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Sign_In_Style from "../../styles/material_styles/sign_in_style";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import CustomTypography from "../custom_typography";
import clsx from "clsx";
import axios from "axios";
import history from "../../history";
import { setStateAfterSubmit } from "../../redux/actions/common_actions";

export function Sign_In(props) {
  const { classes, children, className, ...other } = props;

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const on_email_change = (e) => {
    setEmail(e.target.value);
  };
  const on_password_change = (e) => {
    setPassword(e.target.value);
  };

  const submit_form = () => {
    try {
      axios
        .post(
          `https://localhost:8443/sign-in?email=${email}&password=${password}`
        )
        .then((response) => {
          console.log(response.data);
          var data = response.data;
          if (data["validUser"]) {
            props.setStateAfterSubmit(email, password, data["name"], true);
            setEmail("");
            setPassword("");
            // window.location.href = `http://localhost:9000?user=${email}`;

            history.push(`/Duo?user=${email}`);
            //   axios
            //     .get(`http://localhost:9000?user=${email}`)
            //     .then((response) => console.log(response));
          }
        })
        .catch((err) => console.warn(err));
    } catch (error) {
      console.log(error);
    }
    setEmail("");
    setPassword("");
    console.log("done");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <CustomTypography
          text="SIGN IN"
          color="#000"
          fontWeight="bold"
          fontSize="24px"
        />
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            value={email}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={on_email_change}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={password}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={on_password_change}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            onClick={submit_form}
            // type="submit"
            fullWidth
            variant="contained"
            className={clsx(classes.submit, className)}
          >
            <CustomTypography
              text="Sign In"
              color="#fff"
              fontWeight="lighter"
              fontSize="16px"
            />
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                <CustomTypography
                  text="Forgot Password?"
                  color="blue"
                  fontWeight="lighter"
                  fontSize="12px"
                  marginTop="5px"
                />
              </Link>
            </Grid>
            {/* <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> */}
          </Grid>
        </form>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { setStateAfterSubmit })(
  withStyles(Sign_In_Style)(Sign_In)
);
