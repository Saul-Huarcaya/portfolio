import { ProviderEcommerce} from "../../Context/ContextEcommerce";
import MainEcommerce from "./MainEcommerce/MainEcommerce";
import HeaderEcommerce from "./HeaderEcommerce/HeaderEcommerce";

function Ecommerce(){
    return (
        <ProviderEcommerce>
            <HeaderEcommerce/>
            <MainEcommerce/>  
        </ProviderEcommerce>
    ) 
}
export default Ecommerce;