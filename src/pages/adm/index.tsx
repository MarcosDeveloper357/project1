import  Link  from 'next/link';
import styles from "@/styles/pageStyles/adm.module.css"
import NavbarAdm from '@/components/navbarAdm';
import RemoveBtn from '@/components/removeBtn';

export default function Adm (){
    return(
        <>
            <NavbarAdm />
            <div className={styles.feed}>
                <div className={styles.productContainer}>
                    <Link href="/products"><img src="images/img1.jpg" alt='products' />Lanche</Link>
                    <h1>Nome</h1>
                    <p>preço:R$100,00</p>
                    <p>Mais informações</p>
                    <RemoveBtn />
                </div>
                <div className={styles.productContainer}>
                    <Link href="/products"><img src="images/img2.jpg" alt='products' />Lanche</Link>
                    <h1>Nome</h1>
                    <p>preço:R$100,00</p>
                    <p>Mais informações</p>
                    <RemoveBtn />
                </div>
                <div className={styles.productContainer}>
                    <Link href="/products"><img src="images/img3.jpg" alt='products' />Lanche</Link>
                    <h1>Nome</h1>
                    <p>preço:R$100,00</p>
                    <p>Mais informações</p>
                    <RemoveBtn />
                </div>
                <div className={styles.productContainer}>
                    <Link href="/products"><img src="images/img4.jpg" alt='products' />Lanche</Link>
                    <h1>Nome</h1>
                    <p>preço:R$100,00</p>
                    <p>Mais informações</p>
                    <RemoveBtn />
                </div>
                <div className={styles.productContainer}>
                    <Link href="/products"><img src="images/img5.jpg" alt='products' />Lanche</Link>
                    <h1>Nome</h1>
                    <p>preço:R$100,00</p>
                    <p>Mais informações</p>
                    <RemoveBtn />
                </div>
                <div className={styles.productContainer}>
                    <Link href="/products"><img src="images/img6.jpg" alt='products' />Lanche</Link>
                    <h1>Nome</h1>
                    <p>preço:R$100,00</p>
                    <p>Mais informações</p>
                    <RemoveBtn />
                </div>
                <div className={styles.productContainer}>
                    <Link href="/products"><img src="images/img7.jpg" alt='products' />Lanche</Link>
                    <h1>Nome</h1>
                    <p>preço:R$100,00</p>
                    <p>Mais informações</p>
                    <RemoveBtn />
                </div>
                <div className={styles.productContainer}>
                    <Link href="/products"><img src="images/img8.jpg" alt='products' />Lanche</Link>
                    <h1>Nome</h1>
                    <p>preço:R$100,00</p>
                    <p>Mais informações</p>
                    <RemoveBtn />
                </div>
                <div className={styles.productContainer}>
                    <Link href="/products"><img src="images/img9.jpg" alt='products' />Lanche</Link>
                    <h1>Nome</h1>
                    <p>preço:R$100,00</p>
                    <p>Mais informações</p>
                    <RemoveBtn />
                </div>
                <div className={styles.productContainer}>
                    <Link href="/products"><img src="images/img10.jpg" alt='products' />Lanche</Link>
                    <h1>Nome</h1>
                    <p>preço:R$100,00</p>
                    <p>Mais informações</p>
                    <RemoveBtn />
                </div>
            </div>
        </>
    )
}