import React from 'react'
import Navbar from './component/navbar'
import Product from './component/product'
class App extends React.Component{
    render(){
        return <div>
            <Navbar/>
            <Product/>
        </div>
    }
}
export default App;