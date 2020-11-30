import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes",
    price: "$5",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/oyhemtbkghuegy9gpo0i/joyride-run-flyknit-running-shoe-sqfqGQ.jpg",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple macbook",
    price: "$10",
    image:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16touch-space-select-201911_GEO_MY?wid=1808&hei=1686&fmt=jpeg&qlt=80&.v=1573242759842",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
