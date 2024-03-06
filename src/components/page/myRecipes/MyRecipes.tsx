import styled from "styled-components";
import UsersContext from "../../../context/UsersContext";
import { Key, useContext, useState } from "react";
import CardContext from "../../../context/CardContext";
import Card from "../../UI/Card/Card";

const StyledMain = styled.main`
margin-top: 80px;
`;

const MyRecipes = () => {

  const { loggedInUser } = useContext(UsersContext);
  const { cards } = useContext(CardContext);

  const [userCards, setUserCards] = useState(cards.filter((card: { authorID: { toString: () => any; }; }) => card.authorID === loggedInUser.id));
  console.log(loggedInUser)
  console.log(cards)
  console.log(userCards)
  return ( 
    <StyledMain>
      <h1>Mano receptai</h1>
      {userCards.length ?
          userCards.map((element: { id: Key | null | undefined; }) => {
            return <Card
              key={element.id}
              data={element}
            />
          }) :
          <h1>Neturite užduotų klausimų.</h1>
        }
    </StyledMain>
   );
}
 
export default MyRecipes;