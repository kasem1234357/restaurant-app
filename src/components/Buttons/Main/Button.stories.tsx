import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { mockButtonProps } from './Button.mocks';

const meta = {
  title: 'Buttons/Main',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Story = StoryObj<typeof meta>;

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Secondary: Story = {
  args: {
    ...mockButtonProps.base,
    type: 'secondary',
  },
};

export const Large: Story = {
  args: {
    ...mockButtonProps.base,
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    ...mockButtonProps.base,
    size: 'small',
  },
};
