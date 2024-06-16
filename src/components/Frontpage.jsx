import Image from 'next/image';
import { useEffect, useState } from 'react';

const Page = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="backgroundimage">
      <Image src="/images/frontpage.jpg" fill style={{ objectFit: 'cover' }} />
      <div className="backgroundtext">
        Arima Hayato Portfolio
      </div>
    </div>
  )
}

export default Page