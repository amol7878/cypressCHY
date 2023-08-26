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
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
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

 //console.log(student.data[3].email)

// let q1=student.data.find(function(el,index,arr){
//     return el.first_name=="George"
// })
// console.log(q1)

// let q2=student.data.find(function(el,index,arr){
//     return el.last_name == "Howell"
// })
// console.log(q2)


// //ad this to property and value to every object-country:india

// let h=student.data.map(function(el,index,arr){
//     el.country = "India"
//     return el
// })
// console.log(h)

//foreEach
student.data.forEach(function(el){
    el.country="india"
})
console.log(student)

//Program 1

let  names=["Chinmay","poorva","mayuri","sanket","ram"]
console.log(names[0])

let names2=names
names2[1]="Sarika"
console.log(names)
console.log(names2)


//program 2

let x=10
let y=x
y=100

console.log(x)
console.log(y)


//Program 2

let fruits=["apple","mango","banana","grapes"]

let basket=fruits

basket[0]="jackfruit"

console.log(basket)
console.log(fruits)

//Program 3

let info={
    firstName:"chinmay",
    lastName:"deshpande"
}
let student2=info
student2.city="pune"

console.log(info)
console.log(student2)

//Program 4

let Numbers=[44,55,66,77]
function changeNumber(arr){
    //let arr=Numbers
    arr[3]=999
    console.log(arr)//[44,55,66,999]

}
console.log(Numbers)//[44,55,66,77]
changeNumber(Numbers)
console.log(Numbers)//[44,55,66,999]

