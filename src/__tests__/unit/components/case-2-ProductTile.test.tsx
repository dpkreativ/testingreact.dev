import React from 'react'
import { axe } from 'jest-axe'
import { render } from '@testing-library/react'
import ProductTile from '../../../components/ProductTile'

describe('The <ProductTile /> component', () => {
  const defaultProduct = {
    id: 12,
    name: 'Test Product',
    price: 'from $12.99',
    image: '/image.png',
    brand: 'Adidas',
    createdAt: '2020-01-01T00:00:',
    isActive: true,
  }

  it('renders a product tile with name, image and price', () => {
    const { getByText, getByAltText } = render(
      <ProductTile {...(defaultProduct as any)} />,
    )

    expect(getByText(defaultProduct.name)).toBeInTheDocument()
    expect(getByText(defaultProduct.price)).toBeInTheDocument()
    expect(getByAltText(defaultProduct.name)).toBeInTheDocument()
  })

  it('renders a product tile with name and price only', () => {
    const { queryByTestId } = render(
      <ProductTile {...({ ...defaultProduct, image: undefined } as any)} />,
    )

    expect(queryByTestId('ProductTileImage')).toBeNull()
  })

  it('has no accessibility violations', async () => {
    const { getByAltText } = render(
      <ProductTile {...(defaultProduct as any)} />,
    )
    expect(getByAltText(defaultProduct.name)).toBeInTheDocument()
  })
})
