const Student = require("../models/studentModel");

/**
 * Creates a student
 *
 * @param {*} req
 * @param {*} res
 */
const studentPost = (req, res) => {
  let student = new Student();

  student.first_name = req.body.first_name;
  student.last_name  = req.body.last_name;
  student.cedula = req.body.cedula;
  student.age = req.body.age;

  if (student.first_name && student.last_name) {
    student.save(function (err) {
      if (err) {
        res.status(422);
        console.log('error while saving the student', err);
        res.json({
          error: 'There was an error saving the student'
        });
      }
      res.status(201); // CREATED
      res.header({
        'location': `/api/students/?id=${student.id}`
      });
      res.json(student);
    });
  } else {
    res.status(422);
    console.log('error while saving the student')
    res.json({
      error: 'No valid data provided for student'
    });
  }
};

/**
 * Get all students
 *
 * @param {*} req
 * @param {*} res
 */
const studentGet = (req, res) => {
  // if an specific student is required
  if (req.query && req.query.id) {
    Student.findById(req.query.id, function (err, student) {
      if (err) {
        res.status(404);
        console.log('error while queryting the student', err)
        res.json({ error: "student doesnt exist" })
      }
      res.json(student);
    });
  } else {
    // get all students
    Student.find(function (err, students) {
      if (err) {
        res.status(422);
        res.json({ "error": err });
      }
      res.json(students);
    });

  }
};

/**
 * Updates a student
 *
 * @param {*} req
 * @param {*} res
 */
const studentPatch = (req, res) => {
  // get student by id
  if (req.query && req.query.id) {
    Student.findById(req.query.id, function (err, student) {
      if (err) {
        res.status(404);
        console.log('error while queryting the student', err)
        res.json({ error: "student doesnt exist" })
      }

      // update the student object (patch)
      student.first_name = req.body.first_name ? req.body.first_name : student.first_name;
      student.last_name = req.body.last_name ? req.body.last_name : student.last_name;
      // update the student object (put)
      // student.first_name = req.body.first_name
      // student.last_name = req.body.last_name

      student.save(function (err) {
        if (err) {
          res.status(422);
          console.log('error while saving the student', err)
          res.json({
            error: 'There was an error saving the student'
          });
        }
        res.status(200); // OK
        res.json(student);
      });
    });
  } else {
    res.status(404);
    res.json({ error: "student doesnt exist" })
  }
};

/**
 * Deletes a student
 *
 * @param {*} req
 * @param {*} res
 */
 const studentDelete = (req, res) => {
  // get student by id
  if (req.query && req.query.id) {
    Student.findById(req.query.id, function (err, student) {
      if (err) {
        res.status(404);
        console.log('error while queryting the student', err)
        res.json({ error: "student doesnt exist" })
      }

      student.deleteOne(function (err) {
        if (err) {
          res.status(422);
          console.log('error while deleting the student', err)
          res.json({
            error: 'There was an error deleting the student'
          });
        }
        res.status(204); //No content
        res.json({});
      });
    });
  } else {
    res.status(404);
    res.json({ error: "student doesnt exist" })
  }
};

module.exports = {
  studentGet,
  studentPost,
  studentPatch,
  studentDelete
}