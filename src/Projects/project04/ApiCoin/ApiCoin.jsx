import { useEffect, useState } from "react";
import BotonTop from "../../../components/BotonTop/BotonTop";
import "./ApiCoin.css";

function ApiCoin(){
    const [coins,setCoins] = useState([]);
    const [searchCoin,setSearchCoin] = useState();

    useEffect(()=>{
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

        const peticion = fetch(url);

        peticion.then(
            (res)=>res.json()
        ).then((data)=> 
            setCoins(data)
        ).catch(error => 
            console.log(error)
        )
        
    },[]);

    const handleCoin = (e) =>{
        setSearchCoin(e.target.value);
    }

    let mondedas = [];

    if(!searchCoin){
        mondedas = coins;
    }else{
        mondedas = coins.filter((coin) => coin.name.toLowerCase().includes(searchCoin.toLowerCase()));
    }
    

    return <div className="container">

        <header className="container-title-crypto">
            <h1 className="crypto-title">CryptoMonedas</h1>
            <input 
                type="text"  
                placeholder="bucar por nombre" 
                className="input-coin"
                onChange={handleCoin}
            />
        </header>

        <div className="container-crypto">
            <div className="container-coin">
                <table className="table-coin">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Coin</th>
                            <th>Price</th>
                            <th>Price Change</th>
                            <th>Total Volumen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (mondedas.length === 0)?
                            <tr  className="cero-resultados">
                                <td colSpan={5} style={{textAlign:"left"}}>No se encontraron resultados</td>
                            </tr>
                            :mondedas.map((coin,indice)=>
                            <tr key={coin.id}>
                                    <td>{indice + 1}</td>
                                    <td>
                                        <img 
                                            src={coin.image} 
                                            alt={coin.name}
                                            className="imagen-coin"
                                        />
                                        <span>{coin.name} - {coin.symbol}</span>
                                    </td>
                                    <td>{coin.current_price}</td>
                                    
                                    <td
                                        className={(coin.market_cap_change_percentage_24h > 0)? "apto" : "no-apto"}
                                        >{coin.market_cap_change_percentage_24h}</td>
                                    <td>{coin.total_volume}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <BotonTop/> 
        </div>
    </div>
}

export default ApiCoin;