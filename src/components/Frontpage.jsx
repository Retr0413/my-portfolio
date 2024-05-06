import Image from 'next/image'

const Page = () => {
  return (
    <div className="backgroundimage">
      <Image src="/images/frontpage.jpg" layout="fill" objectFit='cover' quality={100} alt="background" />
      <div className="backgroundtext">
        My Portfolio
      </div>
    </div>
  )
}

export default Page