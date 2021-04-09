//rce
import React, { Component } from "react";
import ProductItems from "./ProductItems";

export class ProductList extends Component {
  render() {
    return (
      <div>
        <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row">
            <ProductItems />
            <ProductItems />
            <ProductItems />
            <ProductItems />
          </div>
        </section>
      </div>
    );
  }
}

export default ProductList;
