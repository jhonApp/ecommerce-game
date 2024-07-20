import { render, screen } from '@testing-library/react'

import JHcomponent from '.'

describe('<JHcomponent />', () => {
  it('should render the heading', () => {
    const { container } = render(<JHcomponent />)

    expect(screen.getByRole('heading', { name: /JHcomponent/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})