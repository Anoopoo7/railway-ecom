import CategoryCard from '@widgets/category/component/categorycard'
import ProductCard from '@widgets/product/componet/productCard'
import { useRouter } from 'next/router'

const ScrollCarosal = ({ type, hideTitle }) => {
  const router = useRouter()
  return (
    <div className={`carosel-outer ${hideTitle ? '' : 'mt-5 mb-5'}`}>
      {!hideTitle && (
        <div className="f-between">
          <h6>Most selling</h6>
          <span className="f-center pointer" onClick={()=>router.push("/list/product-list")}>
            view all
            <img src="https://img.icons8.com/material-outlined/24/null/forward.png" />
          </span>
        </div>
      )}

      <div className="carosel-innner mt-4">
        {type === 'product' ? (
          <>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </>
        ) : (
          <>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </>
        )}
      </div>
    </div>
  )
}

export default ScrollCarosal
