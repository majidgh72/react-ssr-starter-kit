import React from 'react';
import Image from 'Components/Image';
import { useTranslation } from 'react-i18next';
import SliderImage from 'Assets/images/home-slider-image.png';
import Button from 'Components/Button';
import styles from './styles.module.scss';

function HomeSlider() {

    const{ t } = useTranslation();

    return (
        <section className={styles.HomeSlider}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.texts}>
                        <h1 className="mb-3">{ t("Specialist Social Network") }</h1>
                        <div className={ styles.footer }>
                            <Button
                                path="/about"
                                className="ml-1"
                            >{ t("Find Experts") }</Button>
                            <Button
                                path="/about"
                                theme="primary"
                            >{ t("Create Profile and Resume") }</Button>
                        </div>
                    </div>
                    <Image
                        src={SliderImage}
                        alt={ t("Mofid Securities") }
                        width={ 852 }
                        height={ 628 }
                        className={ styles.image }
                    />
                </div>
            </div>
        </section>
    );
}

export default HomeSlider;