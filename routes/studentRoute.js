const express = require('express');
const {showStudentList, createStudentList, getStudentData, deletetData,  viewSigleData, editData} = require('../controller/studentController');
const multer = require('multer')
const path = require('path');



// Multer configaretion 
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/student'))
    }, 
    filename : (req, file, cb) => {
        cb(null, Date.now() + '_' + Math.floor(Math.random() * 10000) + '_' + file.originalname)
    }
});

const useStudentMulter = multer({
    storage : storage
}).single('studentPhoto')



// init router
const router = express.Router();


// Create Router
router.get('/', showStudentList)

router.get('/create', createStudentList)
router.post('/create', useStudentMulter, getStudentData)

router.post('/:id', viewSigleData)
router.post('/delete/:id', deletetData)
router.post('/edit/:id', editData)







module.exports = router;