import React from "react";

import { createStyles, withStyles } from "@material-ui/core/styles";
import MuiTextField from "@material-ui/core/TextField";
import classnames from "classnames";

const styles = () =>
  createStyles({
    inputSmall: {
      height: "35px !important",
    },
  });

const TextField = ({ classes, size = "default", InputProps, ...rest }) => (
  <MuiTextField
    InputProps={{
      classes: {
        input: classnames({
          [classes.inputSmall]: size === "small",
        }),
      },
      ...InputProps,
    }}
    {...rest}
  />
);

export default withStyles(styles)(TextField);
