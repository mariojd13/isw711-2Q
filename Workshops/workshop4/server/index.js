const graphqlHTTP = require('express-graphql');
const { graphQLschema } = require('./graphql-schema.js');

const express = require('express');
const app = express();
// database connection
const mongoose = require("mongoose");
const db = mongoose.connect("mongodb://127.0.0.1:27017/university", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

//const theSecretKey = process.env.JWT_SECRET;

const { 
  courseGet,
  courseGetById,
} = require("./controllers/courseController.js");

const { 
  teacherGet,
  teacherGetById,
} = require("./controllers/teacherController.js");

// parser for the request body (required for the POST and PUT methods)
const bodyParser = require("body-parser");
const cors = require("cors");

// expose in the root element the different entry points of the
// graphQL service
const graphqlResolvers = {
  courses: courseGet,
  course: courseGetById,
  teachers: teacherGet,
  teacher: teacherGetById,
  hello: function() { return "Hola Mundo"; },
  version: function() { return "1.0"; }
};

// Middlewares
app.use(bodyParser.json());
// check for cors
app.use(cors({
  domains: '*',
  methods: "*"
}));

// JWT Authentication middleware
// app.use(function (req, res, next) {
//   if (req.headers["authorization"]) {
//     const authToken = req.headers['authorization'].split(' ')[1];
//     try {
//       jwt.verify(authToken, theSecretKey, (err, decodedToken) => {
//         if (err || !decodedToken) {
//           res.status(401);
//           res.json({
//             error: "Unauthorized"
//           });
//         }
//         console.log('Welcome', decodedToken.name);
//         next();
//       });
//     } catch (e) {
//       res.status(401);
//       res.send({
//         error: "Unauthorized "
//       });
//     }
//   } else {
//     res.status(401);
//     res.send({
//       error: "Unauthorized "
//     });
//   }
// });

app.use('/graphql', graphqlHTTP({
  schema: graphQLschema,
  rootValue: graphqlResolvers,
  graphiql: true,
}));

app.listen(3001, () => console.log(`Example app listening on port 3001!`));
