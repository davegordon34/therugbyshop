import { CartState } from "../context/Context";
import Filters from "../ProductPage/Filters";
import SingleProduct from "../ProductPage/SingleProduct";
import "../../styles/Header.scss";
import Header from '../Header/Header';

const Product = () => {
  const {
    state: { products },
    productState: { byStock, byFastDelivery, byRating, searchQuery, sort, },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
       );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <>
      <Header />
       
      <div className="home">
        <Filters />
        <div className="productContainer">
          {transformProducts().map((prod) => (
            <SingleProduct prod={prod} key={prod.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;