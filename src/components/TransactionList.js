import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
    const { transaction } = useContext(GlobalContext);

    return (
        <div>
            <h3></h3>
            <ul className="list">
                <li>
                    Cash <span>$400</span><button className="delete-btn">x</button>
                </li>
            </ul>
        </div>
    )
}
