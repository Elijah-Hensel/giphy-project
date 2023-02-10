import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import PageControllers from "../../components/PageControllers"

const props = {
  pageRef: {
    page: 1,
    arrayStartPointer: 0,
    arrayEndPointer: 3,
  },
  setPageRef: jest.fn((state) => state),
  gifs: {
    data: [],
    currentGifs: [],
  },
}

xdescribe("PageControllers component", () => {
  it("renders increment button when not on last page", async () => {})

  it("renders both buttons when not on last page nor on first", async () => {})

  it("renders decrement button when not on first page", async () => {})
})

xdescribe("Increment Button", () => {
  it("When clicked, page ref increments properly", async () => {})

  it("When clicked, currentGifs is updated", async () => {})
})

xdescribe("Decrement Button", () => {
  it("When clicked, page ref decrements properly", async () => {})

  it("When clicked, currentGifs is updated", async () => {})
})
