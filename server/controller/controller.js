const Userdb = require('../model/model')

// create and save new user  
exports.create = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty !"})
        return;
    }
    // new user
    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status,
    })

    //save user in database
    user
        .save(user)
        .then(date=>{
            // res.send(date)
            res.redirect('/add-user')
        })
        .catch(error=>{
            res.status(500).send({
                message: error.message||"some error occured while creating a create operation"
            });
        });
}
// retrieve and return all user/retrieve and return a user  
exports.find = (req,res)=>{

    if(req.query.id){
        const id = req.params.id;
        Userdb.findById(id)
            .then(data=>{
                if(!data){
                    res.status(404).send({message:`No user found with id= ${id}`})
                }else{
                    res.send(data)
                }
            })
            .catch(error=>{
                res.status(500).send({message:`Error retreiving user with id ${id}`})
            })
    }else{

        Userdb.find()
            .then(user=>{
                res.send(user)
            })
            .catch(error=>{
                res.status(500).send({message:error.message||"Error occured while retriving user information"})
            })
    }

}

//update a new identified user by user id 
exports.update = (req,res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({message:"Data cannot be updated"})
    }
    const id= req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
        .then(data=>{
            if(!data){
                res.status(404).send({message:`Cannot update user with ${id}, may be user not found`})
            }else{
                res.send(data)
            }
        })
        .catch(error=>{
            res.status(500).send({message:"Error update user information"})
        })
}

//Delete the user with specified user id in request
exports.delete = (req,res)=>{
    const id= req.params.id;
    Userdb.findByIdAndDelete(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:`Can not delete with id ${id}. may be wrong id`})
            }else{
                res.send({
                    message:`User was deleted successfully !`
                })
            }
        })
        .catch(error=>{
            res.send({
                message:`Could not delete user with id ${id}`
            });
        });
}




























































