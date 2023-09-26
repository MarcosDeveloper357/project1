import  styles  from '@/styles/componentsStyles/footer.module.css';
import Image from 'next/image';
import  Link from 'next/link';

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <p>by Marcos Henrique Developer</p>
            <p>Josy Tupperware</p>
            <div>
                <ul>
                    <li>
                    <Link href="https://www.facebook.com/josytupperware.santos.9"><img src="facebook.png" alt='facebookIcon' width={60} height={60}/>Facebook</Link>
                    </li>

                    <li>
                    <Link href="https://www.instagram.com/josy.tupperware/"><img src="instagram.png" alt='instagramIcon' width={60} height={60}/>Instagram</Link>
                    </li>

                    <li>
                    <Link href="https://wa.me/5535997782215/?text=Ola gostaria de ser um(a) consultor(a) da Tupperware"><img src="whatsapp.png" alt='whatsappIcon' width={60} height={60}/>Whatsapp</Link>
                    </li>

                    <li>
                    <Link href="https://www.youtube.com/@TWBrasil"><img src="youtube.png" alt='youtubeIcon' width={60} height={60}/>Youtube</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}