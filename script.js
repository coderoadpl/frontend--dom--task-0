const section = document.getElementById('main-list')

console.log('section', section)
console.dir(section)

const listItems = document.getElementsByClassName('list-item')
const listItemFirst = listItems[0]

console.log('listItems', listItems)

console.log('listItemFirst', listItemFirst)

for (let i = 0; i < listItems.length; i++) {
    console.log('listItem ' + (i + 1), listItems[i])
}

const listItemsByTagName = document.getElementsByTagName('li')

console.log('listItemsByTagName', listItemsByTagName)