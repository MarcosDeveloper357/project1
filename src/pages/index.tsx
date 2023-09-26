import Navbar from '@/components/navbar';
import styles from '@/styles/pageStyles/Home.module.css'

import  Link  from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
        <div className={styles.mainContainer}>
          <div className={styles.divContainer}>

            <div className={styles.container}>
              <h1>Já nascemos inovadores</h1>
              <h2>Tupperware® a melhor solução para sua casa e cozinha!</h2>
              <p>Hoje em dia, milhões de pessoas utilizam Tupperware® no mundo. Por isso, somos o parceiro ideal para aqueles que buscam por um dia a dia mais prático e ágil com produtos inovadores, funcionais e ambientalmente responsáveis.</p>
            </div>

            <div className={styles.container}>
              <img src="/images/itsTupperware.jpeg" alt="tupperware" width={400}/>
            </div>

          </div>


          <div className={styles.divContainer2}>

            <div className={styles.container2}>
              <img src="/images/sobre-noun-brazil.svg" alt="mapBrazil" />
              <span>+46</span>
              <p>No Brasil</p>
            </div>

            <div className={styles.container2}>
              <img src="/images/sobre-noun-world.svg" alt="word" />
              <span>+8500</span>
              <p>Produtos Lançados</p>
            </div>

            <div className={styles.container2}>
              <img src="/images/sobre-np_badge.svg" alt="" />
              <span>+70</span>
              <p>Países Pelo Mundo</p>
            </div>

            <div className={styles.container2}>
              <img src="/images/sobre-noun-love.svg" alt="mapBrazil" />
              <img src="/images/sobre-noun-infinite.svg" alt="infinit"  width={100}/>
              <p>Histórias e Bons Momentos</p>
            </div>

          </div>


          <div className={styles.divContainer3}>
            <div className={styles.container3}>
              <h1>Somos a melhor solução para sua casa e cozinha!</h1>
              <p>Já nascemos inovadores! Lá em 1964, nosso fundador Earl Tupper revolucionou as cozinhas dos Estados Unidos com o lançamento da Tigela Maravilhosa, o único produto do mercado até então com uma tampa hermética para potencializar a conservação de alimentos!<br /><br />Pouco tempo depois, Brownie Wise teve a ideia que mudou tudo! Para apresentar os diferenciais dos nossos produtos para os consumidores, ela criou as famosas demonstrações que ficaram conhecidas como “Reuniões Tupperware®”. São nessas reuniões que nossas Consultoras mostram em primeira mão e ensinam como usar cada item em um encontro divertido com suas clientes! Demais, né?<br /><br />Desde então, nossa marca tem ganhado cada vez mais espaço por, aterrissando no Brasil em 1976 e levando praticidade para lares em todo o mundo. Hoje já colecionamos mais de 8.500 produtos que nossos consumidores amam, confiam e usam por muuuuuuitos anos.</p>
              
              <div>

                <div>
                  <img src="/images/sobre-garrafas.webp" alt="tupperware"/>
                </div>
                
                <div>
                  <h1>Made In Brazil</h1>
                  <p>São várias categorias diferentes, cada uma para facilitar um momento do dia a dia. E ah, tudo “made in Brasil” (“feito no Brasil”), hein? Nossa produção acontece em nossa fábrica no Rio de Janeiro que tem mais de 1.000 Associados e Associadas.<br /><br />Além de produtos icônicos, também oferecemos a Oportunidade Tupperware® para quem quer empreender e construir uma carreira ou ganhar uma renda extra se juntando a nossa Força de Vendas! Temos milhares de Consultores pelo Brasil (e mundo!) que aproveitam a nossa excelente rentabilidade e produtos de alta qualidade para ganhar dinheiro e alcançar seus sonhos.<br /><br />Quer saber mais sobre a gente? Conheça nossos valores!</p>
                </div>
                                           
              </div>
            
            </div>
          </div>


          <div className={styles.divContainer4}>
            <h1>Para entender a empresa Tupperware, é preciso entender o que nos guia no dia a dia.</h1>
            <h2>Nossos valores</h2>

            <div className={styles.container4}>
              <img src="/images/sobre-valores-sustentabilidade.svg" alt="sustainable" />
              <span>Sustentabilidade</span>
              <p>Queremos evitar o descarte de plástico de uso único e o desperdício de alimentos. Para isso, criamos produtos reutilizáveis, de alta qualidade, durabilidade e que conservam alimentos como nenhum outro para acompanhar nossos consumidores por muitos e muitos anos!</p>
            </div>

            <div className={styles.container4}>
              <img src="/images/sobre-valores-pessoas.svg" alt="peples" />
              <span>Pessoas</span>
              <p>Somos uma marca de histórias! Histórias de consumidores, que compartilham nossos produtos em família, de geração em geração, e histórias dos nossos Consultores, que constroem tantos sonhos com a gente. Existimos para pessoas e por conta de pessoas, e nunca esquecemos disso.</p>
            </div>

            <div className={styles.container4}>
              <img src="/images/sobre-valores-inovacao.svg" alt="inovation" />
              <span>Inovação</span>
              <p>Nascemos da inovação e vivemos dela! Nossos designs e tecnologias são reconhecidos internacionalmente, servindo de exemplo e nos inspirando para melhorias constantes. Estamos sempre de olho nas novas necessidades e oportunidades para oferecer praticidade e qualidade para o dia a dia dos nossos consumidores.</p>
            </div>

          </div>


        </div>
        <div className={styles.feed}>
            <Link href="/products"><img src="images/img1.jpg" alt='products' />example</Link>
            <Link href="/products"><img src="images/img2.jpg" alt='products' />example</Link>
            <Link href="/products"><img src="images/img3.jpg" alt='products' />example</Link>
            <Link href="/products"><img src="images/img4.jpg" alt='products' />example</Link>
            <Link href="/products"><img src="images/img5.jpg" alt='products' />example</Link>
            <Link href="/products"><img src="images/img6.jpg" alt='products' />example</Link>
            <Link href="/products"><img src="images/img7.jpg" alt='products' />example</Link>
            <Link href="/products"><img src="images/img8.jpg" alt='products' />example</Link>
            <Link href="/products"><img src="images/img9.jpg" alt='products' />example</Link>
            <Link href="/products"><img src="images/img10.jpg" alt='products'/>example</Link>
        </div>
    </>
  )
}
