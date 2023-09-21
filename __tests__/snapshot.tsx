import { render } from '@testing-library/react'
import UseEnv from '@/app/examples/use-env/page'

it('renders UseEnv page unchanged', () => {
  const { container } = render(<UseEnv />)
  expect(container).toMatchSnapshot()
})
