import Footer from './footer'

import styles from '@/styles/componentsStyles/mainContainer.module.css'
import  Head  from 'next/head';

export default function Contact({ children }:any) {
  return (
    <>
    
      <div className={styles.container}>
        <Head>
          <link rel="shortcut icon" href="/favicon.png"/>
          <title>Josy Tupperware</title>
        </Head>
          <div >{children}</div>
        <Footer />
      </div>
  
    </>
  )
}