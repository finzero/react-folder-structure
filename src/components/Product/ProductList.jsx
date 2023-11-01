import Product from './Product'

/* eslint react/prop-types: 0 */
const ProductList = ({ products }) => {
  return (
    <div className='d-flex flex-wrap justify-content-center'>
      {
        products.map((product) => <Product key={product.id} img={product.imageURL} name={product.name} price={product.price} />)
      }
    </div>
  )
}

export default ProductList