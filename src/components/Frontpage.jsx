import Image from 'next/image'

const Page = () => {
  return (
    <div calssName="Fron">
      <div className="frontimage">
        <Image src='/images/frontpage.jpg' alt="背景写真" width={1652} height={980} className='round-2x1' />
      </div>
      <p>My Portfolio</p>
    </div>
  )
}

export default Page