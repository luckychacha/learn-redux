import React from 'react'
import { Link } from 'react-router'

const linkMap = {
    'SHOW_ALL': 'all',
    'SHOW_ACTIVE': 'active',
    'SHOW_COMPLETED': 'completed'
}

const FilterLink = ({ currState, filterOnClick }) => {
    return (
        <ul>
            {
                ['SHOW_ALL', 'SHOW_ACTIVE', 'SHOW_COMPLETED'].map((v, k) =>
                    <Link
                        key={k}
                        to={v === 'SHOW_ALL' ? '/' : linkMap[v]}
                        activeStyle={{
                          textDecoration: 'none',
                          color: 'black'
                        }}
                        onClick={()=>filterOnClick(v)}
                    >
                        {linkMap[v]}{" "}
                    </Link>
                )
            }
        </ul>
    )
}

export default FilterLink;