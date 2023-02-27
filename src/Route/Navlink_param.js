import { useParams,useLocation,useSearchParams } from "react-router-dom"


export default function Navlink_param()
{
    const [sPar,SetsPar]=useSearchParams()
    const loc=useLocation();
    const param=useParams();
    const {name}=param;
    console.log(param,loc);
    console.warn(sPar.get('age'));
    return (
        <div>
            <div>Nav Param Page</div>
            <div>{name}</div>
        </div>
    )
}

//Location contaions hash: "#dfsja"
// key: "default"
// pathname: "/Nav/dip"
// search: "?kdfjsk/"
// state: null
// [[Prototype]]
