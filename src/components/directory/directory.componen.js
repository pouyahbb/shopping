import React from "react";
import MenuItem from "./../menu-item/menu-item.component";
import "./directory.styles.scss";

const Directory = () => {
  const [sections] = React.useState([
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/woments.png",
      id: 3,
    },
    {
      title: "mens",
      size: "larg",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      id: 4,
    },
    {
      size: "larg",
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 5,
    },
  ]);

  return (
    <div className="directory-item">
      {sections.map(({ size, id, title, imageUrl }) => (
        <MenuItem size={size} title={title} imageUrl={imageUrl} key={id} />
      ))}
    </div>
  );
};

export default Directory;
