// console.log("this is demo")
// console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// document.title=123;

// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)

///get element by id///
// console.log(document.getElementById('header-title'))
// var headerTitle=document.getElementById('header-title')
// console.log(headerTitle)
var header=document.getElementById('main-header')
header.style.borderBottom='solid 3px #000'

var items=document.getElementsByClassName('list-group-item')
console.log(items)
console.log(items[1])
// items[1].style.fontweight='bold'

items[2].style.background='green'
items.style.fontweight='bold'