import React from 'react'

const menuCard = ({MenuData}) => {
  
  return (
    <>
    <section className='main-card--cointainer mx-lg-3 '>
    {MenuData.map((curElem)=>{
      const {id,category,name,description,price,image } =  curElem;
        return<>
        
      <div className='card-container ' key={id}>
       <div className='card'>
          <div className='card-body'> 
             <span className='card-number card-circle subtle'>{id}</span>
             <span className='card-author subtle '>{ category}</span>
             <h2 className='card-tital' >{name}</h2>
             <span className='card-description subtle card-text'>{description}</span>
             <div className='card-read'>Read</div>
          </div>
          <img src={image}  className='card-media' />
          <h2 className='card-tital subtle  pt-2'>{price}</h2>
          <span className='card-tag subtle'>Order Now</span>
       </div>
     </div>  
     
        </>
    })}
    </section>
    </>
  )
}

export default menuCard
