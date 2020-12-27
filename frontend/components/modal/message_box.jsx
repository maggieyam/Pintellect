import React from 'react';
import { deletePinFromBoard } from '../../utils/boards_api_util';



export const DeleteMessageForm = (props) => {
    return(
        <div className="delete-message-box">
            
            <h2>Are you sure?</h2>
            <p> Once you delete a Pin, you can't undo it.</p>
            <div>
                <button onClick={() => props.closeModal()}>Cancel</button>
                <button onClick={() => deletePinFromBoard(props.pinId, props.boardId).then(() => location.reload())}>
                    Delete Pin
                </button>
            </div>
        </div>
    )
}


export default DeleteMessageForm;