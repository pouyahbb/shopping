import React from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

const ShopComponent = () => {
  const [collections] = React.useState(SHOP_DATA);

  return (
    <div className="shop-data">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <PreviewCollection key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

export default ShopComponent;
