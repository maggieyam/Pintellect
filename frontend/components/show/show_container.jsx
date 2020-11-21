import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ShowBoard from './show'
import React from "react";


const mapStateToProps = (state, ownProps) => {
  
  return {   
    user: [ownProps.match.params.authorId],
    board: state.entities.boards[ownProps.match.params.boardId] 
  };
};

export default connect(mapStateToProps, null)(ShowBoard);