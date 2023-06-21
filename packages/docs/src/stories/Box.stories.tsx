import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>testing box element</Text>
      </>
    ),
  },
} as Meta

export const Primary: StoryObj<BoxProps> = {}
