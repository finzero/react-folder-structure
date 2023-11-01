import Product from './Product'

/* eslint react/prop-types: 0 */
const ProductList = ({ products }) => {
  return (
    <div>
      {
        products.map((product) => <Product key={product.id} img={product.imageURL} name={product.name} price={product.price} />)
      }
    </div>
  )
}

export default ProductList