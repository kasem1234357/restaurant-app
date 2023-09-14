import { Meta, StoryObj } from '@storybook/react';

import Navbar from './Navbar';
import { mockNavbarProps } from './Navbar.mocks';
const meta = {
  title: 'sections/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Navbar>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Story = StoryObj<typeof meta>;

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};
export const LoggedOut: Story = {};
export const CreateAccount: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};
