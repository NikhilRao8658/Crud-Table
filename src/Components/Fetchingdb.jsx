// import { useEffect,useState } from "react";



// export default function Api() {
//     let [api,SetApi] = useState([]);
//     useEffect(()=>{
//         let db = fetch('http://localhost:2020/users')
//         db.then(val=>val.json())
//         .then(data=>{
//             SetApi(data);
//         })
//     },[])
//     return(
//         <>
//         {
//             api.map(x=>{
//                 return(
//                     <h1>{x.name}</h1>
//                 )
//             })
//         }
//         </>
//     )
// }