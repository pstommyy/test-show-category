import React from 'react';
import styles from './index.module.scss'
//component
import NavTop from './Component/NavTop'
import ProductCategory from './Component/ProductCategory'

const App: React.FC = (): JSX.Element => {
  const dataTextHead = [
    {
      id:1,
      headText:'Product Category-01',
    },
    {
      id:2,
      headText:'Product Category-02',
    },
  ]
  return (
    <div className={styles.App}>
      <nav>
        <NavTop />
      </nav>
      {dataTextHead.map((data)=>(
      <div key={data.id} className={styles.showPostBox}>
        <div className={styles.showPostBoxText}><p className={styles.showPostText}>{data.headText}</p></div>
          <ProductCategory />
      </div>))}
      
    </div>
  ); 
}

export default App;
