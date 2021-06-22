// import React, { useContext } from "react"
// import { Link } from "react-router-dom"
// import { ProductContext } from "../products/ProductProvider"

// export const EventProduct = () => {
//     const { getEventById } = useContext(EventContext)
//     const { getProducts } = useContext(ProductContext)
//     const [event, setEvent] = useState({})
//     const { eventId } = useParams();

//     useEffect(() => {
//         getEventById(eventId)
//             .then(getProducts)
//             .then((response) => {
//                 setEvent(response)
//             })
//     }, [])

//     return (
//         <ul className="event_products">
//             {event.products?.map(product => <li key={product.id}>{product.name}</li>)}
//         </ul>
//     )
// }