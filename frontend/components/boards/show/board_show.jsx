// // import React from "react";
// // // import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// // // import {faDotCircle} from '@fortawesome/free-solid-svg-icons';
// // class BoardShow extends React.Component {
// // BoardShow
// // render(){
// //     return(
// //         <div>{this.props.board.title}
// //         {/* <FontAwesomeIcon icon={faDotCircle} id="etc" size="2x" onClick={() => openModal('update')} id="udpate"/> */}
// //         </div>
// //     )
// //     }
// // }
// // export default BoardShow;

// import React from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faEllipsisH, faPlusCircle,faStar } from '@fortawesome/free-solid-svg-icons';

// class BoardShow extends React.Component{
//     constructor(props){
//         super(props);
        
//     }

//     componentDidMount(){
//         const boardId = this.props.match.params.boardId;
//         // const board = requestBoard(boardId);
//         this.props.requestBoard(boardId);
//     }

//     render () {
      

//         return (
//           <div>
//             <div id="show-1">
//                 {console.log(board.title)}
//               <h1>{board.title}</h1>
//               <FontAwesomeIcon
//                 icon={faEllipsisH}
//                 id="etc"
//                 size="2x"
//                 onClick={() => openModal('update')}
//                 id="udpate"
//               />
//             </div>

//             <div id="show-2">
//               <button>{user.username[0]}</button>
//               <FontAwesomeIcon
//                 icon={faPlusCircle}
//                 className=""
//                 size="2x"
//                 onClick={() => openModal('create')}
//               />
//             </div>

//             <div id="show-3">
//               <FontAwesomeIcon
//                 icon={faPlusCircle}
//                 size="2x"
//               />
//               <FontAwesomeIcon
//                 icon={faStar}
//                 size="2x"
//               />
//             </div>


//           </div>
//         );
//     }
// }

// export default BoardShow;