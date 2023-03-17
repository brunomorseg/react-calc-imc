import { useState } from 'react'
import styles from './App.module.css'
import powerImage from './assets/powered.png'
import { calculateImc, levels, Level } from './helpers/imc'
import { GridItem } from './components/GridItem'
import leftArrowImage from './assets/leftarrow.png'

const App=()=>{

  const [heightField, setHeightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)
  const [toShow, setToShow] = useState<Level | null>(null)

  const handleCalcular =() => {
    
    if (heightField && weightField) {
        setToShow(calculateImc(heightField, weightField))
    } else {
      alert('Digite todos os campos.')
    }
  }

  const handleBackButton = () => {
      setToShow(null);
      setWeightField(0);
      setHeightField(0)

  }

  return (
    <div className={styles.main}>
      <header className={styles.header}>

        <img src={powerImage} width={150} className={styles.img}/>

      </header>
      
      <div className={styles.container}>
      
        <div className={styles.leftside}>
          
          <h1 className={styles.h1}>Calcule o seu IMC.</h1>

          <p className={styles.p}>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input className={styles.input}
          type='number'
          placeholder='Digite a sua altura. Ex: 1.5 (em metros)'
          value={heightField > 0 ? heightField : ''}
          onChange={e=> setHeightField(parseFloat(e.target.value))}
          disabled={toShow ? true: false}
         
          />

          <hr className={styles.hr}/>

          
          <input className={styles.input}
          type='number'
          placeholder='Digite o seu peso. Ex: 60.5 (em kilos)'
          value={weightField > 0 ? weightField : ''}
          onChange={e=> setWeightField(parseFloat(e.target.value))}
          style={{marginTop:'20'}}
          disabled={toShow ? true:false}
          />

          <hr/>
          <br/>
          <br/>

          <button className={styles.button} onClick={handleCalcular}  disabled={toShow ? true: false}>Calcular</button>
        
        </div>
      
        <div className={styles.rightside}>
           
           {!toShow &&
           <div className={styles.grid}>
             {levels.map( (item,key)=>(
              <GridItem key={key} item={item}/>
             ))}
           </div>}

           {toShow &&
            <div className={styles.rightBig}>
                <div className={styles.rightArrow}   style={{
      position: "absolute",
      backgroundColor: "#227C9D",
      width: 70,
      height: 70,
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      marginLeft: "0",
      marginTop:'0'
    }} onClick={handleBackButton}  >
                <img  src={leftArrowImage} alt='' width={25}/>

                </div>
                <GridItem item={toShow}/>

            </div>
            
           }


        </div>

      </div>

      
    
    </div>
  )
}


export default App;