import "./Products.css";
import { useEffect, useState } from "react";
import { productsList} from "../../data";
import { useTranslation } from "react-i18next";

import useData from "../../data";

const Products = () => {
  const [activeTabType, setActiveTabType] = useState("all");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState(
    productsList
  );
  const { t } = useTranslation();
  const { tabs } = useData();

  const filterProducts = (type) => {
    setCurrentPage(1);
    setActiveTabType(type);
    if (type === "all") {
      setFilteredProducts(productsList);
    } else {
      const filteredProducts = productsList.filter(
        (product) => product.type === type
      );
      setFilteredProducts(filteredProducts);
    }
  };

  const loadProducts = () => {
    if (currentPage > filteredProducts.length / 6) return;
    setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    setProducts(filteredProducts.slice(0, 6 * currentPage));
  }, [filteredProducts, currentPage]);

  return (
    <section id="products" className="products container ">
      <h2 className="title">{t('products.title')}</h2>
      <div className="products__navigation">
        {tabs.map((tab) => {
          return (
            <div className="tab" key={tab.id}>
              <input
                type="radio"
                id={tab.id}
                defaultChecked={tab.type === activeTabType} // assuming activeTabId is the ID of the currently active tab
                name="product-navigation"
              />
              <label
                htmlFor={tab.id}
                onClick={() => {
                  filterProducts(tab.type);
                }}
              >
                {tab.name}
              </label>
            </div>
          );
        })}
      </div>
      <div className="products-grid">
        {products.map((product) => {
          return (
            <article className="product" key={product.id}>
              <img loading="lazy" src={product.img} alt="product" />
            </article>
          );
        })}
      </div>
      {products.length === 0 && (
        <div className="no-products">
          <h3>Hech qanday mahsulot topilmadi</h3>
        </div>
      )}
      {products.length !== filteredProducts.length && (
        <button className="btn-load" onClick={loadProducts}>
         {t('products.button')}
        </button>
      )}
    </section>
  );
};

export default Products;
