import styles from "@/styles/formStyles/addProduct.module.css"

export default function AddProduct() {
    return (
        <>
            <ul>
                <li>
                    <input type="text" id="name" placeholder="Nome do produto" className={styles.nameInput} />
                </li>
                <li>
                    <input type="text"  id="description" placeholder="Descrição do produto" className={styles.descriptionInput} />
                </li>
                <li>
                    <input type="text"  id="price" placeholder="Preço do produto" className={styles.priceInput} />
                </li>
                <li>
                    <input type="button" placeholder="Escolher uma imagem" id="image" className={styles.imageInput} />
                </li>
            </ul>
            
        </>
    )
}