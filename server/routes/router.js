const express = require('express');
const route = express.Router();

const services = require('../services/render')
const controller = require('../controller/controller')
    /** 
     * @description Root Route
     * @method GET /
     */
    //route creation
route.get('/', services.homeRoutes);

/** 
 * @description add users Route
 * @method GET/ add-user
 */

route.get('/add_user', services.add_user)


/** 
 * @description for update_user
 * @method GET /update_user
 */

route.get('/update_user', services.update_user)


//exporting the routes so that we can use these routes to server.js



//API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route;
