const express = require('express')
const route = express.Router()
const services= require('../services/render')
const controller = require('../controller/controller')




// describinng the home routes @GET method
route.get('/',services.homeRoutes)

// describinng the add user routes @GET method
route.get('/add-user',services.add_user)

// describinng the update user routes @GET method
// route.get('/update-user',services.update_user)
route.get('/update-user/:id', services.update_user);
route.post('/update-user/:id', services.save_user);
route.get('/delete-user/:id', services.delete_user);

//API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route