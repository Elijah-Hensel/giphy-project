import React, { useState } from "react"
import { within, userEvent } from "@storybook/testing-library"
import { expect } from "@storybook/jest"
import SearchForm from "../../components/SearchForm"

export default {
  title: "Example/SearchForm",
  component: SearchForm,
}

const ContextWrapper = ({ args }) => {
  const [gifs, setGifs] = useState({})

  return (
    <div>
      <SearchForm gifs={gifs} setGifs={setGifs} {...args} />
    </div>
  )
}

const Template = (args) => <ContextWrapper args={args} />

export const Empty = Template.bind({})

Empty.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const input = canvas.getByPlaceholderText(
    `What kind of GIF would you like to see..?`
  )

  expect(input.value).toBe("")
}

export const OnChange = Template.bind({})

OnChange.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const input = canvas.getByPlaceholderText(
    `What kind of GIF would you like to see..?`
  )
  userEvent.type(input, "funny")

  expect(input.value).toBe("funny")
}
