import React, { useState } from 'react'
import PropTypes from 'prop-types'


function Card(props) {

  const [deger, setDeger] = useState("dünya düzdür")
  
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ props.title }</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{ props.stitle }</h6>
          <p className="card-text">{ props.text }</p>
          <a href="#" className="card-link">Card link = { deger } </a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  stitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

Card.defaultProps = {
  title:"Yok",
  stitle: "Yok",
  text:"Yok",
}

export default Card;