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

// var titles=document.querySelectorAll('.title')
// console.log(titles)
// titles[0].textContent='hello'

// var odd=document.querySelectorAll('li:nth-child(odd)')

// for(let i=0; i<odd.length;i++)
// {
//     odd[i].style.backgroundColor='green'
// }
// var even=document.querySelectorAll('li:nth-child(even)')
// for(let i=0;i<even.length;i++)
// {
//     even[i].style.backgroundColor='yellow'
// }

//////traverse the dom////

var itemsList=document.querySelector('#items')
//parent node//
// console.log(itemsList.parentNode)
// itemsList.parentNode.style.backgroundColor='#f4f4f4'
// console.log(itemsList.parentNode.parentNode)

///parent element//
// console.log(itemsList.parentElement)
// itemsList.parentElement.style.backgroundColor='#f4f4f4'
// console.log(itemsList.parentElement.parentElement)

///CHILDREN//

// console.log(itemsList.childNodes)

// console.log(itemsList.children)
// console.log(itemsList.children[1])
// itemsList.children[1].style.backgroundColor='yellow'

// //first child//

// console.log(itemsList.firstChild)
// //first element child//
// console.log(itemsList.firstElementChild)
// itemsList.firstElementChild.textContent='hello'

// ///next sibling//
// console.log(itemsList.nextElementSibling)

//previoussiblibilg//
// console.log(itemsList.previousSibling)

////previous element sibling//
// console.log(itemsList.previousElementSibling)

//create element//

//create div//
var newDiv=document.createElement('div')
//add class//
newDiv.className='hello'
//add id
newDiv.id='hii'
//add atribute//
newDiv.setAttribute('title','hello div')


//create text node//
var newDivtext=document.createTextNode('HELLO WORD')

//add text to div//
newDiv.appendChild(newDivtext)

console.log(newDiv)

var container=document.querySelector('header .container')
var h1= document.querySelector('header h1')

console.log(newDiv)
newDiv.style.fontSize='20px'

container.insertBefore(newDiv,h1)
///////

let div2=document.createElement('div')
let div2text=document.createTextNode('hello world')
div2.append(div2text)
let container2=document.querySelector('div .list-group')
let li=document.querySelector('div .list-group-item')

container2.insertBefore(div2,li)

