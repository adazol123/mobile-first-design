import styles from '../../styles/Navbar.module.css'
import LetterL from '../../public/assets/logo/L.svg'
import LetterA from '../../public/assets/logo/A.svg'
import LetterD from '../../public/assets/logo/D.svg'

export const letters = [
    './assets/logo/A.svg',
    './assets/logo/D.svg',
    './assets/logo/A.svg',
    './assets/logo/Z.svg',
    './assets/logo/O.svg',
    './assets/logo/L.svg',
    './assets/logo/H.svg',
    './assets/logo/U.svg',
    './assets/logo/B.svg',
    './assets/logo/dot.svg',
]
export const logoLetter = [
    <LetterA/>,
    <LetterD/>,
    <LetterL/>,
]


export const LogoData = () => {
    return (
        <div className={styles.logoTest}>
            {logoLetter.map(letter => {
                letter
                {{console.log(LetterD)}}
            })}
            <LetterD fill={'blue'}/>
        </div>

    )
}