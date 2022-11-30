import './TodosFilter.css'
import React, { useState } from 'react'

export const TodosFilter = ({filterList}) => {
    const [activeFilter, setActiveFilter] = useState('all')

    const handleFilterAll = () => {
        filterList()
        setActiveFilter('all')
    }

    const handleFilterActive = () => {
        filterList('active')
        setActiveFilter('active')
    }

    const handleFilterComplete = () => {
        filterList('completed')
        setActiveFilter('completed')
    }

    return (
        <div className="filter-items">  
            <div className="filter-item">
                <a href='#' onClick={handleFilterAll} className={activeFilter === 'all' ? 'active' : ''}>All</a>
                <a href='#' onClick={handleFilterActive} className={activeFilter === 'active' ? 'active' : ''}>Active</a>
                <a href='#' onClick={handleFilterComplete} className={activeFilter === 'completed' ? 'active' : ''}>Completed</a>
            </div>
        </div>
    )   
}
