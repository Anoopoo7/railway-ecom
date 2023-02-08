import ProductCard from '@/widgets/product/componet/productCard'
import ProductCardMobile from '@widgets/product/componet/productCardMobile'

const PlpComponent = () => {
  return (
    <>
      <div className="f-center flex-wrap d-none d-md-flex">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className='d-block d-md-none' >
        <ProductCardMobile />
        <ProductCardMobile />
        <ProductCardMobile />
        <ProductCardMobile />
        <ProductCardMobile />
        <ProductCardMobile />
        <ProductCardMobile />
      </div>
    </>
  )
}

export default PlpComponent
