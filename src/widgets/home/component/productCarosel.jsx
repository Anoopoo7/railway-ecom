import ProductCard from '@/widgets/product/componet/productCard'

const ProductCarosal = () => {
  return (
    <div className="carosel-outer mt-5 mb-5">
      <div className="f-between">
        <h6>Most selling</h6>
        <span className='f-center pointer'>
          view all
          <img src="https://img.icons8.com/material-outlined/24/null/forward.png" />
        </span>
      </div>
      <div className="carosel-innner mt-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default ProductCarosal
