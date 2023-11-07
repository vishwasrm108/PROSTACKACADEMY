import React from 'react'
class App extends React.Component{
    company="Google"
    emp={
        eid:101,
        ename:"vishwas",
        esalary:1500000,
        eloc:["bangalore","kolar"]
    }
    render(){
        return <div>
            <h1>reading Data from funtion</h1>
            <h2>{this.company}</h2>
            <h3>{JSON.stringify(this.emp)}</h3>
            <h4>{this.emp.eid}</h4>
            <h4>{this.emp.eloc[1]}</h4>
        </div>
    }
}
export default App;