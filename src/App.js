import Banner from "./components/Banner";
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from "./json/db.json"

function App(){
    return (

        <>
         <Header />
         <Banner />
         <Container>
            <h2>40k</h2>
           <section className="cards">
             <Card id="u_HZt5J4OQo"/>
             <Card id="B9V0bOB8sXQ"/>
             <Card id="Cj3ENSVogTo"/>
             <Card id="O7hgjuFfn3A"/>
             <Card id="jpeyachcSOo"/>
             <Card id="PC-ZJKZ8sKI"/>

             {
              videos.map((video) => <Card id={video.id} key={video}/>)
             }


           </section>
          
         
          </Container>

         <Footer />
        
        </>

    );
}

export default App;