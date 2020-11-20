import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Show from './show'
import React from "react";


const mapStateToProps = ({ user }) => {
  return {
    name: "maggie"
  };
};

export default connect(mapStateToProps, null)(Show);