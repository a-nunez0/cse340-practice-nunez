import { Router } from 'express';

import {
    facultyListPage,
    facultyDetailPage
} from './controllers/faculty/faculty.js';

import {
    catalogPage,
    courseDetailPage
  } from './controllers/catalog/catalog.js';

const router = Router();

router.get('/faculty', facultyListPage);
router.get('/faculty/:facultyId', facultyDetailPage);
router.get('/catalog', catalogPage);
router.get('/catalog/:courseId', courseDetailPage);

export default router;