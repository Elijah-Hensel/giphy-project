import React from "react"
import { render } from "@testing-library/react"
import GifList from "../../components/GifList"

describe("GifList component", () => {
  it("renders nothing when gifData is empty", () => {
    render(<GifList gifData={{ data: [], currentGifs: [] }} />)
    expect(document.querySelectorAll("video").length).toEqual(0)
  })

  it("renders a video for each item in gifData", () => {
    const gifData = {
      currentGifs: [
        { id: "1", images: { original_mp4: { mp4: "url1" } } },
        { id: "2", images: { original_mp4: { mp4: "url2" } } },
      ],
    }

    render(<GifList gifData={gifData} />)
    const videos = document.querySelectorAll("video")
    expect(videos.length).toEqual(2)
  })
})
