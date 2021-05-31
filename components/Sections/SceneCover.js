import styles from '../../styles/SceneCover.module.css'
import { CanvasObject, AssetNinja } from '../Canvas/CanvasObject'

export const SceneCover = (params) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <p>I love building website integrating 3D object or model to feel the amazing virtual world</p>

                    </div>
                </div>
                <div className={styles.asset}>
                    <AssetNinja/> 
                </div>
            </div>
        </div>
    )
}
