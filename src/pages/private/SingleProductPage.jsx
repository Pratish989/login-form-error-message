import { useParams } from "react-router-dom";
import products from "../data.js";
const SingleProductPage = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name } = product;

  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>{name}</h5>
    </section>
  );
};

export default SingleProductPage;
