import React from "react";

const Content = ({ parts }) => {
    console.log(parts)
    return (
        <div>
            {parts.map(content =>
                <p key={content.id}>{content.name} {content.exercises}</p>
            )}
        </div>
    )
}

export default Content