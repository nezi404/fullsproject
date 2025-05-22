import "./ReadAll.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";


const numero = 0;

function ReadAll() {
    const [passaros, setItems] = useState([]);

async function realizaraquisicao(){

        const bd_url = "API_KEY"
        const response = await fetch(bd_url);
        const data = await response.json();

        console.log(data);

        setItems(data)
}
// com put e na barra colocar o9 id, ce consegue adicionar outro atributo ao objeto
useEffect(function(){
    realizaraquisicao();
}, [] )


    return <div className="ReadAll">
        {passaros.map(function (item) {
            console.log(passaros)
            console.log(item)
            passaros.push("uepaaa")
            console.log(passaros)

            return <Card keys = { "card-" + item._id} item = {item}/>
        })}
       
    </div>
}

export default ReadAll;
