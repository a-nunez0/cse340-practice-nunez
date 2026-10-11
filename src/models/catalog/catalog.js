const courses = {
  CS121: {
    id: "CS121",
    title: "Introduction to Programming",
    department: "Computer Science",
    credits: 3,
    sections: [
      { time: "9:00 AM", room: "STC 392", professor: "Brother Jack" },
      { time: "11:00 AM", room: "STC 390", professor: "Brother Keers" }
    ]
  },
  CS162: {
    id: "CS162",
    title: "Introduction to Computer Science",
    department: "Computer Science",
    credits: 3,
    sections: [
      { time: "10:00 AM", room: "STC 392", professor: "Brother Jack" },
      { time: "1:00 PM", room: "STC 394", professor: "Sister Enkey" }
    ]
  }
};

const getAllCourses = () => Object.values(courses);

const getCourseById = (courseId) => courses[courseId] || null;

export { getAllCourses, getCourseById };
