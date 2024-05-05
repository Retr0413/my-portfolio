import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                        大学ではソフトウェア関係を基本的に勉強しています。しかしバイト先では、arduinoを使ってハードウェアに関することを学習しています。
                    </p>
                    <p>これから先は、Webアプリケーションに関する開発についての勉強をしています。自分の生活に役立つアプリケーションを自分自身で作成することに意義があると思います。</p>
                </div>
                <div className="about-img">
                    <Image src='/images/skillspage.jpg' className="profile-img" width={970} height={800}/>
                </div>
            </div>
        </div>
    )
}

export default About;