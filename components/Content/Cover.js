import styles from '../../styles/Cover.module.css'
import Typical from 'react-typical'
import { typewriter } from './typingData'
import { CanvasObject } from '../Canvas/CanvasObject'


export const Cover = (params) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>

              <div className={styles.content}>
              <Typical 
                  steps={['HELLO, IM DANIEL.', 1000 ]}
                  loop={1}
                  wrapper='h1'
              />
                <h2>I’M A 
                <Typical steps={typewriter} loop={Infinity} wrapper='span' />
                </h2>
                <p>Wanna be a software engineer with background in computer hardware. I am currently working  with React JS, Next JS, Node JS, Figma Design and Blender for 3D graphics objects.</p>
                <button>Know me more</button>
              </div>
              <div className={styles.contentImage}>
                <div className={styles.contentImageWrapper}>
                  <CanvasObject/>
                </div>
              </div>
              <div className={styles.arrowGuide}>
                <img src="./assets/arrow-down.svg" alt="" />
              </div>

            </div>
        </div>
    )
}
