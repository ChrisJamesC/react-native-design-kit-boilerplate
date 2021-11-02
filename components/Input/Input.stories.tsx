import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Input from './Input';

const InputMeta: ComponentMeta<typeof Input> = {
  title: 'Input',
  component: Input,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    value: 'Hello world',
    label: 'Label',
  },
};

export default InputMeta;

type InputStory = ComponentStory<typeof Input>;

export const Basic: InputStory = (args) => <Input {...args} />;

export const Controlled: InputStory = ({ value: initValue, ...args }) => {
  const [value, setValue] = React.useState<string>('hello');
  return <Input value={'oh'} />;
};
