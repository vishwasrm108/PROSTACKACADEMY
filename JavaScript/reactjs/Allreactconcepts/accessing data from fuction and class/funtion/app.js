import React from 'react'
function App(){
    let company="Amazon"
    let emp={
        eid:101,
        ename:"vishwas",
        esalary:45000,
        eloc:["bangalore","kolar"]
    }
    return <div>
        <h1>reading Data from funtion</h1>
        <h2>{10+20}</h2>
        <h3>{company}</h3>
        <h4>{JSON.stringify(emp)}</h4>
        <h4>{emp.eid}</h4>
        <h4>{emp.eloc}</h4>
    </div>
}
export default App