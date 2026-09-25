import React from 'react'

export default function UnreadMessages() {
    const [unreadMsg, setUnreadMsg] = React.useState([])

    return(
        <div>
            {unreadMsg.length > 0 && <h1>You have {unreadMsg.length} unread messages </h1>}
            {unreadMsg.length === 0 && <p>You have no unread messages </p>} 
{/* --------------------------------- Or ------------------------------------------------ */}
            {unreadMsg.length > 0 ? <h1>You have {unreadMsg.length} unread messages </h1> :
            <p>You have no unread messages </p> }
            {/* When there is just 1 option then you use "null" as the alternative when the condition is false */}
            
        </div>
    )
}