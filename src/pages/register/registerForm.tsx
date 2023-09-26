import styles from "@/styles/formStyles/registerForm.module.css"

export default function RegisterForm() {
    return (
        <>
            <input type="email" id="email" placeholder="Seu e-mail" className={styles.emailInput} />
            <input type="tel" id="tel" placeholder="Seu telefone" className={styles.telInput} />
            <button className={styles.userInput} >Enviar</button>
        </>
    )
}