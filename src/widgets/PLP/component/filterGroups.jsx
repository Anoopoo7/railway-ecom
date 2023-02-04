import { useEffect, useState } from 'react'
import { Button, Card, CardBody, UncontrolledCollapse } from 'reactstrap'

const FilterGroup = () => {
  return (
    <>
      <Card style={{ border: 'none' }}>
        <Button id="toggler" className="btn-light mb-1 bg-dark text-light">
          Toggle
        </Button>
        <UncontrolledCollapse
          className="mb-3"
          toggler="#toggler"
          defaultOpen={true}
        >
          <Card className="p-3">
            <div className="f-between">
              logo
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" />
              </div>
            </div>
            <div className="f-between">
              logo
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" />
              </div>
            </div>
            <div className="f-between">
              logo
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" />
              </div>
            </div>
          </Card>
        </UncontrolledCollapse>
      </Card>
      <Card style={{ border: 'none' }}>
        <Button id="toggler" className="btn-light mb-1 bg-dark text-light">
          Toggle
        </Button>
        <UncontrolledCollapse
          className="mb-3"
          toggler="#toggler"
          defaultOpen={true}
        >
          <Card className="p-3">
            <div className="f-between">
              logo
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" />
              </div>
            </div>
            <div className="f-between">
              logo
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" />
              </div>
            </div>
            <div className="f-between">
              logo
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" />
              </div>
            </div>
          </Card>
        </UncontrolledCollapse>
      </Card>
    </>
  )
}

export default FilterGroup
