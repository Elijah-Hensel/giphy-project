import React from "react"
import { within, fireEvent, waitFor } from "@storybook/testing-library"
import { action } from '@storybook/addon-actions'
import { expect, spyOn } from "@storybook/jest"
import ShareModal from "../../../components/ShareModal"

export default {
  title: "Example/ShareModal",
  component: ShareModal,
  parameters: {
    actions: {
      handles: ["click .btn-share"],
    },
  },
  argTypes: {
    className: "",
    type: "",
  },
}

const Template = (args) => <ShareModal {...args} onClick={action('my component clicked')}/>

export const Clicked = Template.bind({})

Clicked.args = {
  className: ".btn-share",
  type: "button",
}

Clicked.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)
  const button = await canvas.getByRole("button", { name: "Copy" })
  await expect(button.innerText).toBe("Copy")
  await fireEvent.click(button)
  // await expect(button.innerText).toBe("Copied!")
}
