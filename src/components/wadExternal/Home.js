import {useEffect,useState} from 'react'
import './Home.css'
import {useNavigate} from 'react-router-dom'


function Home() {
    let navigate=useNavigate()
    let [products,setproducts]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(products=>setproducts(products))
    },[])
    function func(products,id){
        let state1={id,products}
        navigate(`product/${products[id-1].title}`,{state:state1})
    }
  return (
    <div>
        <input type='text' className=' d-block mt-3 w-50 mx-auto ' placeholder='Search by Product Title'></input>
        <div className='container my-5'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                {
                    products.map(product=><div key={product.id}>
                        <div className='c'>
                            <img src={product.image} alt='Not Found' className='w-50 d-block mx-auto'/>
                            <p className='lead'><b>{product.title}</b></p>       
                            <button onClick={()=>func(products,product.id-1)} className='btn btn-secondary'>Details</button>                                           
                        </div>
                        </div>)
                }
        </div>
        </div>
    </div>
  )
}

export default Home