import React from 'react'
import styles from './index.module.scss'
import LogoSVG from './images/logo.svg'

const NavTop: React.FC = (): JSX.Element => {
  return <section className={styles.navTopBox}>
  <div className={styles.leftSide}>
    <img className={styles.leftSideImg}alt="LogoSVG" src={LogoSVG} width={185} height={40} />
    <h3 className={styles.leftSideText}>PRODUCT CATEGORY</h3>
  </div>
</section>;
}

export default NavTop;