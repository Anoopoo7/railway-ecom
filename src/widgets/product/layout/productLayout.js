import ModalView from '@/widgets/common/modal'
import Breadcrumbs from '@widgets/common/breadcrumbs'
import TabSwitcher from '@widgets/common/tabSwitcher'
import ScrollCarosal from '@widgets/home/component/scrollCarosal'
import { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import PDP from '../componet/pdp'
import ProductGalery from '../componet/productGalery'

const ProductLayout = () => {
  const [activeTab, setActiveTab] = useState(1)
  const [modal, setModal] = useState(false)
  const addtoCart = () => {
    setModal((prev) => !prev)
  }
  return (
    <Container>
      <Breadcrumbs />
      <Row>
        <Col md="6">
          <ProductGalery />
        </Col>
        <Col md="6">
          <PDP addtoCart={addtoCart} />
        </Col>
      </Row>
      <Row>
        <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
        <ScrollCarosal type={'product'} hideTitle={'true'} />
      </Row>
      {modal ? (
        <ModalView modal={true} toggle={() => setModal((prev) => !prev)} />
      ) : (
        ''
      )}
    </Container>
  )
}

export default ProductLayout
