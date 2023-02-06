import { Nav, NavItem, NavLink } from 'reactstrap'

const TabSwitcher = ({ tabDetails, activeTab, setActiveTab }) => {
  return (
    <div className="mt-5">
      <Nav tabs>
        {tabDetails?.map((title, index) => (
          <NavItem key={index}>
            <NavLink
              className={`pointer ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {title}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </div>
  )
}

export default TabSwitcher
