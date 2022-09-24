import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({course}) => {
    const {id, name, parts} = course
    console.log("Course", name, parts)
    return (
        <div>
            <Header title={name} />
            <Content parts={parts} />
        </div>
    )
}

export default Course