import { Meta, StoryObj } from '@storybook/react';
import DemoComponent from './DemoComponent';
import { mockDemoComponentProps } from './DemoComponent.mocks';

const meta: Meta<typeof DemoComponent> = {
  title: 'components/DemoComponent',
  component: DemoComponent,
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof DemoComponent>;
export const Base: Story = {
  args: {
    ...mockDemoComponentProps.text,
  },
};
