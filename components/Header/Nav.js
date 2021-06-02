import styles from '../../styles/Nav.module.css'

export const Nav = (params) => {
    return (
        <div className={styles.container}>
            <nav>
                <div className="logo">
                    <a href="#">
                        <img src="./logo-beta.svg" alt="l;" />
                    </a>
                </div>

            </nav>
        </div>
    )
}
