// // import {connect} from 'react-redux';
// // import BoardShow from './board_show';


// // const mapStateToProps = ({entities}, {match}) => {
// //   BoardShow;
// //   return {
// //     user: entities.users[match.params.authorId],
// //     board: entities.boards[match.params.boardId],
// //   };
// // };
// // export default connect(mapStateToProps, null)(BoardShow);
// import {connect} from 'react-redux';
// import BoardShow from './board_show';
// import {requestBoard} from '../../actions/boards_actions'
// const mapStateToProps = ({entities}, {match}) => {
//   
//   return {
//     user: entities.users[match.params.authorId],
//     board: entities.boards[match.params.boardId],
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     requestBoard: (boardId) => dispatch(requestBoard(boardId)),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);