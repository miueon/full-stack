import React from "react";

const Content = ({ parts }) => {
    const total = parts.reduce((prv, cv) => prv + cv.exercises, 0)
    return (
        <div>
            {parts.map(content =>
                <p key={content.id}>{content.name} {content.exercises}</p>
            )}
            <b>total of {total} exercises</b>
        </div>
    )
}

export default Content