// Lifecycle Methods : 
//           Mounting   (creating comp n showing in DOM)
//           Updating   (update states n rerender DOM)
//           Unmounting (remove comp from DOM)

import React, { Component } from 'react'

class LifeCycleMethod extends Component {

    constructor() {
        console.log("Constructor running");
        super()
        this.state = {
            name: "Stark"
        }
    }

    componentDidMount() {
        console.log("ComponentDidMount running");
    }

    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate running");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate running");
    }


    render() {
        console.log("Render Method running");
        return (
            <div>
                <h2 className='text-center text-2xl underline'>Component LifeCycle</h2>
                <h4>Order of running methods</h4>
                <p>Constructor ---- Render ---- ComponentDidMount ---- ComponentDidUpdate</p>
                <p>ComponentDidMount updated in DOM.</p>
                <p>The componentDidMount() method is called after the component is rendered.</p>

                <h5>Name : {this.state.name}</h5>
                <button onClick={()=>{this.setState({name:"Tony"})}} className='bg-blue-600 p-2 rounded-xl'>Update name</button>
            </div>
        )
    }
}

export default LifeCycleMethod