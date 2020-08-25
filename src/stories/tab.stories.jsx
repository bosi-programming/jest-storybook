import React from 'react';

import { Tab } from '../atoms';

export default {
  title: 'Atoms/Tab',
  component: Tab,
  args: {
    label: 'Fake label',
  },
};

const Template = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
  minWidth: false,
};

export const MinWidth = Template.bind({});
MinWidth.args = {
  minWidth: true,
};
