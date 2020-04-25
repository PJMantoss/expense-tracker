import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={} />
                </div>

                <div className="form-control">
                    
                </div>

                <button></button>
            </form>
        </div>
    )
}
