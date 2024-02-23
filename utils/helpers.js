exports.sum = (a, b) => {
    return a+b;
}

exports.deleteUserById = (users=[], id='') => {
    return users.filter(user=>user.id !== id);
}

exports.findUserById = (users=[], id="") => {
    return users.find((user)=>user.id===id);
}