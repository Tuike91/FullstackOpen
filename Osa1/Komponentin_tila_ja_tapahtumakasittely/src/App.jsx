import { useState } from 'react'


const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)
  const [allClicks, setAll] = useState([])

  const increaseByOne = () =>  {
    setAll(allClicks.concat('P'))
    setCounter (counter+1)
  }
  const decreaseByOne = () => {
    setAll(allClicks.concat('M'))
    setCounter(counter -1)
  }
  const setToZero = () => {
    setAll(allClicks.concat('Z'))
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
      <History allClicks={allClicks} />
      
    </div>
  )
}

export default App