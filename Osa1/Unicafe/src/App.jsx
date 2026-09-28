import { useState } from 'react'

const Header = ({name}) => {
  console.log("Header", {name})
  return (
  
  <h1>{name}</h1>
  )
  
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  /// ...

  return(
    <table>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value= {props.all} />
      <StatisticLine text="average" value = {props.average} />
      <StatisticLine text= "positive" value = {`${props.positive}%`}/>
    </table>
  )
}
const App = () => {
  // tallenna napit omaan tilaansa

  const title = 'Give feedback'
  const statistics = 'Statistics'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good-bad)/all
  const positive = (good/all*100).toFixed(2)



  if (all === 0) {
    return (
      <div>
        <Header name={title} />

        <Button text="Good" onClick={() => setGood(good + 1)} />
        <Button text="Neutral" onClick={() => setNeutral(neutral + 1)} />
        <Button text="Bad" onClick={() => setBad(bad + 1)} />
        
        <Header name={statistics} />

        <p>No feedback</p>
        </div>
    )
  }
  return (
    <div>
      
      <Header name={title} />

      <Button text="Good" onClick={() => setGood(good + 1)} />
      <Button text="Neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="Bad" onClick={() => setBad(bad + 1)} />
      
      <Header name={statistics} />

      <Statistics good = {good}
        neutral = {neutral}
        bad = {bad}
        all = {all}
        average = {average}
        positive = {positive}/>

    </div>
  )
}

export default App