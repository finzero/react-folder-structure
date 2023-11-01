import ProductList from "../components/Product/ProductList";
import shoes from '../json/shoes.json'

const Home = () => {
  return (
    <div className="d-flex justify-content-center">
      <ProductList products={shoes} />
    </div>
  )
}

export default Home