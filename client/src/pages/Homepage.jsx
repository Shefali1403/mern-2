import React from "react";
import Card1 from "../components/Hcards/Card1";
import Card2 from "../components/Hcards/Card2";
import Card3 from "../components/Hcards/Card3";
const Homepage=()=>{
    return(
        <>
          <div className="container-home">
            <Card1/>
            <Card2/>
            <Card3/>
          </div>
        </>
    )
}
export default Homepage;