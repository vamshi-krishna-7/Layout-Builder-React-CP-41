// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowRightNavbar,
        onToggleShowLeftNavbar,
      } = value

      return (
        <div className="controller-section">
          <div>
            <h1>Layout</h1>
            <div className="input-container">
              <input
                id="content"
                type="checkbox"
                checked={showContent}
                onChange={onToggleShowContent}
              />
              <label htmlFor="content">Content</label>
            </div>
            <div className="input-container">
              <input
                id="left"
                type="checkbox"
                checked={showLeftNavbar}
                onChange={onToggleShowLeftNavbar}
              />
              <label htmlFor="left">Left Navbar</label>
            </div>
            <div className="input-container">
              <input
                id="right"
                type="checkbox"
                checked={showRightNavbar}
                onChange={onToggleShowRightNavbar}
              />
              <label htmlFor="right">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
