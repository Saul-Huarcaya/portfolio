import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import CabeceraTierList from "./CaberceraTierList";
import AddRowTierList from "./AddRowTierList";
import RowTierList from "./RowTierList";

function TierList(){
    return (<DndProvider backend={HTML5Backend}>
        <div className="container">
            <CabeceraTierList />
            <AddRowTierList/>
            <RowTierList/>
        </div>
    </DndProvider>)
}
export default TierList;