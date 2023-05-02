import React from 'react'

function Card(props) {
  return (
    <div className='col-4'>
        <div className="card">
           <img src={props.imgurl} className="card-img-top" alt={props.title}/>
              <div className="card-body">
                 <h5 className="card-title">{props.title}</h5>
                 <p className="card-text">{props.text}</p>
                 <a href="#" className="btn btn-primary">Ekle</a>
              </div>
        </div>
    </div>
  )
}

export default Card