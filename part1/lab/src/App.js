import { useState } from "react"

const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return (
    <div>
      <p>
        Fuck {props.name} {props.i} times
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = (props) => {
  const name = 'jiajia'
  // useState returns an array as result. 
  const [counter, setCounter] = useState(0)
  const plus = () => {
    setCounter(counter + 1)
    console.log('clicked')
  }
  const setToZero = () => setCounter(0)
  const minus = () => {
    setCounter(counter - 1)
  }
  setTimeout(() => setCounter(counter + 1), 1000)

  return (
    <div>
      <Hello name={name} i={counter} age={26} />
      <Display counter={counter} />
      <Button onClick={plus} text={'plus'} />
      <Button onClick={setToZero} text={'setToZero'} />
      <Button onClick={minus} text={'minus'} />
    </div>
  )
}

export default App