import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course'

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
//  let courseX = courses.map(course => <Course course={course} />)
//  console.log("This is from index.js",courseX.part)
//   return (
//     <div>
//       {courseX}
//     </div>
//   )}

let courseX = courses.map(course => <Course key ={course.id} course = {course} />)
console.log("This is from index",courseX)
    return (
        <div>
            {/* exercises 2.1, 2.2 and 2.3 */}
            {/* <Course course = {course} /> */}
            {/* exercise 2.4 */}
            <h1>
                Web development curriculum
            </h1>
            {courseX}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))