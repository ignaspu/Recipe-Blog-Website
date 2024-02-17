import Cards from "../../Cards/Cards";
import Hero from "../Hero/Hero";
import LatestRecipe from "../LatestRecipe/LatestRecipe";
import PopCategories from "../PopCategories/PopCategories";

const Main = () => {
  return ( 
    <main>
      <Hero/>
      <PopCategories/>
      <Cards/>
      <LatestRecipe/>
    </main>
   );
}
 
export default Main;