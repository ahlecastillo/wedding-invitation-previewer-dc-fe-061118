function previewFirstName(event) {
  console.log(event.srcElement.value)
  document.getElementById('first_name_preview').innerText = event.srcElement.value
}
document.getElementById('first_name').addEventListener('keyup', previewFirstName)

function previewSecondName(event) {
  console.log(event.srcElement.value)
  document.getElementById('second_name_preview').innerText = event.srcElement.value
}
document.getElementById('second_name').addEventListener('keyup', previewSecondName)

function previewLastName(event) {
  console.log(event.srcElement.value)
  document.getElementById('last_name_preview').innerText = event.srcElement.value
}
document.getElementById('last_name').addEventListener('keyup', previewLastName)


//['Bobby is from Pittsburgh', 'Sammy is from New York', 'Sally is from Cleveland', 'Annette is from Los Angeles', 'Bobby is from Tampa Bay']