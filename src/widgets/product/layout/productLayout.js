import ModalView from '@/widgets/common/modal'
import Breadcrumbs from '@widgets/common/breadcrumbs'
import TabSwitcher from '@widgets/common/tabSwitcher'
import ScrollCarosal from '@widgets/home/component/scrollCarosal'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Col, Container, Row } from 'reactstrap'
import PDP from '../componet/pdp'
import ProductGalery from '../componet/productGalery'

const ProductLayout = ({
  wishlisted,
  name,
  offers,
  badges,
  related,
  product,
  varients,
  changeVarient,
}) => {
  const { varient, price, quantity, off, pictures, pkey } = product || {}
  return (
    <Container>
      <Breadcrumbs />
      <Row>
        <Col md="6">
          <ProductGalery pictures={pictures} wishlisted={wishlisted} />
        </Col>
        <Col md="6">
          <PDP
            addtoCart={() => toast.success('Item Successfully added to Cart!')}
            offers={offers}
            varient={varient}
            name={name}
            price={price}
            quantity={quantity}
            off={off}
            pkey={pkey}
            varients={varients}
            changeVarient={changeVarient}
          />
        </Col>
      </Row>
      <Row>
        <ScrollCarosal carosalDetails={related} />
      </Row>
      <ModalView />
    </Container>
  )
}

export default ProductLayout
