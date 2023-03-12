const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const contactController = require('../controllers/contactController');

// CRUD operations
router.post('/', contactController.createContact);
router.get('/', authMiddleware, contactController.getContacts);
router.get('/:id', authMiddleware, contactController.getContactById);
router.put('/:id', authMiddleware, contactController.updateContact);
router.delete('/:id', authMiddleware, contactController.deleteContact);

module.exports = router;