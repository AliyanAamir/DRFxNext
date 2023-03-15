import Link from 'next/link';
import products from '../data/products.json'

export default function Products() {
  return (
    <div className='container text-center mt-5
    '>
      <div className='row'>
      {products.map((product) => (
        
        <div key={product.id} className="col-sm-3 mb-5" >
          <Link href={`/products/${product.id}`} style={{textDecorationLine:'none',color:'black'}} >
          
              <h2 >{product.name}</h2>
              <img src={product.image} alt={product.name} style={{height:'300px'}} />
              <p>{product.description}</p>
              <span>{product.price}</span>
            
          </Link>
        </div>
      ))}
      </div>
    </div>
  );
}