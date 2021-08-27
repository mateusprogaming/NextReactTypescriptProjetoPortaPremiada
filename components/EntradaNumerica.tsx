import styles from '../styles/EntradaNumerica.module.css'

interface EntradaNumericaProps {
    text: string
    value: number
    onChange: (novoValor: number) => void
}

export default function EntradaNumerica(props) {
    const dec = () => props.onChange(props.value - 1)
    const inc = () => props.onChange(props.value + 1)

    return (
        <div>
            <div className={styles.EntradaNumerica}>
                <span className={styles.text}>{props.text}</span>
                <span className={styles.value}>{props.value}</span>
                <div className={styles.botoes}>
                    <button className={styles.btn} onClick={dec}>-</button>
                    <button className={styles.btn} onClick={inc}>+</button>
                </div>
            </div>
        </div>

    )
}