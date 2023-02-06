import { useState } from 'react'
import ProductLayout from '../layout/productLayout'

const ProductContainer = ({ res }) => {
  const { wishlisted, name, options, offers, badges, related } = res || {}
  const [selected, setSelected] = useState(options && options[0])
  const varients = options && options.map((each) => each.varient)
  const changeVarient = (index) => {
    setSelected(options[index])
  }
  return (
    <ProductLayout
      wishlisted={wishlisted}
      name={name}
      offers={offers}
      badges={badges}
      related={related}
      product={selected}
      varients={varients}
      changeVarient={changeVarient}
    />
  )
}

export default ProductContainer
