
const path = require('path');
const {readFileSync, writeFileSync} = require('fs');


// show student List 
const showStudentList = (req, res) => {

    const studentData  =  JSON.parse( readFileSync(path.join(__dirname, '../DB/studen.json')))

    res.render('student/index', {
        studentData 
    })
};


// Get From data  
const getStudentData = (req, res) => {
    const { name, email, phone, location } = req.body
    const studentData  =  JSON.parse( readFileSync(path.join(__dirname, '../DB/studen.json')))

    const lastId = Math.floor(Math.random() * 1000000000 )

    // push new data
    studentData.push({
        id : lastId,
        name : name,
        email : email,
        phone : phone,
        location : location,
        photo : req.file ? req.file.filename : 'avatar.png'
    })

    
    writeFileSync(path.join(__dirname, '../DB/studen.json'), JSON.stringify(studentData))

  res.redirect('/student')
    
    
};

// show create page 
const createStudentList = (req, res) => {
    res.render('student/create')
};



// delete student data 
const deletetData = (req, res) => {
 
}


// delete student data 
const viewSigleData = (req, res) => {
    // get json fata
    const studentData  =  JSON.parse( readFileSync(path.join(__dirname, '../DB/studen.json')))

    res.render('student/single', {
        studentData 
    })
}



// delete student data 
const editData = (req, res) => {
  
}






module.exports = { showStudentList, createStudentList, getStudentData, deletetData,viewSigleData, editData };