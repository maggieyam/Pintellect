import React from 'react';
import CreateBoardFormContainer from '../board_form/create_board_container';
import BoardIndexItem from './board_index_item';

class BoardIndex extends React.Component {
    constructor(props){
        super(props);
        // this.state = {boards: this.props.boards};
    }
    componentDidMount() {
        this.setState(this.props.fetchBoards());
        // this.props.fetchBoards()
    }

    render() {
        const { boards } = this.props;

        return (
          <div>
            <div>
              {boards.map((board) => {
                return <BoardIndexItem board={board} key={board.id} />;
              })}
            </div>
            <CreateBoardFormContainer />
          </div>
        );
    }
}

export default BoardIndex;