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


// //get element by class//
// var items=document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1])
// // items[1].style.fontweight='bold'

// items[2].style.background='green'
// // items.style.font_weight='bold'
//  for(let i=0; i<items.length;i++)
//  {
//     items[i].style.backgroundcolor="red"
//  }

//get element by tag//

// var li=document.getElementsByTagName('li')
// console.log(li)
// console.log(li)
// // li[1].style.fontweight='bold'
// li[2].style.background='yellow'

// for(let i=0; i<li.length ; i++)
// {
//     li[i].style.backgroundColor='green'
// }


///queryselector//

// var header=document.querySelector('#main-header')
// header.style.borderBottom='solid 4px #ccc'

// var input=document.querySelector('input')
// input.value='enter here'

// var inputt=document.querySelector('input[type="submit"]')
// inputt.value="send"

// var items=document.querySelector('.list-group-item:nth-child(2)')
// items.style.backgroundColor="green"

// var items=document.querySelector('.list-group-item:nth-child(3)')
// items.style.color="transparent"

/////queryselectorall///

var titles=document.querySelectorAll('.title')
console.log(titles)
titles[0].textContent='hello'

var odd=document.querySelectorAll('li:nth-child(odd)')

for(let i=0; i<odd.length;i++)
{
    odd[i].style.backgroundColor='green'
}
var even=document.querySelectorAll('li:nth-child(even)')
for(let i=0;i<even.length;i++)
{
    even[i].style.backgroundColor='yellow'
}
