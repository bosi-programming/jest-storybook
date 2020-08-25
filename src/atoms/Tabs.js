import React, { createContext, useMemo } from 'react';

import { createStyles, withStyles } from '@material-ui/core';
import MuiTabs from '@material-ui/core/Tabs';

const unit = 8;

const styles = () =>
  createStyles({
    root: {
      minHeight: unit * 4,
      paddingLeft: unit * 3,
      paddingRight: unit * 3,
    },
    indicator: {
      height: 3,
    },
  });

export const TabsContext = createContext({
  dense: false,
});

const Tabs = ({ classes, dense, ...rest }) => {
  const context = useMemo(() => ({ dense }), [dense]);

  return (
    <TabsContext.Provider value={context}>
      <MuiTabs
        classes={{
          root: classes.root,
          indicator: classes.indicator,
        }}
        {...rest}
      />
    </TabsContext.Provider>
  );
};

export default withStyles(styles, { name: 'LumaTabs' })(Tabs);
