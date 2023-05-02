import React from 'react'

function CardAdd(props) {
  return (
    <div className='row justify-content-center my-4'>
      <div className="col-6">
         <form onSubmit={props.cardAdd}>
            <input type="text" name="title" id="title" placeholder='Başlık' className="form-control my-2" />
            <textarea name="text" id="text" placeholder='İçerik' cols="30" rows="10" className="form-control my-2"></textarea>
            <button type="submit" className="btn btn-success">Kart Oluştur</button>
         </form>
      </div>
    </div>
  )
}

export default CardAdd