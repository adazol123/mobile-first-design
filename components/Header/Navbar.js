import { useEffect, useRef, useState } from 'react'
import styles from '../../styles/Navbar.module.css'
import { useOnScreen } from '../Triggers/Observers'
import { letters } from './LogoData'
import { LogoData } from './LogoData'
import LetterL from '../../public/assets/logo/L.svg'


// function useOnScreen(options) {
//     const [ref,setRef ]= useState(null)
//     const [visible, setVisible] = useState(false)

//     useEffect(() => {
//         const observer = new IntersectionObserver(([entry]) => {
//             setVisible(entry.isIntersecting)
//         }, options)

//         if(ref) {
//             observer.observe(ref)
//         }
//         return () => {
//             if(ref) {
//                 observer.unobserve(ref)
//             }
//         };
//     }, [ref, options]);

//     return [setRef, visible]
// }

export const Navbar = ({ params, navBG, navHeight, navColor, testClass }) => {
    const [setRef, visible] = useOnScreen({ threshold: 0.1 })
    const test = styles.logoOnly
    return (
        <div className={testClass? styles.containerOn : styles.containerOff} >
            <div className={styles.wrapper}
                ref={setRef}
                style={{
                    background: `${navBG}`,
                    // height: `${navHeight}`,
                    color: `${navColor}`,
                }}>
                <div className={styles.navbar}>
                    <div className={styles.logoContainer}>
                        <div className={styles.logo}>
                            <img className={styles.logoIcon} src="./assets/logo-icon.svg" alt="adazolhub logo icon" />
                        </div>
                        <div className={styles.logoName}>
                            {letters.map((letter, index) => (
                            <img className={styles.logoNameIcon} src={letter} key={index} alt="letters" />
                            ))}
                        </div>
                    </div>
                    <div className={styles.menuContainer}>
                        <img className={styles.logoIcon} src="./assets/hamburger-menu.svg" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}
