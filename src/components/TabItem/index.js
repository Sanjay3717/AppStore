// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveStateId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    updateActiveStateId(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li>
      <button
        className={`button-style ${activeTabClassName}`}
        onClick={onClickTabItem}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
