import styles from "./banner.module.css";


//Deveria ter coloca {image} dentro do Banner, mas não estava dando certo
//style={{backgroundImage: `url("/public/Images/${image}.png")`}} isso deveria ir depois na div depois de styler.banner mas deu merda!
function Banner (){
   return(
      <div className={styles.banner}>

      </div>
   );
}

export default Banner;