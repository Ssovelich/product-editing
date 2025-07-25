import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ListListings from "../../components/ListListings/ListListings";
import ListLocation from "../../components/ListLocation/ListLocation";
import ProductCard from "../../components/ProductCard/ProductCard";
// import styles from "./ProductPage.module.scss";

const ProductPage = () => {
  return (
    <>
      <Header />
      <main>
        <ProductCard />
        <ListLocation />
        <ListListings />
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
