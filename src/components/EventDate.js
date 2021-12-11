import { useState } from "react"
import Countdown from "./Countdown"
import moment from "moment"
const EventDate = () => {
    const [view, setView] = useState(false)
    const [infoEvento, setInfoEvento] = useState({
        name: "",
        date: ""
    })
    const fechaIngresadaXUsuario = moment(new Date(infoEvento.date), 'DD/MM/YYYY');
    const fechaActual = moment(new Date(), 'DD/MM/YYYY');

    

    const handleClick = (e) => {
        e.preventDefault()
        if (infoEvento.name === "" || infoEvento.date === "") {
            alert("Por favor, ingrese el nombre del evento y la fecha")
            setView(false)
        }
        else {
            setView(!view)
        }
    }

    const handleChange = (e) => {
        setInfoEvento({
            ...infoEvento,
            [e.target.name]: e.target.value
        })
    }

    if (view && fechaIngresadaXUsuario.isAfter(fechaActual)) {
        return <Countdown name={infoEvento.name} date={infoEvento.date} />
    }
    else {
        return (
            <form>
                <input onChange={handleChange} type="text" placeholder="Ingresa el nombre del evento" name="name" required />
                <input onChange={handleChange} type="date" placeholder="Ingresa la fecha de tu evento" name="date" required />
                <button onClick={handleClick}>Comenzar cuenta regresiva</button>
            </form>
        )
    }
}

export default EventDate
