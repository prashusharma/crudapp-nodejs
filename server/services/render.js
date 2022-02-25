const { default: axios } = require('axios')
const Usermodal = require("../model/model")
const axiod = require('axios')

exports.homeRoutes = (req, res)=>{
    axios.get('http://localhost:3000/api/users')
        .then(function (response) { 
            res.render('index', {users:response.data})
         })
         .catch(error=>{
             res.send(error)
         })
}
exports.add_user = (req, res)=>{
    res.render('add_user')
}
exports.update_user = async (req, res)=>{
    // axios.get('http://localhost:3000/api/users', {params:{id:req.query.id}})
    //     .then(function(userdata){
    //         res.render('update_user', { user : userdata.data})
    //         // console.log(user);
    //     })
    //     .catch(error=>{
    //         res.send(error)
    //     })
    const user =await Usermodal.findById(req.params.id);
    res.render('update_user', { user : user});
    
}

exports.save_user = async (req, res)=>{
    const { name, email, gender, status } = req.body;
    await Usermodal.findByIdAndUpdate(req.params.id, { name, email, gender, status });
    // console.log(user);
    res.redirect('/');
    
}

exports.delete_user = async (req, res)=>{
    await Usermodal.findByIdAndDelete(req.params.id);
    // console.log(user);
    res.redirect('/');
    
}