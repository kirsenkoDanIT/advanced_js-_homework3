'use strict'

const table = document.createElement('table')
table.style.borderCollapse = 'collapse'
table.style.margin = '0 auto'
table.style.filter = 'invert(0)'


for (let i = 0; i < 30; i++) {
    const tr = document.createElement('tr')
    for (let j = 0; j < 30; j++) {
        const td = document.createElement('td')
        td.style.border = '2px solid grey'
        td.style.width = '30px'
        td.style.height = '30px'
        td.style.backgroundColor = 'rgb(255, 255, 255)'

        tr.appendChild(td)
    }
    table.appendChild(tr)
}

document.body.appendChild(table)

table.addEventListener('click', (e) => {
    
    if (e.target.style.backgroundColor === 'rgb(255, 255, 255)') {
        e.target.style.backgroundColor = 'rgb(0, 0, 0)'
    } else e.target.style.backgroundColor = 'rgb(255, 255, 255)'
})

document.body.addEventListener('click', (e) => {
    
    if (e.target === e.currentTarget) {
        if (table.style.filter === 'invert(0)') {
            table.style.filter = 'invert(1)'
        } else table.style.filter = 'invert(0)'
    }
})