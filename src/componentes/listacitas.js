import React from 'react'
import Cita from './cita'

const ListaCitas = ({dates, eraseDate}) => {
    const message = Object.keys(dates).length === 0 ? 'There is not dates' : 'Manage your dates here'

    return( 
        <div className="card mt-2 py-5">
        <div className="card-body">
            <h2 className="card-title text-center">{message}</h2>
     {/* uncomentario */}
            <div className="lista-citas">
              { dates.map(date => (
                  <Cita
                  date={date}
                  key={date.id}
                  eraseDate={eraseDate}
                  />
                  ))}
            </div>
        </div>
    </div>
    )
}

export default ListaCitas