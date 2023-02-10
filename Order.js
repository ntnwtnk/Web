import { useState } from 'react'
import './Order.css'

const Order=()=>{
    return(
        <div>
            <h2 className="detail-car">ผลการตรวจเช็ค</h2>
            <textarea placeholder="ระบุรายละเอียด" className="order-container"></textarea>
            
        </div>
    )
}

export default Order