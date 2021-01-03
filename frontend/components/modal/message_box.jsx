import React from 'react';
import { deletePinFromBoard } from '../../utils/boards_api_util';

const deletePin = (pinId, boardId, closeModal) => {
    debugger
    return e => {
        deletePinFromBoard(pinId, boardId)
        .then(() => {
            e.preventDefault;
            closeModal();
            location.reload();
        })
    }
    
}

export const DeleteMessageForm = (props) => {
    const { pinId, boardId, closeModal } = props;
    return(
        <div className="delete-message-box">
            
            <h2>Are you sure?</h2>
            <p> Once you delete a Pin, you can't undo it.</p>
            <div>
                <button onClick={() => props.closeModal()}>Cancel</button>
                <button onClick={deletePin(pinId, boardId, closeModal)}>
                    Delete Pin
                </button>
            </div>
        </div>
    )
}


export default DeleteMessageForm;