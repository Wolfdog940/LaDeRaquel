import { icons } from "../../assets/icons/icons";
import TopBar from "../topBar/topBar";

export default function TopBarView(){
    return(
        <>
            <TopBar
                title='Inicio'
                icon ={icons.alert}
            />
        </>
    )   
}