import type {Meta, StoryObj} from '@storybook/react'

import Light from './Light'

const meta: Meta<typeof Light> = {
  component: Light,
  title: 'Light'
}

export default meta

type Story = StoryObj<typeof meta>;

export const Base: Story = {
}

export const Red: Story = {
  args: {
    variant: 'red'
  }
}
export const Yellow: Story = {
  args: {
    variant: 'yellow'
  }
}

export const Green: Story = {
  args: {
    variant: 'green'
  }
}

export const TrafficLights: Story = {
  render: () => <div>
    <Light variant='green' />
    <Light variant='yellow'/>
    <Light variant='red'/>
    </div>,
}