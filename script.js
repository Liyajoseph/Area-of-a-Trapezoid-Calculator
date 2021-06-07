let base1 = 0
let base2 = 0
let height = 0
let area = 0
document.getElementById('button').addEventListener('click', area1)

function area1 () {
  base1 = document.getElementById('text1').value

  base1 = parseInt(base1)

  base2 = document.getElementById('text2').value

  base2 = parseInt(base2)

  height = document.getElementById('text3').value

  height = parseInt(height)

  area = (base1 + base2)/2*height

  alert(area)
}
