import { Link } from "react-router-dom";
import products from "../data";
 
const ProductPage = () => {
  return (
   <section>
      <div className="products">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <h1>{product.name}</h1>
              <Link to={`/product/${product.id}`} style={{color : "red" }}>Click to know more</Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductPage;
