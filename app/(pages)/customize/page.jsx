import React from 'react'
import styles from './customize.module.css'
import Header from '@/app/components/navigation/Header'
import Transition from '@/app/components/page/Transition'

export default function Customize() {
  return (
    <Transition>
        <Header title={'Customize'}/>
        
    </Transition>
  )
}
