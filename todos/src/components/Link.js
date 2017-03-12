import React from 'react'

const linkKM = (ownState) => {
    switch(ownState) {
        case 'SHOW_ALL' :
            return 'all'
        case 'SHOW_COMPLETED' :
            return 'completed'
        case 'SHOW_ACTIVE' :
            return 'active'
        default:
            return 'hehe'
    }
}

const Link  = ({active, onClick, ownState}) => {
    if(active) {
        return (
            <li>
                <span>{linkKM(ownState)}</span>
            </li>
        )
    }

    return (
        <li>
            <a
                href="#"
                onClick={e=> {
                        e.preventDefault()
                        onClick()
                    }
                }
            >
                {linkKM(ownState)}
            </a>
        </li>
    )
}

export default Link