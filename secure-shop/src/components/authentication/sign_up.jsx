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

const re_email = new RegExp(".+@.+..+");
const re_password = new RegExp(
  "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
);

export function Sign_Up(props) {
  const { classes, children, className, ...other } = props;
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password_confirm, setConfirmPassword] = React.useState("");

  const submit_form = () => {
    var valid_email = false;
    var valid_password = false;
    var valid_name = false;
    var valid_confirm_password = false;
    if (name !== "") valid_name = true;
    if (re_email.test(email) === true) valid_email = true;
    if (re_password.test(password) === true) valid_password = true;
    if (password === password_confirm) valid_confirm_password = true;

    if (valid_name && valid_confirm_password && valid_email && valid_password) {
      axios
        .post("https://localhost:8443/sign-up", {
          email: email,
          name: name,
          password: password,
          mobile: "8888888888",
          primeUser: false,
        })
        .then((response) => {
          console.log(response.data);
          var data = response.data;
          if (data["userCreated"]) {
            props.setStateAfterSubmit(email, password, name, true);
            setConfirmPassword("");
            setEmail("");
            setName("");
            setPassword("");

            history.push("/Dashboard");
          }
        })
        .catch((err) => console.warn(err));

      console.log("successful here");
    }
    console.log("successful");
  };

  const on_name_change = (e) => {
    setName(e.target.value);
  };
  const on_email_change = (e) => {
    setEmail(e.target.value);
  };
  const on_password_change = (e) => {
    setPassword(e.target.value);
  };
  const on_confirm_password_change = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <CustomTypography
          text="SIGN UP"
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
            id="name"
            value={name}
            label="Name"
            name="name"
            autoComplete="name"
            onChange={on_name_change}
            autoFocus
            helperText={name === "" ? "Invalid" : ""}
          />

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
            onChange={on_email_change}
            helperText={re_email.test(email) === true ? "" : "Invalid"}
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
            helperText={re_password.test(password) === true ? "Strong" : "Weak"}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirm_password"
            value={password_confirm}
            label="Confirm Password"
            type="password"
            id="confirm_password"
            onChange={on_confirm_password_change}
            helperText={
              password_confirm === password
                ? "Matches the password"
                : "Does not match the passowrd"
            }
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
              text="Sign Up"
              color="#fff"
              fontWeight="lighter"
              fontSize="16px"
            />
          </Button>
        </form>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { setStateAfterSubmit })(
  withStyles(Sign_In_Style)(Sign_Up)
);
