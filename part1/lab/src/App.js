const Hello = (props) => {
  return (
    <div>
      <p>
        Fuck {props.name} {props.i} times
      </p>
    </div>
  )
}
const App = () => {
  const name = 'jiajia'
  
  return (
    <div>
      <Hello name={name} i = {10}/>
    </div>
  )
}

export default App