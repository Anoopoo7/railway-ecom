import { Nav, NavItem, NavLink } from 'reactstrap'

const TabSwitcher = ({ activeTab, setActiveTab }) => {
  return (
    <div className="mt-5">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={`pointer ${activeTab === 1 ? 'active' : ''}`}
            onClick={() => setActiveTab(1)}
          >
            Most trending
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={`pointer ${activeTab === 2 ? 'active' : ''}`}
            onClick={() => setActiveTab(2)}
          >
            Fasionable
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

export default TabSwitcher
