import React from "react"
import { render } from "@testing-library/react"
import Gif from "../../components/Gif"

describe("Gif component", () => {
  const emptyGifData = {}
  const gifData = {
    id: "1",
    images: {
      original_mp4: { mp4: "url1" },
    },
  }

  it("renders nothing when gifData is empty", async () => {
    render(<Gif gif={emptyGifData} />)
    expect(document.querySelectorAll("li").length).toEqual(0)
  })
  it("renders one when gif is present", async () => {
    const { getAllByRole, getByRole } = render(<Gif gif={gifData} />)
    const listItem = getAllByRole("listitem")
    const button = getByRole("button")
    expect(listItem.length).toEqual(1)
    expect(button).toBeDefined()
  })
})
