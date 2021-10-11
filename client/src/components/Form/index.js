import React from 'react';


const Form = ({inquiry, handleInputChange, handleSubmit}) => {

    return(
        <form>
            <div className="form-group">
                <label htmlfor="Query">
                    <strong>Book</strong>
                </label>
                <input
                className="form-control"
                id="Title"
                type="text"
                value={inquiry}
                placeholder="A Game of Thrones"
                name="inquiry"
                onChange={handleInputChange}
                required
                />
            </div>
            <div className="pull-right">
                <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-lg btn-danger float-right"
                >
                    Search
                </button>
            </div>
        </form>
    )
}

export default Form;