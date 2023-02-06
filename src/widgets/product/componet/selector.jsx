import { Card } from 'reactstrap'

const Selector = ({ varients, varient, changeVarient }) => {
  return (
    <div className="carosel-outer">
      <div className="carosel-innner">
        {varients &&
          Array.isArray(varients) &&
          varients.map((each, i) => (
            <Card
              key={each}
              className={`p-3 m-2 ${
                varient === each ? 'selected' : ''
              } min-width f-center pointer`}
              onClick={() => changeVarient(i)}
            >
              {each}
            </Card>
          ))}
      </div>
    </div>
  )
}

export default Selector
