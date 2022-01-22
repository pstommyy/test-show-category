import React, { useState, useEffect}from 'react';
import styles from './index.module.scss'
import axios from 'axios';
const baseURL = 'https://fakestoreapi.com/products'

const ShowPost: React.FC =(): JSX.Element => {

  const [productData, setProductData] = useState([]);

  useEffect(()=>{
    axios.get(baseURL).then((response)=>{
      setProductData(response.data)
      console.log('response>>>>',response.data)
    })
  },[]);

  return <section className={styles.showPostBox}>
    <div className={styles.container}>
      {productData.map((data:any)=>(
        <div key={data.id} className={styles.profileCard}>
            <div className={styles.detailProfile}>
              <div className={styles.item}>
                <div className={styles.imgBox}><img className={styles.img} src={data.image} alt="" /></div>
                <p className={styles.textName}>{data.title}</p>
                <p className={styles.textGrey}>Price : {data.price}</p>
                <p className={styles.textContent}>
                Rating : {data.rating.rate}
                </p>
            </div>
          </div>
      </div>))}
    </div>
  </section>;
}

export default ShowPost;
