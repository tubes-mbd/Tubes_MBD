const { userHandler, customerHandler } = require('../handler');
const { listAllUser, addUser, updateUser, getUser, deleteUser, signupUser } = userHandler;
const { signupCustomer, signupExistingCustomer, loginCustomer } = customerHandler;

module.exports = {
    listAllUser,
    addUser,
    getUser,
    updateUser,
    deleteUser,
    signupUser,
    signupCustomer,
    signupExistingCustomer,
    loginCustomer
}