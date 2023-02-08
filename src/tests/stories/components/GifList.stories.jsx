import React from "react"
import { within } from "@storybook/testing-library"
import { expect } from "@storybook/jest"
import GifList from "../../../components/GifList"

export default {
  title: "Example/GifList",
  component: GifList,
  argTypes: {
    gifData: { data: [], pagination: null },
  },
}

const Template = (args) => <GifList {...args} />

export const Empty = Template.bind({})
Empty.args = {
  gifData: {
    data: [],
    pagination: null,
  },
}

Empty.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const noGifsSpan = canvas.getByText(`There are no GIF's do display...yet...`)

  expect(noGifsSpan).toBeDefined()
}

export const DisplayGifs = Template.bind({})
DisplayGifs.args = {
  gifData: {
    data: [
      {
        images: {
          original_mp4: {
            height: "314",
            width: "480",
            mp4_size: "138345",
            mp4: "https://media4.giphy.com/media/q4FkbKFTwXV94bvxjI/giphy.mp4?cid=4df4bd0a1fe32rdhokmisinyt1rk3ugr7j2o4bbxyn7cuflz&rid=giphy.mp4&ct=g",
          },
        },
      },
      {
        images: {
          original_mp4: {
            height: "314",
            width: "480",
            mp4_size: "138345",
            mp4: "https://media4.giphy.com/media/omfCYA8nnlZSgPTMz8/giphy.mp4?cid=4df4bd0a42orxb9jbo6w5hsnq6owqbo2iznq0ktxozum550i&rid=giphy.mp4&ct=g",
          },
        },
      },
      {
        images: {
          original_mp4: {
            height: "314",
            width: "480",
            mp4_size: "138345",
            mp4: "https://media4.giphy.com/media/q4FkbKFTwXV94bvxjI/giphy.mp4?cid=4df4bd0a42orxb9jbo6w5hsnq6owqbo2iznq0ktxozum550i&rid=giphy.mp4&ct=g",
          },
        },
      },
    ],
    pagination: {
      total_count: 4913,
      count: 3,
      offset: 0,
    },
  },
}

DisplayGifs.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const gifList = []
  const gifData = canvas.getAllByRole("listitem")
  console.log(gifData)
  gifList.push(gifData)

  await expect(gifData.length).toEqual(3)
}
