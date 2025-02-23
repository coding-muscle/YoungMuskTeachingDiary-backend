const express = require('express');
const focusController = require('../controllers/focusController')

const router = express.Router();

router.post('/create-focus', focusController.createFocus);
router.post('/get-focus', focusController.getFocusById);
router.put('/update-focus', focusController.updateFocus);
router.delete('/delete-focus', focusController.deleteFocus);


module.exports = router;