import styles from './escocia.module.css'
import ComponenteProps from './ComponenteProps'
import EscociaFlag from '../imagens/flag.png'

function Escocia(){
    return(
        <div className={styles.container}>
            <ComponenteProps lugar="Escócia" texto="Grandes abacates" bandeira={EscociaFlag} />
        </div>
    )
}

export default Escocia