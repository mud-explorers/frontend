import React from 'react'
import PlayerDescription from '../playerDescriptionComponents/PlayerDescription'
import RoomDescription from '../roomDescriptionComponents/RoomDescription'

export default function DescriptionContainer() {
    return (
        <div className="description_container">
            <RoomDescription />
            <PlayerDescription />
        </div>
    )
}
