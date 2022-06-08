import React from 'react'
import './Notifications.css'
import { getLatestNotification } from './utils'

const Notifications = () => {

    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <button onClick={console.log("Close button has been clicked")}>X</button>
            <ul>
				<li data='default'>New course available</li>
				<li data='urgent'>New resume available</li>
				<li
					data='urgent'
					dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
				></li>
			</ul>
        </div>
    )
}

export default Notifications