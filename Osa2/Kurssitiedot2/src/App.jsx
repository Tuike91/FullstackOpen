const Course = (props) => {
  console.log(props)
  // Course saa App-komponentilta yhden course-olion propseissa
  // course sisältää kurssin nimen, id:n ja parts-taulukon
  const { course } = props
  return (
    <div>
    {/* Välitetään kurssin nimi Header-komponentille */}
    <Header name={course.name} />
    {/* Välitetään kurssin parts-taulukko Content-komponentille */}
    <Content parts={course.parts} />
    {/* Sama parts-taulukko välitetään Total-komponentille */}
    <Total parts={course.parts} />

    </div>
  )
}

const Header = ({name}) => {
  console.log("Header", {name})
  // name tulee Course-komponentista:
  // <Header name={course.name} />
  return (
  
  <h1>{name}</h1>
  )
  
}

const Part = ({part}) => {
  // part on yksi yksittäinen olio parts-taulukosta
  // esim. { name: 'Routing', exercises: 3, id: 1 }
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = (props) => {
  console.log("Content", props)
  // pprops.parts tulee Course-komponentista:
  // <Content parts={course.parts} />
  return (
    <div>
      {/* Käydään parts-taulukon jokainen alkio läpi */}
      {props.parts.map(part =>
        // Jokaisesta part-oliosta luodaan oma Part-komponentti
        // part={part} välittää kyseisen olion Part-komponentille
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}



const Total = (props) => {
  console.log("Total", props)
  // props.parts on Course-komponentilta saatu parts-taulukko

  let sum = 0;
  for (let index = 0; index < props.parts.length; index++) {
    sum += props.parts[index].exercises;
  }
  console.log("Total sum", sum)
  return (
    <p>Number of exercises: {sum}</p>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <ul>
        
        {courses.map(course => //course muuttuja tulee tästä map-funktiosta, joka käy läpi courses-taulukon kurssi kerrallaan
          // Jokainen course-olio välitetään Course-komponentille
          // prop nimeltä "course"
          <Course key={course.id} course={course} />
        )}
      </ul>
    </div>
  )
}

export default App
