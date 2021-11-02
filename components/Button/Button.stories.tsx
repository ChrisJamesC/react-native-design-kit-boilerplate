import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import MyButton from './Button';

const MyButtonMeta: ComponentMeta<typeof MyButton> = {
  title: 'Button',
  component: MyButton,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello World',
    secondary: false,
  },
};

export default MyButtonMeta;

type MyButtonStory = ComponentStory<typeof MyButton>;

export const Primary: MyButtonStory = (args) => <MyButton {...args} />;
export const Secondary: MyButtonStory = (args) => (
  <MyButton {...args} secondary />
);
