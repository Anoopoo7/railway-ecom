import { Card } from 'reactstrap'

const Quantity = ({ quantity, datakey }) => {
  let qty = []
  for (let p = 1; p <= quantity; p++) {
    qty.push(p)
  }
  return (
    <>
      <Card className="mb-1">
        <select className="btn p-2" name="" id="">
          {qty.map((each) => (
            <option key={qty} value={qty}>
              {each}
            </option>
          ))}
        </select>
      </Card>
    </>
  )
}

export default Quantity
