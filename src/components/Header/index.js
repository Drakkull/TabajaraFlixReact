import styles from "./header.module.css";



function Header(){
  return(
    <>
      <header className={styles.header}>
         <span>TabajaraFlix</span>
        
          <nav>
            <a href="#">HOME</a>
            <a href="#">Assistir</a>


          </nav>
          

      </header>
    
    
    </>


  );

}

export default Header;