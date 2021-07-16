const User = require('../models').User;

const signup = (req, res) => {
    User.create(req.body)
        .then(newUser => {
            res.json(newUser)
        })
}

const login = (req, res) => {
    console.log("Login Touching Base1")
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
        .then(foundUser => {
            res.json(foundUser)
            console.log("Login Touching Base2")
        })
}

const getProfile = (req, res) => {
    User.findByPk(req.params.index)
        .then(userProfile => {
            res.json({
                user: userProfile

            })
        })
}


const editProfile = (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.index
            // id: req.user.id -> trying something here
        },
        returning: true
    })
        .then(updatedUser => {
            res.json(updatedUser)
        })
}

const deleteUser = (req, res) => {
    User.destroy({
        where: {
            id: req.params.index
        }
    })
        .then(deletedUser => {
            console.log("User has been DELETED")
            res.json(deletedUser)
        })
}

module.exports = {
    signup,
    login,
    getProfile,
    editProfile,
    deleteUser
}