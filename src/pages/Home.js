import React from 'react';
import Wrapper from '../components/Wrapper';
import styles from '../style/Home.module.css';

export default function Home() {
    return (
        <Wrapper>
            <div>
                <h1 className={styles.title}>Home</h1>
                <div className={styles.body}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit autem distinctio dolores reprehenderit cumque beatae praesentium, inventore sed nesciunt repellat eum temporibus dolorum illum iure aut deserunt magni. Rem, saepe!</p>
                </div>
            </div>
        </Wrapper>
        
    )
}
