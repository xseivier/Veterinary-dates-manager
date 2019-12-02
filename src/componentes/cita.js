import React from 'react'

const Cita = ({date, eraseDate}) => (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{date.pet}</h3>
            <p className="card-text"><span>Owner name: </span> {date.owner} </p>
            <p className="card-text"><span>Date: </span> {date.date} </p>
            <p className="card-text"><span>Time: </span> {date.time} </p>
            <p className="card-text"><span>Symptom: </span> </p>
            <p className="card-text">{date.symptom}</p>

            <button
             className='btn btn-danger'
             onClick={()=> eraseDate(date.id)}
            >Delete &time;</button>
        </div>
    </div>
)

export default Cita