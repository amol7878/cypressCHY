//map
// let student = [{
//     firstName: "chinmay",
//     lastName: "deshpande",
//     birthYear: 1989,
// },
// {
//     firstName: "amol",
//     lastName: "rao",
//     birthYear: 1990

// },
// {
//     firstName: "Poorva",
//     lastName: "vyas",
//     birthYear: 1991
// }
// ]

//[34,35,36]

//pogram 1

// let ages=student.map(function(el,index,arr){
//     return 2023-el.birthYear
// })
// console.log(ages)

// //Program 2
// //Add age of every user to object

// student.forEach(function(el){
//     el.age=2023-el.birthYear
// })
// console.log(student)

// //Program 3
// //Name of user above 33 or equal to 33
// let above330rEqual=student.filter(function(el){
//      return el.age>=33
// })
// console.log(above330rEqual)
// above330rEqual.forEach(function(el){
//     console.log(el.firstName)
// })

//program 4
// student.forEach(function(el){
//     el.age=2023-el.birthYear
//     if(el.age >= 33){
//         console.log(el.firstName)
//     }
// })

//program 5

///           0          1
// let cities=["pune","chandrapure","jaipire","nagpure","goa","calcutta"]
// let abovelengthfive=cities.filter(function(el){
//     return el.length<5
// })
// console.log(abovelengthfive)

// let cities2=cities.find(function(el){
// return el.length>5
// })
// console.log(cities2)


// let indexFo=cities.findIndex(function(el){
//     return el.length>5
// })
// console.log(indexFo)

let student = {
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg",
            "salary":1000
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}

let e=student.data.every(function(el){
   return typeof el.id === 'number'
})

console.log(e)

let info={
    firstName:"chinmay",
    lastName:'deshpande'
}

let e2=student.data.some(function(el){
    return  el.salary !=undefined
})

console.log(e2)

let e3=student.data.reduce(function(acc,el){
    return acc+el.id
},0)
console.log(e3)