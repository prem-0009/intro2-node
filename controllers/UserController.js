const users = require('../models/userArray')


module.exports = {

    getAllUsers: (req, res)=>{
        // res.status(200).send('my first express sever')
        return res.status(200).json({confirmation: 'success', users}) //all strigify
    },

    //createNewUser
    createNewUser : (req, res) =>{
        //validate inputs
        if (!req.body.name || !req.body.email || !req.body.password){
            return res.status(400).json({confirmation: 'fail', message: 'All input must be filled'})
        }
        //check if user exist
        let existingUser =  users.filter((user) => user.email === req.body.email)
        if(existingUser.length){ return res.status(400).send('user already exist')}
        
        const newUser = {};
        newUser.name = req.body.name;
        newUser.email = req.body.email;
        newUser.password = req.body.password;
        newUser.id = String(users.length + 1);
        //add user to array
        users.push(newUser);
        //return the new user
        return res.status(200).json({confirmation: 'success', newUser})
        
    },


    //findOneUser
    findOneUser : (req, res) => {
        //parameter fill in info to pass to route
        // console.log(req.param.user);
        let foundUser = users.filter((user) => {
    
            if( user.id === req.params.id){
                return res.status(200).json({user})
            }
            
        })
    
        if (!foundUser.length) return res.status(400).json({message: 'user does not exist'});
        // res.send(req.params.id)
    },


    //updateUser
    updateUser : (req, res) => {
        //grab the inputted infor
        let updateuser = req.body
        //search the user array
        users.filter((foundUser) => {
            //find the user
            if (foundUser.id === req.params.id){
                //change values for user if inputted
                foundUser.name = updateuser.name ? updateuser.name : foundUser.name;
                foundUser.password = updateuser.password ? updateuser.password : foundUser.password;
                
            }
        })
        return res.status(200).json({message: 'user updates', users})
    },


    //deleteUser
    deleteUser : (req, res) => {
        //filter user based on id param in address
        let removeUser = users.filter((foundUser)=>{
            return foundUser.id !== req.params.id;
        })
        //mutate users array and replace with removeUser
        users = removeUser;
        return res.status(200).json({confirmation: 'success', users})
    }
}