import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label>Text</label>
                    <input />
                </div>

                <div></div>

                <button></button>
            </form>
        </div>
    )
}
