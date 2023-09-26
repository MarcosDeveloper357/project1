import  styles  from '@/styles/componentsStyles/navbar.module.css';
import Image from 'next/image';
import  Link  from 'next/link';

export default function Navbar() {
    return(
      <>
        <div className={styles.navbar}>
          <Link href="adm">
            <img 
              src="/favicon.png"
              alt='Logo'
             />
          </Link>
          <ul>
          <li>
             <Link className={styles.navbarLink} href="/">Home</Link>
           </li>
           <li>
              <Link className={styles.navbarLink} href="/products">Produtos</Link>
           </li>
           <li>
              <Link className={styles.navbarLink} href="/register">Quero ser um(a) consultor(a)</Link>
           </li>
         </ul>
        </div>
      </>
    )
}