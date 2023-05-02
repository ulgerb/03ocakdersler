import React, { Component } from 'react'

class ClassCom extends Component {

   state = {
      count:1,
   }

   increase = ()=>{
      this.setState({
         count: this.state.count +10
      })
   } 

   decrease = ()=>{
      this.setState({
         count: this.state.count -5
      })
   }
  render() {
    return (
      <div style={{background:"lightpink", width:"50%", height:"90vh", border:"2px solid black", padding:"30px"}}>
         <h2>Class Component</h2>
         <h3>Değer: {this.state.count}</h3>

         <button onClick={this.increase}>Arttır</button>
         <button onClick={this.decrease}>Azalt</button>
      </div>
    )
  }
}



export default ClassCom;