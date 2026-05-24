const getFacultyById = (facultyId) => {
    return faculty[facultyId] || null;
};

const getSortedFaculty = (sortBy) => {

    const validSorts = ['name', 'department', 'title'];

    if (!validSorts.includes(sortBy)) {
        sortBy = 'name';
    }

    const facultyArray = [];

    for (const key in faculty) {
        facultyArray.push({
            ...faculty[key],
            id: key
        });
    }

    facultyArray.sort((a, b) => {

        if (a[sortBy] < b[sortBy]) {
            return -1;
        }

        if (a[sortBy] > b[sortBy]) {
            return 1;
        }

        return 0;
    });

    return facultyArray;
};

module.exports = {
    getFacultyById,
    getSortedFaculty
};