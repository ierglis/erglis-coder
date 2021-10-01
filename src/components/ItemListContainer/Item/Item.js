import React from "react"
import "./item.css"
import {Link} from "react-router-dom"


export const Item = ({ id, name, img, desc, price }) => {
    return (
      <div className="prod" key={id}>
        <div className="itemsprod">
          <Link to={`/detail/${id}`}>
            <img src={img} alt={desc} />
            <h3>{name}</h3>
            <p>{desc}</p>
            <h4>{"$ " + price}</h4>
            <button className="buybutt">Ver más</button>
          </Link>
        </div>
      </div>
    )
}
       