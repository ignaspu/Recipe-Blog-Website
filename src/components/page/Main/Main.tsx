import Cards from "../../UI/Cards/Cards";
import Hero from "../../UI/Hero/Hero";
import LatestRecipe from "../../UI/LatestRecipe/LatestRecipe";
import PopCategories from "../../UI/PopCategories/PopCategories";

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