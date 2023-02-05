import { useRouter } from 'next/router'
import { Button, Modal } from 'reactstrap'

const ModalView = ({ modal, toggle }) => {
  const router = useRouter()
  return (
    <>
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <h4 className="p-3 pb-1">Item successfully added to Cart</h4>
          <Button className="m-3 mb-1" onClick={toggle}>
            continue shopping
          </Button>
          <Button className="m-3 mt-1" onClick={()=>router.push("/cart")}>
            View Cart
          </Button>
        </Modal>
      </div>
    </>
  )
}

export default ModalView
