import React from 'react'

import Link from './Link'

const FilterLink = ({ currState, filterOnClick }) => {
    return (
        <ul>
            {
                ['SHOW_ALL', 'SHOW_ACTIVE', 'SHOW_COMPLETED'].map((v, k) =>
                    <Link
                        key={k}
                        active={v === currState}
                        ownFilter={v}
                        onClick={()=>filterOnClick(v)}
                    />
                )
            }
        </ul>
    )
}

export default FilterLink