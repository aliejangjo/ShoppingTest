import React from 'react'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'
import './Pagination.css'
const PaginationHandler = (props) => {
    const nPage = Math.ceil(props.data.length / props.recordsPerPage)
    const numbers = [...Array(nPage + 1).keys()].slice(1)
    return (
        <div className='Pagination'>

            <button className='arrow-btn' onClick={() => props.currentPage !== 1 ? props.setCurrentPage(props.currentPage - 1) : []}><ChevronLeft className='icon' /></button>
            {numbers.map((item, index) => {
                return (
                    <button onClick={() => props.setCurrentPage(item)} className={`number-btn ${props.currentPage === item ? 'active' : ''}`} key={index}>{item}</button>
                )
            })}
            <button className='arrow-btn' onClick={() => props.currentPage !== nPage ? props.setCurrentPage(props.currentPage + 1) : []} ><ChevronRight className='icon' /></button>
        </div>
    )
}

export default PaginationHandler