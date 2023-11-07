import React from 'react'
class Message extends React.Component{
    render(){
        return <div>
            <h1>Message Component</h1>
        </div>
    }
}

function Double(){
    return <div>
        <h1>fuction and class in one file</h1>
    </div>
}
export {Message,Double}