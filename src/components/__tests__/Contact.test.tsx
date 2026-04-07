import {render, screen} from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("Contact component rendered" , () => {
    render(<Contact />)

    const heading = screen.getAllByRole("heading")

    expect(heading).toBeInTheDocument()

})