import { CollectionIcon } from "../CollectonIcon/CollectionIcon";
import styles from "./CollectionsIconList.module.css";

export const CollectionIconsList = () => {
  const iconstList = [
    {
      title: "Camisetas",
      iconUrl: "/img/Shirt.png",
    },
    {
      title: "Calças",
      iconUrl: "/img/Pants.png",
    },
    {
      title: "Bonés",
      iconUrl: "/img/Cap.png",
    },
    {
      title: "Headphone",
      iconUrl: "/img/Headphone.png",
    },
    {
      title: "Tênis",
      iconUrl: "/img/Shoe.png",
    },
  ];

  return (
    <div className={styles.ContainerCollectionIconsList}>
      {iconstList.map((icon) => (
        <CollectionIcon
          iconUrl={icon.iconUrl}
          title={icon.title}
          key={icon.title}
        />
      ))}
    </div>
  );
};
