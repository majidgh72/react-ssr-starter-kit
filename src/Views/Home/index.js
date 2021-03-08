import React from 'react';
import HomeSlider from 'Components/HomeSlider';
import styles from './styles.module.scss';

function Home() {

    return (
        <div className={styles.home}>
            <HomeSlider />
        </div>
    );
}

export default Home;
