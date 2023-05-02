import React from 'react'

function Cart(props) {
  return (
    <>
      <div className="card">
         <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{ props.username }</h6>
            <p className="card-text">{props.text}</p>
            <a href="#?" className="card-link">Card link</a>
            <a href="#a" className="card-link">Another link</a>
         </div>
      </div>
    </>
  )
}

export default Cart