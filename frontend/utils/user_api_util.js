export const updateUser = (user) => { 
  return $.ajax({
    url: `/api/users/${id}`,
    method: 'PATCH',
    data: {id}
  })
}