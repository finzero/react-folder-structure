import Banner from "../components/Banner/Banner";
import ProductList from "../components/Product/ProductList";
import shoes from '../json/shoes.json'
import banner from '../json/banner.json';

const Home = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column">
        <Banner banners={banner} />
        <ProductList products={shoes} />
      </div>
    </div>
  )
}

export default Home