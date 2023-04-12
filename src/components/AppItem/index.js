// Write your code here
import './index.css'

const AppItem = props => {
  console.log('Hello')
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-item-container">
      <img src={imageUrl} alt={appName} className="app-item-image" />

      <p>{appName}</p>
    </li>
  )
}

export default AppItem
