function onElementClick() {
  let number = this.getAttribute('data-number')
  let element = window.tableData[number - 1]
  showElementDetails(element)
}

function showElementDetails(element) {
  document.querySelector('#cardNumber').innerHTML = element.number
  document.querySelector('#cardSymbol').innerHTML = element.symbol
  document.querySelector('#cardStars').innerHTML = element.stargazers_count
  document.querySelector('#cardBlurb').innerHTML = element.description
}

function getStarRank(count) {
  return Math.ceil(Math.min(count, 1000) / 200)
}

const colors = {
  0: '#eee',
  1: '196127',
  2: '196127',
  3: '196127',
  4: '196127',
  5: '196127',
  6: '196127'
}

function addElementToTable(data, tableDiv) {
  let elDiv = document.createElement('div')
  let symbol = document.createTextNode(data.symbol)
  let bgColor = colors[getStarRank(data.stargazers_count)]

  elDiv.appendChild(symbol)
  elDiv.setAttribute('class', 'table-element')
  elDiv.setAttribute('style', `grid-column:${data.col}; grid-row:${data.row}; background-color:${bgColor}`)
  elDiv.setAttribute('data-number', data.number)
  tableDiv.appendChild(elDiv)
  elDiv.addEventListener('click', onElementClick)
}

window.onload = () => {
  let tableDiv = document.querySelector('#periodic-table')

  window.tableData.forEach((e) => {
    addElementToTable(e, tableDiv)
  })

  showElementDetails(window.tableData[0])
}
