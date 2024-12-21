import HomeNavbar from '@/components/common/home-navbar'
import { Tabs } from '@/components/ui/tabs'
import React from 'react'

const HomePage = () => {
  return (
    <Tabs defaultValue='Summary'>
      <HomeNavbar />  
    </Tabs>
  )
}

export default HomePage