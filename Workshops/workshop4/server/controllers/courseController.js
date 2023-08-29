const Course = require("../models/courseModel");

/**
 * Creates a course
 *
 * @param {*} req
 * @param {*} res
 */
const coursePost = async (req, res) => {
  let course = new Course(req.body);
  await course.save()
    .then(course => {
      res.status(201); // CREATED
      res.header({
        'location': `/api/courses/?id=${course.id}`
      });
      res.json(course);
    })
    .catch( err => {
      res.status(422);
      console.log('error while saving the course', err);
      res.json({
        error: 'There was an error saving the course'
      });
    });
};

/**
 * Get all courses or one
 *
 * @param {*} req
 * @param {*} res
 */
const courseGet = (req, res) => {
  // if an specific teacher is required
  if (req.query && req.query.id) {
    Course.findById(req.query.id).populate('teacher')
      .then( (course) => {
        res.json(course);
      })
      .catch(err => {
        res.status(404);
        console.log('error while queryting the course', err)
        res.json({ error: "Course doesnt exist" })
      });
  } else {
    // get all teachers
    Course.find().populate('teacher')
      .then( courses => {
        res.json(courses);
      })
      .catch(err => {
        res.status(422);
        res.json({ "error": err });
      });
  }
};

/**
 * Updates a course
 *
 * @param {*} req
 * @param {*} res
 */
const coursePatch = (req, res) => {
  // get course by id
  if (req.query && req.query.id) {
    Course.findById(req.query.id, function (err, course) {
      if (err) {
        res.status(404);
        console.log('error while queryting the course', err)
        res.json({ error: "course doesnt exist" })
      }

      // update the course object (patch)
      course.name = req.body.name ? req.body.name : course.name;
      course.credits = req.body.credits ? req.body.credits : course.credits;
      course.teacher = req.body.teacher ? req.body.teacher : course.teacher;


      course.save(function (err) {
        if (err) {
          res.status(422);
          console.log('error while saving the course', err)
          res.json({
            error: 'There was an error saving the course'
          });
        }
        res.status(200); // OK
        res.json(course);
      });
    });
  } else {
    res.status(404);
    res.json({ error: "course doesnt exist" })
  }
};

/**
 * Deletes a course
 *
 * @param {*} req
 * @param {*} res
 */
 const courseDelete = (req, res) => {
  // get course by id
  if (req.query && req.query.id) {
    Course.findById(req.query.id, function (err, course) {
      if (err) {
        res.status(404);
        console.log('error while queryting the course', err)
        res.json({ error: "course doesnt exist" })
      }

      course.deleteOne(function (err) {
        if (err) {
          res.status(422);
          console.log('error while deleting the course', err)
          res.json({
            error: 'There was an error deleting the course'
          });
        }
        res.status(204); //No content
        res.json({});
      });
    });
  } else {
    res.status(404);
    res.json({ error: "course doesnt exist" })
  }
};

const courseGetById = async (args) => {
  try {
    const course = await courseModel.findById(args.id).exec();
    if (course) {
      return {
        _id: course._id.toString(),
        name: course.name,
        credits: course.credits,
        teacher: course.teacher.toString(),
      };
    } else {
      throw new Error('Course not found');
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  coursePost,
  courseGet,
  coursePatch,
  courseDelete,
  courseGetById
}