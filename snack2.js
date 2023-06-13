const students=[
    {
        id:213,
        name:'Marco della Rovere',
        grades:78,
},
    {
        id:110,
        name:'Paola Cortellessa',
        grades:96,
},
    {
        id:250,
        name:'Andrea Mantegna',
        grades:48,
},
    {
        id:145,
        name:'Gaia Borromini',
        grades:74,
},
    {
        id:196,
        name:'Luigi Grimaldello',
        grades:68,
},
    {
        id:102,
        name:'Piero della Francesca',
        grades:50,
},
    {
        id:120,
        name:'Francesca da Polenta',
        grades:84,
}
]
const gradeStudents= students.filter(student =>student.grades >=70);
const idStudents=students.filter(student=>student.grades>=70 && student.id>120);
const labelstudents= students.map(student=>student.name.toUpperCase())


console.log(gradeStudents);
console.log(idStudents);
console.log(labelstudents);