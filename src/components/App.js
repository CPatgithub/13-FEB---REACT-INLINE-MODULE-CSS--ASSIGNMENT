import React from 'react'
import '../styles/App.css';
import styles from '../styles/appStyles.module.css';
const App = () => {
const heading ={


}
  return (
    <div id="main">
      <h1 className={styles.success}>Success</h1>
      <h1 id='error' style={{fontSize:50 +'px',color:"red"}}>Error</h1>
    </div>
  )
}


export default App;
