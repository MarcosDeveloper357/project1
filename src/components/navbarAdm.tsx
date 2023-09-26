import  styles  from '@/styles/componentsStyles/navbarAdm.module.css';
import Image from 'next/image';
import  Link  from 'next/link';


export default function NavbarAdm() {
    return(
      <>
        <div className={styles.navbar}>
            <ul>
                <li>
                    <Link className={styles.navbarLink} href="/">Sair</Link>
                </li>
                <li>
                    <button id='newProductBtn' className={styles.newProductBtn}><p>Novo Produto</p></button>
                </li>
            </ul>
        </div>
      </>
    )
}