import React from 'react';

const BoardIndexItem = props => {
    console.log(props);
    // const redirect = <Redirect to={`/${props.board.authorId}/${props.board.id}/edit`}/>
    // {props.board}

    return( 
        <div>
            <p>hello</p>
            <p>{props.board.title}</p>
            {/* <Link to={`/${props.board.authorId}/${props.board.id}`}>{props.board.title}</Link> */}
            {/* <button className="edit" onClick={redirect}>
                <i className="edit-icon"></i>
            </button> */}
        </div>
    )
};

export default BoardIndexItem;