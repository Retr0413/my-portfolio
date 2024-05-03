const Footer = () => {
    return (
        <>
        <hr />
        <div className="footer-container">
            <p>
                @{new Date().getFullYear()}MyPortFolio<br />東海大学情報理工学部コンピュータ応用工学科<br />hahayato.arima@gmial.com
            </p>
            <div className="social_icons">
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
            </div>
        </div>
        </>
    )
}

export default Footer;