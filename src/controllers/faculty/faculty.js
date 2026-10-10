import {
    getFacultyById,
    getSortedFaculty
} from '../../models/faculty/faculty.js';

const facultyListPage = (req, res) => {
    const sortBy = req.query.sort || 'name';
    const faculty = getSortedFaculty(sortBy);

    res.render('faculty/list', {
        title: 'Faculty Directory',
        faculty: faculty,
        sortBy: sortBy
    });
};

const facultyDetailPage = (req, res, next) => {
    const facultyId = req.params.facultyId;
    const facultyMember = getFacultyById(facultyId);

    if (!facultyMember) {
        const error = new Error('Faculty member not found');
        error.status = 404;
        return next(error);
    }

    res.render('faculty/detail', {
        title: facultyMember.name,
        facultyMember: facultyMember
    });
};

export { facultyListPage, facultyDetailPage };