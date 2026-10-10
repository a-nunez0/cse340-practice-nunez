import { Router } from 'express';

import {
    facultyListPage,
    facultyDetailPage
} from './controllers/faculty/faculty.js';

const router = Router();

router.get('/faculty', facultyListPage);
router.get('/faculty/:facultyId', facultyDetailPage);

export default router;