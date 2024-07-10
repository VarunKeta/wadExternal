import React from 'react'
import {useLocation} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function Product() {
  let navigate=useNavigate()
    let {state}=useLocation()
    let id=state.id
    function prevProduct(id,products){
      if(id>=0){
      let state1={id,products}
      
      navigate(`/product/${products[id].title}`,{state:state1})
      }
    }
    function nextProduct(id,products){
      if(id<products.length){
      let state1={id,products}

      navigate(`/product/${products[id].title}`,{state:state1})
      }
    }
  return (
    <div className='container my-5'>
        <div className='d-flex'>
            <img src={state.products[id].image} className='w-25' alt='Not Found'/>
            <div className='mx-3'>
                <p className='lead'><b>Title:</b>{state.products[id].title}</p>
                <p className='lead'><b>Price:</b>{state.products[id].price}</p>
                <p className='lead'><b>Description:</b>{state.products[id].description}</p>
                <p className='lead'><b>Rating:</b>{state.products[id].rating.rate}</p>
            </div>
        </div>
        <div className='d-flex justify-content-between mt-5 align-items-end'>
          <button onClick={()=>prevProduct(id-1,state.products)} className='btn btn-light text-danger '>Previous</button>
          <button onClick={()=>nextProduct(id+1,state.products)} className='btn btn-light text-success'>Next</button>

        </div>
    </div>
    
  )
}

export default Product