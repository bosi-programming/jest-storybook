import React from "react";

import { Tabs, Tab } from "../atoms";

export default {
  title: "Atoms/Tabs",
  component: Tabs,
  subcomponents: { Tab },
};
const Template = (args) => <Tabs {...args} />;

const tabsDefault = (
  <div>
    <Tab label="Fake" />
    <Tab label="Fake" />
    <Tab label="Fake" />
  </div>
);
const tabsMinWidth = (
  <div>
    <Tab label="Fake" minWidth />
    <Tab label="Fake" minWidth />
    <Tab label="Fake" minWidth />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: tabsDefault,
  dense: false,
};

export const DefaultMinWidth = Template.bind({});
DefaultMinWidth.args = {
  children: tabsMinWidth,
  dense: false,
};

export const Dense = Template.bind({});
Dense.args = {
  children: tabsDefault,
  dense: true,
};

export const DenseMinWidth = Template.bind({});
DenseMinWidth.args = {
  children: tabsMinWidth,
  dense: true,
};
