import Image from "next/image";
import ServiceCards from '@/components/servicios'

export default function Home() {
  return (
    <div className='flex justify-center items-center'>
      <div className='castor container-find-email'>
        <div className='container-caption'>
          <div className='item'>
            <Image src="/logo.png" width="400" height="400" alt="logo" />
          </div>
        </div>
      </div>
      <ServiceCards />
    </div>

  )
}
