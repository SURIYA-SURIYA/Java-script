document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation
   // if (username.trim() === '' || password.trim() === '') {  //trim() concatinate on empty space 
   //     document.getElementById('error').textContent = 'Username and password are required.';
   //     return;
   // } 

  {
    }

    // Perform login logic (dummy example)
    if (username === 'admin' && password === 'password') {
         alert('Login successful!');

        // You can redirect or do other actions upon successfull login
    } else if (username != 'admin' && password != 'password'){
        document.getElementById('success').textContent='invalid password and username';

    }
    
    
    else if (username != 'admin' ) {
       // document.getElementById('error').textContent = 'Invalid username or password.';
           
       document.getElementById('usererror').textContent='invalid username';
       }
     else  if (password != 'password' ){
       document.getElementById('passerror').textContent='invalid password';
       }
       else{
        document.getElementById('success').textContent='invalid password and username';
       }


   // }
});
