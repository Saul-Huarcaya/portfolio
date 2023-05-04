import {ProviderTheme} from "../../Context/ContextTheme.jsx";
import RestCountries from "./RestCountries.jsx";

function AppCountries(){
    return <ProviderTheme>
        <RestCountries/>
    </ProviderTheme>
}

export default AppCountries;