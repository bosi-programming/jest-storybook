import React from "react";

import { TextFieldSearch, TextField } from "../atoms";

export default {
  title: "Atoms/Text Field Search",
  component: TextFieldSearch,
  subcomponents: { TextField },
  argTypes: {
    label: {
      name: "Label",
      type: { name: "string", required: false },
      defaultValue: "Fake Label",
    },
  },
};

const Template = (args) => <TextFieldSearch {...args} />;

export const SizeDefault = Template.bind({});
SizeDefault.args = {
  size: "default",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};
