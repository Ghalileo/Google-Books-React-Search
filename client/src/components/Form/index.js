import React from 'react';

const Form = ({q, handleInputChange, handleFormSubmit}) => {

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
                value={q}
                placeholder="A Game of Thrones"
                name="q"
                onChange={handleInputChange}
                required
                />
            </div>
            <div className="pull-right">
                <button
                onClick={handleFormSubmit}
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