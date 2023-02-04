import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

const Breadcrumbs = () => {
  return (
    <Breadcrumb listTag="div" className='mt-5 mb-5'>
      <BreadcrumbItem href="#" tag="span">
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="#" tag="span">
        Library
      </BreadcrumbItem>
      <BreadcrumbItem href="#" tag="span">
        Data
      </BreadcrumbItem>
      <BreadcrumbItem active tag="span">
        Bootstrap
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export default Breadcrumbs
