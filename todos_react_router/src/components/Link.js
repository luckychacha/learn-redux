import React from 'react'

const linkMap = {
    'SHOW_ALL': 'all',
    'SHOW_ACTIVE': 'active',
    'SHOW_COMPLETED': 'completed'
}


const Link = ({ active, ownFilter, onClick }) => {
    if(active) {
        return (
            <li><span>{linkMap[ownFilter]}</span></li>
        )
    }

    return (
        <li>
            <a href="#" onClick={e => {
                e.preventDefault()
                onClick()
            }}>
                {linkMap[ownFilter]}
            </a>
        </li>
    )
}

export default Link