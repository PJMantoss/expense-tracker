import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

//onSubmit={onSubmit}
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                </div>

                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br/>
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>

                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
