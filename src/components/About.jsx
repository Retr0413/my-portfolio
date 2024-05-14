import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>大学ではソフトウェア関係を基本的に勉強しています。大学内の勉強にとどまらず自分の興味のある技術に関しては基本的に触れていくようにしています。バイト先では、小学生から高校生の間の子供にScratchやUnityなどでゲーム作成を教えています。</p>
                    <p>これから先は、Webアプリケーションに関する開発についての勉強をしています。自分の生活に役立つアプリケーションを自分自身で作成することに意義があると思っています。また情報セキュリティの勉強をする延長線上でバックエンドによる開発手法として今はDjangoを学習しています。</p>
                </div>
                <div className="about-img">
                    <Image src='/images/skillspage.jpg' className="profile-img" width={970} height={800}/>
                </div>
            </div>
        </div>
    )
}

export default About;