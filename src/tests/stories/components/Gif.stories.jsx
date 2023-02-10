import React from "react"
import { within, userEvent, waitFor } from "@storybook/testing-library"
import { expect } from "@storybook/jest"
import Gif from "../../../components/Gif"

export default {
  title: "Example/Gif",
  component: Gif,
}

const Template = (args) => <Gif {...args} />

export const GifData = Template.bind({})
GifData.args = {
  gif: {
    id: 1,
    title: "Example title",
    images: {
      original_mp4: {
        height: "314",
        width: "480",
        mp4_size: "138345",
        mp4: "https://media4.giphy.com/media/q4FkbKFTwXV94bvxjI/giphy.mp4?cid=4df4bd0a1fe32rdhokmisinyt1rk3ugr7j2o4bbxyn7cuflz&rid=giphy.mp4&ct=g",
      },
    },
  },
}

GifData.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const gifData = canvas.getAllByRole("listitem")
  expect(gifData.length).toEqual(1)
}

export const GifMouseOver = Template.bind({})

GifMouseOver.args = {
  gif: {
    id: 1,
    title: "Example title",
    images: {
      original_mp4: {
        height: "314",
        width: "480",
        mp4_size: "138345",
        mp4: "https://media4.giphy.com/media/q4FkbKFTwXV94bvxjI/giphy.mp4?cid=4df4bd0a1fe32rdhokmisinyt1rk3ugr7j2o4bbxyn7cuflz&rid=giphy.mp4&ct=g",
      },
    },
  },
}
GifMouseOver.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const button = await canvas.getByRole("button", { name: /copy/i })
  await expect(button.innerText).toBe("Copy")
}

