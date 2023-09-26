import Navbar from "@/components/navbar"
import styles from "@/styles/pageStyles/register.module.css"

export default function Register() {

    return (
        <>
            <Navbar />
            <div className={styles.regisDivContainer}>
                <div className={styles.regisContainer}>
                    <h1>VEM PARA TUPPERWARE</h1>
                    <h2>Faça parte da nossa Força de Vendas</h2>
                    <p>Junte-se aos mais de 3 milhões de Consultores Tupperware® e venda os produtos mais icônicos e desejados do mercado e tenha lucros, prêmios, viagens e muito mais!</p>
                    

                     <div className={styles.boxContainer}>
                                
                                <div className={styles.description}>
                                    <h1>Ganhos</h1>
                                    <p className={styles.descriptions}>Temos a melhor proposta de negócio do mercado!<br/><br/>Venha realizar seus sonhos e conquiste sua independência financeira, atuando presencialmente e digitalmente, vendendo os produtos icônicos Tupperware®.<br/><br/>Conheça todas as oportunidades que o Plano de negócios da Tupperware® tem para você!</p>
                                </div>
                                
                                <div className={styles.grafficContainer}>
                                    <div className={styles.graffic1}>
                                        <h4>Consultor</h4>
                                        <p>R$1.600,00*</p>  
                                    </div>
        
                                    <div className={styles.graffic2}>
                                        <h4>Líder Empreendedor</h4>
                                        <p>R$5.809,30</p>  
                                    </div>
        
                                    <div className={styles.graffic3}>
                                        <h4>Empresário</h4>
                                        <p>Ganhos Ilimitados</p> 
                                    </div>
        
                                    <div className={styles.graffic4}>
                                        <h4>Distribuidor</h4>
                                        <p>Ganhos Ilimitados</p> 
                                    </div>

                                </div>

                                <div className={styles.description2}>
                                    <span>Possibilidade de ganhos mensal.</span>
                                    <span>Possibilidade de ganhos mensal.</span>
                                    <span>Possibilidade de ganhos sobre o volume de vendas de uma microrregião.</span>
                                    <span>Possibilidade de ganhos sobre o volume de vendas de uma microrregião.</span>
                                </div>
                     </div>
                             
                     <div className={styles.boxContainer}>
                                <div className={styles.description}>
                                    <h1>Vendas</h1>
                                    <p>Na Tupperware® você pode atuar com as vendas presencias e também via internet!<br/><br/>Tenha ganhos a partir de 26,5% e ainda conte com uma página personalizada no site oficial da Tupperware para vender os produtos e ofertas exclusivas do site e receba um percentual por cada venda!<br/><br/>Semanalmente temos incentivos com produtos Tupperware para aumentar a sua lucratividade. Você é reconhecido semanalmente! O programa semanal de incentivo aumenta a lucratividade do Consultor.</p>
                                </div>
                     </div>

                     <div className={styles.boxContainer}>
                        <div className={styles.description}>
                            <h1>Prêmios e Treinamentos</h1>
                            <p>Na Tupperware®, você terá acesso aos mais desejados prêmios e treinamentos para atingir seus objetivos e realizar seus sonhos!<br/><br/>São vários tipos de incentivos, incluindo super descontos e vários prêmios! Produtos nacionais e importados exclusivos e super desejados!<br/><br/>Capacite-se através da nossa Trilha de Treinamentos de vendas e produtos e encante seus clientes!</p>
                        </div>
                     </div>

                     <div className={styles.boxContainer}>
                        <div className={styles.description}>
                            <h1>Reconhecimento</h1>
                            <p>Acreditamos que o reconhecimento é a melhor forma de motivar as pessoas!<br/><br/>Por isso nossos reconhecimentos são inesquecíveis e incluem viagens nacionais e internacionais, participação em eventos exclusivos, premiações e muitos mais!</p>
                        </div>        
                     </div>

                    
                    <button name="btnRegister" id="btnRegister" className={styles.btnRegis}>Faça seu cadastro</button>
                </div>
            </div>
        </>
    )
}