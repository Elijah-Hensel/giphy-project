import React from "react"
import { render } from "@testing-library/react"
import NoGifs from "../../components/NoGifs"

describe("NoGifs component", () => {
  it("renders properly with text describing lack of gifs", () => {
    const { container } = render(<NoGifs />)
    expect(container.innerHTML).toMatch("There are no GIF's to display...yet...")
  })
})
