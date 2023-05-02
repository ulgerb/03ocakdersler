import React from 'react'

function Card(props) {
  return (
    <>
    
      <div className="card">
         <div className="card-header d-flex justify-content-between">
            <h2>{props.title}</h2>
              <span className="btn btn-danger" onClick={() => {props.cardsDelete(props.id)}}>x</span>
         </div>
         <div className="card-body">
            <p className="card-text">{props.text}</p>
         </div>
         <div className="card-footer">
            <div className="btn btn-success">Ekle</div>
         </div>
      </div>
    </>
  )
}

export default Card