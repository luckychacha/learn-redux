import React from 'react'

import Link from './Link'

const FilterLink = ({currState, onFilterClick}) => {
    return (
        <ul>
            {//不加这个大括号map中的v,k无法被识别？
                ['SHOW_ALL','SHOW_COMPLETED','SHOW_ACTIVE'].map((v,k) =>
                    <Link
                        key={k}
                        ownState={v}
                        onClick={() => {onFilterClick(v)}}
                        active={currState === v}
                    />
                )
            }
        </ul>
    )
}

export default FilterLink