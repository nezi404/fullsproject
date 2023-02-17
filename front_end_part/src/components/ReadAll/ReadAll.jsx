import "./ReadAll.css";
import Card from "../Card/Card";

const itens = [
    {
        _id: 1234,
        nome : "pato",
        imagemUrl: "https://www.petz.com.br/blog/wp-content/uploads/2022/06/como-cuidar-de-um-pato-2-1280x720.jpg"
    },

    {
        _id: 1244,
        nome : "arara canindé",
        imagemUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Blue-and-Yellow-Macaw.jpg/280px-Blue-and-Yellow-Macaw.jpg"
    }
]

const numero = 2;

function ReadAll() {
    return <div className="ReadAll">
        {itens.map(function (item) {
            console.log(item)
            return <Card keys = { "card-" + item._id} item = {item}/>
        })}
       
    </div>
}

export default ReadAll;