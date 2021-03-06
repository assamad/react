import * as React from 'react'
import { Dropdown, Flex, Text } from '@stardust-ui/react'

const inputItems = ['Bruce Wayne', 'Natasha Romanoff', 'Steven Strange', 'Alfred Pennyworth']

class DropdownExampleControlled extends React.Component {
  state = { open: false }

  handleOpenChange = (e, { open }) => {
    this.setState({ open })
  }

  render() {
    const open = this.state.open
    return (
      <Flex gap="gap.large" vAlign="center">
        <Dropdown
          open={open}
          onOpenChange={this.handleOpenChange}
          items={inputItems}
          placeholder="Select your hero"
        />
        <Text weight="semibold" content={`Dropdown open state is: "${open}"`} />
      </Flex>
    )
  }
}

export default DropdownExampleControlled
