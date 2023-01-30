import "./CardCharacter.css";

function CardCharacter({image,name,status,specie}){
    return(
        <>
            <div className="card-character">
                <img src={image} alt={name} />
                <div className="container-name">
                <h2 className="name">{name}</h2>
                </div>
                <div className="datos">
                    <div className="row">
                        <p className="estado">Estado: </p>
                        <p>{status}</p>
                    </div>
                    <div className="row">
                        <p className="especie">Estado: </p>
                        <p>{specie}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardCharacter;