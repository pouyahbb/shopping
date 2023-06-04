import React from "react";
import MenuItem from "./../menu-item/menu-item.component";
import "./directory.styles.scss";

const Directory = () => {
  const [sections] = React.useState([
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkURL: "/hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkURL: "/jackets",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/woments.png",
      id: 3,
      linkURL: "/womens",
    },
    {
      title: "mens",
      size: "larg",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      id: 4,
      linkURL: "mens",
    },
    {
      size: "larg",
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 5,
      linkURL: "sneakers",
    },
  ]);

  return (
    <div className="directory-item">
      {sections.map(({ size, id, title, imageUrl, linkURL }) => (
        <MenuItem
          size={size}
          title={title}
          imageUrl={imageUrl}
          linkURL={linkURL}
          key={id}
        />
      ))}
    </div>
  );
};

export default Directory;
