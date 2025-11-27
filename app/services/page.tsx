import Banners from '@/components/Banners'
import Footer from '@/components/Footer'
import Offer from '@/components/Offer'
import Process from '@/components/Process'
import React from 'react'

export default function page() {
  return (
    <div>
        <Banners />
        <Process />
        <Offer />
        <Footer />
    </div>
  )
}
