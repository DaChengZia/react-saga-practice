export const initAction = data => ({
    type: 'INITACTION',
    data
})
  
export const changeName = (value) => {
    return ({
        type: 'CHANGE_NAME',
        data: value
    })
}