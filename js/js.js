document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
  
    console.log('Name:', name);
    console.log('Email:', email);
  
  });
  