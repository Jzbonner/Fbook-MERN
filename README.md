# Facebook Comment Section - MERN Stack 
A simple full stack web application built using [MongoDB](https://www.mongodb.com/), [Express.js](https://expressjs.com/), [React.js](https://reactjs.org/), and [Node.js](https://nodejs.org/en/). A cloud based MongoDB server deployed through [mLab](https://mlab.com/welcome/) enables full CRUD functionality through the Express App Engine. This is a custom boilerplate environment for full stack applications however there is a more in depth boilerplate command line interface available at [MERN](http://mern.io/). 

![MERN](https://github.com/Jzbonner/Fbook-MERN/blob/master/img-media/MERN-boilerplate.png?raw=true)

**Installing and Deploying the MERN-CLI Tool**
```javascript 
1. npm install -g mern-cli

2. mern init your_new_app

3. cd your_new_app

4. npm install

5. npm start
```
### Overview 
This web application provides a mockup of the Facebook Comment Section functionality. By using a simple database schema and a frontend, built with React JS, users can input both a *name_id* and *comment* that will display in browser. Included in the `package.json` file are scripts that enable users to start a mongodb server with nodemon enabled, as well as start a react server for real-time development. 

```javascript
// Taking from the package.json file @ root
"scripts": {
    "start:server": "cd backend && nodemon server.js --exec babel-node --presets es2015,stage-0",
    "start:client": "cd client && npm start",
    "start:dev": "concurrently \"npm start:server\" \"npm start:client\"",
    "stop": "taskkill -F -IM node.exe"
  },
```

![Diagram2](https://github.com/Jzbonner/Fbook-MERN/blob/master/img-media/fbook-ex.png)
