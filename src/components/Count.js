const Count = ({name,dias,horas,minutos,segundos}) => {
    return (
        <div className="countdown">
            <h1 className="titleEvent">{name}</h1>
            <div className="date">
                <div className="days">
                    <div className="count">
                        <span className="number-zero">{dias}</span>
                        <span className="equal">:</span>
                    </div>
                    <div className="text-details">
                        <p>Days</p>
                    </div>
                </div>
                <div className="hours">
                    <div className="count">
                        <span className="number-zero">{horas}</span>
                        <span className="equal">:</span>
                    </div>
                    <div className="text-details">
                        <p>Hours</p>
                    </div>
                </div>
                <div className="minutes">
                    <div className="count">
                        <span className="number-zero">{minutos}</span>
                        <span className="equal">:</span>
                    </div>
                    <div className="text-details">
                        <p>Minutes</p>
                    </div>
                </div>
                <div className="seconds">
                    <div className="count">
                        <span className="number-zero">{segundos}</span>
                    </div>
                    <div className="text-details">
                        <p>Seconds</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Count
