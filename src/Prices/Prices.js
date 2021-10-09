import React from 'react'
import './Prices.css'
// 
import Price from '../Price/Price'

function Prices() {
    return (
        <div className='prices'>
            <Price weight='0-1' price='4.9' />
            <Price weight='1-5' price='4.5' />
            <Price weight='5+' price='4.1' />
        </div>
    )
}

export default Prices
