import { Button, Container } from 'reactstrap'

const Congrats = () => {
  return (
    <div className="mt-4 congrats">
      <Container>
        <h4 className="text-center">Hoory.! Order placed</h4>
        <p className="mt-3 p-3 text-center">
          congrats Abdulla,
          <br /> your order successfully recieved here and we will process it
          very soon
        </p>
        <div className="f-center">
          <Button className="m-1">
            <img src="https://img.icons8.com/ios-glyphs/24/FFFFFF/share--v1.png" />
          </Button>
          <Button className="m-1">
            <img src="https://img.icons8.com/ios-glyphs/24/FFFFFF/downloads.png" />
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default Congrats
