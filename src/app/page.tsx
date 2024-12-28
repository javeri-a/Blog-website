
import Hero from "./herces/page";
import Subscribe from "./subscribe/page";
import Recent from "./Recent/page";
import Cards from "./blogpage/cards/page.tsx";





export default function Home() {
  return (
   <div>
    <Hero/>

    <Recent/>
    <Cards/>
  
    <Subscribe/>
   
    
    
   </div>
  );
}
