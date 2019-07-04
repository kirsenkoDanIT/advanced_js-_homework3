'use strict'

const table = document.createElement('table')

for (let i = 0; i < 30; i++) {
    const tr = document.createElement('tr')
    for (let j = 0; j < 30; j++) {
        const td = document.createElement('td')

        tr.appendChild(td)
    }
    table.appendChild(tr)
}

document.body.appendChild(table)

table.addEventListener('click', (e) => {

    e.target.classList.toggle('paint-cell')
    e.stopPropagation()
})

document.body.addEventListener('click', () => {
    table.classList.toggle('invert-table')
})