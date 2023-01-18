import "./Error404.css";
import {Link} from "react-router-dom";

function Error404(){
    return <div className="container error404">
        <div className="descriptions">
            <p className="title_404">404</p>
            <p className="not_found">Page not found</p>
            <p className="description_error">The resource requested could not be found on this Server!</p>
            <Link to="/" className="btn_home">Home</Link>
        </div>
    </div>
}

export default Error404;