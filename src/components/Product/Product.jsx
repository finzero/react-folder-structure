import './Product.css';

/* eslint react/prop-types: 0 */
const Product = ({ img, name, price }) => {
  return (
    <div className="wrapper">
      <div className="product-img">
        <img src={img} height="240" width="240" alt={name} />
      </div>
      <div className="product-info">
        <div className="product-text">
          <div className='h6'><b>{name}</b></div>
        </div>
        <div className="product-price-btn">
          <span>Rp {price}</span>
          <button type="button" className='btn btn-primary'>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product