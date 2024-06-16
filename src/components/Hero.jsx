import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
        <Image src='/images/Mark.PNG' className="profile-img" width={300} height={300} alt="Arima's personal headshot" />
        <div className="hero-text">
            <h1>こんにちは、有馬勇人です</h1>
            <p>
                東海大学情報理工学部コンピュータ応用工学科所属。学習科目 - 情報セキュリティ、Webアプリケーション開発、アルゴリズム。
            </p>
            <div className="social-icons">
            </div>
        </div>
    </div>
    )
}

export default Hero;