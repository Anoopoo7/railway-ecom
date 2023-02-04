import Breadcrumbs from '@/widgets/common/breadcrumbs'
import HorizondalStaticBanner from '@/widgets/common/horizondalStaticbanner'
import { Col, Container, Row } from 'reactstrap'
import FilterGroup from '../component/filterGroups'
import PlpComponent from '../component/plpComponent'

const PlpLayout = () => {
  return (
    <Container>
      <Breadcrumbs />
      <HorizondalStaticBanner type="single" />
      <Row className="mt-5">
        <Col md="3">
          <FilterGroup />
        </Col>
        <Col md="9">
          <PlpComponent />
        </Col>
      </Row>
    </Container>
  )
}

export default PlpLayout
