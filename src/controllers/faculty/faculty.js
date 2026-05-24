const {
    getFacultyById,
    getSortedFaculty
} = require('../../models/faculty/faculty');

const facultyListPage = (req, res) => {
    const sortBy = req.query.sort || 'name';
    const facultyList = getSortedFaculty(sortBy);

    res.render('faculty/list', {
        title: 'Faculty Directory',
        facultyList,
        sortBy
    });
};

const facultyDetailPage = (req, res) => {
    const facultyId = req.params.facultyId;
    const facultyMember = getFacultyById(facultyId);

    if (!facultyMember) {
        return res.status(404).render('404', {
            title: 'Faculty Not Found'
        });
    }

    res.render('faculty/detail', {
        title: facultyMember.name,
        faculty: facultyMember
    });
};

module.exports = {
    facultyListPage,
    facultyDetailPage
};