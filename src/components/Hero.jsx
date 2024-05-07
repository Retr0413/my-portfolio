import Image from "next/image";
// import { useEffect, useState } from 'react';

const Hero = () => {
    // const [showText, setShowText] = useState(false);

    // useEffect(() => {
    // const timer = setTimeout(() => {
    //   setShowText(true);
    // }, 500);
    // return () => clearTimeout(timer);
    // }, []);

    return (
        <div className="hero-container">
        <Image src='/images/sunsun.jpg' className="profile-img" width={300} height={300} alt="Arima's personal headshot" />
        <div className="hero-text">
            <h1>こんにちは、有馬勇人です</h1>
            <p>
                東海大学情報理工学部コンピュータ応用所属。学習科目 - 情報セキュリティ、Webアプリケーション開発、アルゴリズム。
            </p>
            <div className="social-icons">
                <a 
                href="https://twitter.com"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                href="https://github.com"
                aria-label="Github"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                href="https://www.linkedin.com"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </div>
        </div>
    </div>
    )
}

export default Hero;