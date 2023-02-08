import { useEffect, useState } from 'react'
import { Button, Card, CardBody, UncontrolledCollapse } from 'reactstrap'

const FilterGroup = () => {
  return (
    <>
      <Card style={{ border: 'none' }} className="mt-3">
        <Button id="toggler" className="text-dark mb-1">
          <div className="f-between">
            <b>Filter By price</b>
            <img src="https://img.icons8.com/material/24/null/expand-arrow--v1.png" />
          </div>
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
        <Button id="toggler" className="text-dark mb-1">
          <div className="f-between">
            <b>Filter By Brand</b>
            <img src="https://img.icons8.com/material/24/null/expand-arrow--v1.png" />
          </div>
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
