import  styles  from '@/styles/navbarAdm.module.css';
import Image from 'next/image';
import  Link  from 'next/link';

export default function RemoveBtn() {
    return(
      <>
        
         <button className={styles.removeProductBtn}><p>Remover Produto</p></button>
               
      </>
    )
}