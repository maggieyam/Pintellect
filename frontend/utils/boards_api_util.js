export const fetchBoards = () => {
  return $.ajax({
    url: "/api/boards",
    method: "GET",
  });
};

export const fetchBoard = (boardId) => {
  return $.ajax({
    url: `/api/boards/${boardId}`,
    method: "GET",
    error: (err) => console.log(err)
  });
};

export const deleteBoard = boardId => {
    return $.ajax({
      url: `/api/boards/${boardId}`,
      method: "DELETE",
    });
}

export const updateBoard = (board) => {
    return $.ajax({
        url: `/api/boards/${board.id}`,
        method: 'PATCH',
        data: { board }
    })
}

export const createBoard = (board) => {
    return $.ajax({
        url: `/api/boards`,
        method: 'POST',
        data: {board}
    })
}
