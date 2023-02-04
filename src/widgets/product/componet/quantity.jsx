import { Card } from 'reactstrap'

const Quantity = () => {
  return (
    <Card className='mb-1'>
      <select className='btn p-2' name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </Card>
  )
}

export default Quantity
