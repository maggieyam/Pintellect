import React from 'react';

export const DeleteMessageForm = (props) => {
    const { pinId, boardId, closeModal, deletePin } = props;
    return(
        <div className="delete-message-box">
            
            <h1>Are you sure?</h1>
            <p> Once you delete a Pin, you can't undo it.</p>
            <div>
                <button onClick={() => props.closeModal()}>Cancel</button>
                <button onClick={()=> {
                    deletePin(pinId, boardId)
                    .then(() => closeModal()) 
                    }} id="delete-pin">
                    Delete Pin
                </button>
            </div>
        </div>
    )
}


export default DeleteMessageForm;