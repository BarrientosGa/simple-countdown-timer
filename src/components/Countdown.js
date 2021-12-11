import moment from "moment";
import { useState, useEffect } from "react";
import Count from "./Count";

const Countdown = ({ name, date }) => {
    const fechaIngresadaXUsuario = moment(new Date(date), "YYYY-MM-DD");
    const fechaActual = moment(new Date(), "YYYY-MM-DD");
    const duration = moment.duration(fechaIngresadaXUsuario.diff(fechaActual));

    const [fecha, setFecha] = useState({
        nombre: name,
        dias: duration.days(),
        horas: duration.hours(),
        minutos: duration.minutes(),
        segundos: duration.seconds()
    })
    const { dias, horas, minutos, segundos } = fecha;

    useEffect(() => {
        const timeOut = setTimeout(() => {
            if (segundos > 0) {
                setFecha({
                    dias,
                    horas,
                    minutos,
                    segundos: segundos - 1
                })
            }
            else
                if (segundos === 0 && minutos > 0) {
                    setFecha({
                        dias,
                        horas,
                        minutos: minutos - 1,
                        segundos: 59
                    })
                }
                else
                    if (minutos === 0 && horas > 0) {
                        setFecha({
                            dias,
                            horas: horas - 1,
                            minutos: 59,
                            segundos: 59
                        })
                    }
                    else
                        if (horas === 0 && dias > 0) {
                            setFecha({
                                dias: dias - 1,
                                horas: 23,
                                minutos: 59,
                                segundos: 59
                            })
                        }
                        else {
                            clearTimeout(timeOut);
                            alert("Felicidades has llegado el gran dia")
                        }

        }, 1000);
    }, [dias, horas, minutos, segundos]);


    return (
        <div>
            <Count name={name} dias={dias} horas={horas} minutos={minutos} segundos={segundos} />
        </div>
    )
}

export default Countdown
