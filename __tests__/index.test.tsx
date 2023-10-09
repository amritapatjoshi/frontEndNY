import { render, screen } from "@testing-library/react"
import UseEnv from "@/app/examples/use-env/page"

describe("Home", () => {
  it("renders a heading", () => {
    render(<UseEnv />)
    
    const pageName = screen.getByText(/environment variable/i)
    expect(pageName).toBeInTheDocument()
  })
})
