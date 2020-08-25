import React, { useContext } from "react";

import { createStyles, withStyles } from "@material-ui/core";
import MuiTab from "@material-ui/core/Tab";
import classnames from "classnames";

import { TabsContext } from "./Tabs";

const styles = () =>
  createStyles({
    rootDense: {
      minHeight: 32,
      minWidth: "initial",
    },
    labelContainerDense: {
      padding: 0,
    },
    label: {
      fontSize: 14,
    },
    labelDense: {
      textTransform: "capitalize",
    },
    selected: {
      fontWeight: 600,
    },
    minWidth: {
      minWidth: 95,
    },
  });

const Tab = ({ classes, selected, minWidth, ...rest }) => {
  const { dense } = useContext(TabsContext);

  return (
    <MuiTab
      classes={{
        root: classnames({
          [classes.rootDense]: dense,
          [classes.minWidth]: minWidth,
        }),
        labelContainer: classnames({ [classes.labelContainerDense]: dense }),
        label: classnames(classes.label, { [classes.labelDense]: dense }),
        selected: classes.selected,
      }}
      selected={selected}
      {...rest}
    />
  );
};

export default withStyles(styles, { name: "LumaTab" })(Tab);
