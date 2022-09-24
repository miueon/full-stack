import Course from "./components/Course"
// const Header = (props) => {
//   return (
//     <h1>{props.course}</h1>
//   )
// }

// const Part = (props) => {
//   return (
//     <p>{props.part} {props.exercises}</p>
//   )
// }

// const Content = (props) => {
//   const a = props.parts.map(p => <Part part={p.name} exercises={p.exercises} />)
//   return (
//     <div>
//       {a}
//     </div>
//   )
// }

// const Total = (props) => {
//   const total = props.parts.map(p => p.exercises).reduce((prev, curv) => prev + curv, 0)
//   return (
//     <p>Number of exercises {total}</p>
//   )
// }

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  
  return <Course course={course} />
}

export default App