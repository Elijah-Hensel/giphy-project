import React from "react"
import { BrowserRouter } from "react-router-dom"
import { within, userEvent } from "@storybook/testing-library"
import { expect } from "@storybook/jest"
import Root from "../../../pages/Root"

const ROUTE = 'http://localhost:6006'

export default {
  title: "Example/Root",
  component: Root,
}

const BrowserWrapper = ({ args }) => (
  <BrowserRouter>
    <Root {...args} />
  </BrowserRouter>
)

const Template = (args) => <BrowserWrapper args={args} />

export const Empty = Template.bind({})

// Empty.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement)
//   const input = canvas.getByPlaceholderText(
//     `What kind of GIF would you like to see..?`
//   )

//   expect(input.value).toBe("")
// }

// export const OnChange = Template.bind({})

// OnChange.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement)
//   const input = canvas.getByPlaceholderText(
//     `What kind of GIF would you like to see..?`
//   )
//   const searchButton = canvas.getByRole("button", { name: "Search!" })
//   userEvent.type(input, "funny")
//   userEvent.click(searchButton)

//   expect(input.value).toBe("funny")
//   expect(window.location.href).toBe(`${ROUTE}/?q=funny`)
// }
