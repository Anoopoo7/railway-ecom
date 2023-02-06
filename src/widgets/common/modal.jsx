/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import { Button, Modal } from 'reactstrap'

const ModalView = ({ modal, toggle }) => {
  const router = useRouter()
  return (
    <>
      <div>
        <Modal isOpen={modal} style={{overflow:"hidden"}} toggle={toggle}>
          <img
            src="https://i.pinimg.com/originals/35/f3/23/35f323bc5b41dc4269001529e3ff1278.gif"
            alt=""
          />
          <div className="f-between p-2">
            <Button className="f-1 m-1" color='light' onClick={toggle}>
              continue shopping
            </Button>
            <Button className="f-1 m-1" color='success' onClick={() => router.push('/cart')}>
              View Cart
            </Button>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default ModalView
