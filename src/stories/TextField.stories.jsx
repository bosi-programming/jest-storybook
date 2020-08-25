import React from 'react';
import { TextField } from '../atoms';

export default {
  title: 'Atoms/Text Field',
  component: TextField,
  argTypes: {
    label: {
      name: 'Label',
      type: { name: 'string', required: false },
      defaultValue: 'Fake Label',
    },
    size: {
      name: 'Size',
      control: {
        type: 'select',
        options: ['default', 'small'],
      },
      defaultValue: 'default',
    },
  },
};

const Template = (args) => <TextField {...args} />;

export const SizeDefault = Template.bind({});
SizeDefault.args = {
  size: 'default',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};
