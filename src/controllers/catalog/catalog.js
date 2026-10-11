import {
  getAllCourses,
  getCourseById
} from '../../models/catalog/catalog.js';

const catalogPage = (req, res) => {
  const courses = getAllCourses();

  res.render('catalog', {
    title: 'Course Catalog',
    courses
  });
};

const courseDetailPage = (req, res, next) => {
  const course = getCourseById(req.params.courseId);

  if (!course) {
    const error = new Error('Course not found');
    error.status = 404;
    return next(error);
  }

  res.render('course-detail', {
    title: course.title,
    course
  });
};

export { catalogPage, courseDetailPage };
