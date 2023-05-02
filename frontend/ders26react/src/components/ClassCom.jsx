import React, { Component } from 'react'

export default class ClassCom extends Component {

   state = {
      sayi1:0,
      sayi2:5,
   }

   increase = ()=>{
      this.setState({
         sayi2: this.state.sayi2-1,
      })
   }

   componentDidMount(){
      console.log("componentDidMount çalıştı");
   }

   componentDidUpdate(prevProps, prevState){
      if (this.state.sayi1 !=  prevState.sayi1){
         
         console.log("ÖNCEKİ SAYI:",prevState.sayi1, "ŞİMDİKİ SAYI:",this.state.sayi1);
      }
   }

   
  render() {
    return (
      <div>
          <h2><u>Class Component</u></h2>

          <h4>Sayı 1: {this.state.sayi1}</h4>
          <h4>Sayı 2: {this.state.sayi2}</h4>
          <button onClick={()=>{this.setState({sayi1:this.state.sayi1+1})}}>SAYI 1</button>
          <button onClick={this.increase}>SAYI 2</button>
          
      </div>
    )
  }
}
