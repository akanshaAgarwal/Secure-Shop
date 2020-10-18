import React from "react";
import { Typography } from "@material-ui/core";

export default function CustomTypography(props) {
  return (
    <Typography
      variant={props.variant}
      style={{
        fontWeight: props.fontWeight,
        color: props.color,
        marginTop: props.marginTop,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
        marginBottom: props.marginBottom,
        fontSize: props.fontSize,
      }}
      noWrap
    >
      {props.text}
    </Typography>
  );
}
