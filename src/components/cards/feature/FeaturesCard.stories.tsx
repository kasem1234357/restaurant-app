import { Meta, StoryObj } from '@storybook/react';

import FeaturesCard from './FeaturesCard';
import { mockFeaturesCardProps } from './FeaturesCard.mocks';
const meta = {
  title: 'Cards/FeaturesCard',
  component: FeaturesCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    padding: [],
    //we can add second way to change argument here
  },
} satisfies Meta<typeof FeaturesCard>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Story = StoryObj<typeof meta>;

// // More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: {
    ...mockFeaturesCardProps.base,
  },
};
