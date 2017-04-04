import React from 'react'

const SelectSubreddit = ({selectedSubreddit, options, onChange}) => {
    return (
        <span>
            <h1>{selectedSubreddit}</h1>
            <select value={selectedSubreddit}
                    onChange={e=>onChange(e.target.value)}>
                {
                    options.map((value,key)=>(
                        <option
                            key={key}
                            value={value}>
                            {value}
                        </option>
                    )
                )}
            </select>
        </span>
    )
}

export default SelectSubreddit