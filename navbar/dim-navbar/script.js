var dropdown = document.getElementById('dropdown')

if(dropdown.children){
  var i
  var len = dropdown.children.length
  
  for(i = 0; i < len; i++) {
    dropdown.children[i].addEventListener('click', function(){
      alert('Redirect to ' + this.innerHTML)
    })
  }
}