import React from 'react'

function User(props) {

  
  
  return (
    <div>
      <div className="card" style={{background:props.color}}>
        <div className="card-header">
          { props.fname }
        </div>
        <div className="card-body">
          <h5 className="card-title">{ props.username }</h5>
          <p className="card-text">{props.color}</p>
          <input type="text" name="" id="" onChange={props.colorChange.bind(this,props.id)} placeholder='Renk Değiştir' className="form-control" />
        </div>
      </div>
    </div>
  )
}

export default User