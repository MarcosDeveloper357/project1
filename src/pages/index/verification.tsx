import styles from "@/styles/formStyles/verification.module.css"

export default function AddProduct() {
    return (
        <>
            <input type="text" id="user" placeholder="Usuario" className={styles.userInput} />
            <input type="password" id="password" placeholder="Sua senha" className={styles.passwordInput} />
            <button className={styles.btnInput} >Entrar</button>
        </>
    )
}