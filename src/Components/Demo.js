import React from 'react'

const Demo = (props) => {
    console.log(props)
    return (
        <div>
            <h3>
               {props.num}
            </h3>
        </div>
    )
}

export default Demo;