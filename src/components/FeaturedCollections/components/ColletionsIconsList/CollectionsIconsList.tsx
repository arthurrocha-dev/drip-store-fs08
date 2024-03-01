import { CollectionIcon } from '../CollectonIcon/CollectionIcon'
import styles from './CollectionsIconList.module.css'

export const CollectionIconsList = () => {

    const iconstList = [
        {
            title: 'Camisetas',
            iconUrl: '/src/components/FeaturedCollections/components/ColletionsIconsList/img/Shirt.png'
        },
        {
            title: 'Calças',
            iconUrl: '/src/components/FeaturedCollections/components/ColletionsIconsList/img/Pants.png'
        },
        {
            title: 'Bonés',
            iconUrl: '/src/components/FeaturedCollections/components/ColletionsIconsList/img/cap.png'
        },
        {
            title: 'Headphone',
            iconUrl: '/src/components/FeaturedCollections/components/ColletionsIconsList/img/Headphone.png'
        },
        {
            title: 'Tênis',
            iconUrl: '/src/components/FeaturedCollections/components/ColletionsIconsList/img/Shoe.png'
        },
    ]

    return(
        <div className={styles.ContainerCollectionIconsList}>
            {iconstList.map((icon) => (
                <CollectionIcon iconUrl={icon.iconUrl} title={icon.title}/>
            ))}
        </div>
    )
}
