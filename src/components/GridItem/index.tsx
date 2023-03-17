import { Level } from "../../helpers/imc"
import styles from './App.module.css'
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'


type Props = {
    item: Level
};

export const GridItem = (props:Props) => {
    
    return (
        <div className={styles.main} style={{backgroundColor:props.item.color}}>
            <div className={styles.gridIcon}>
               <img src={props.item.icon ==='up'? upImage : downImage } alt="" width="30" />
            </div>
            <div className={styles.gridTitle}>{props.item.title}</div>

            {props.item.yourImc && <div style={{ margin: "10px 0 50px 0" }} > Seu imc é: {props.item.yourImc} kg/m2</div>}

            <div className={styles.gridInfo}>
                <>
                IMC está entre <strong>{props.item.imc[0]}</strong> e <strong>{props.item.imc[1]}</strong>
                
                </>
            </div>

        </div>
    )
}