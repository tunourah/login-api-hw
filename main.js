document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();  

      
        emailError.textContent = '';
        passwordError.textContent = '';

        
        if (!emailInput.value.trim()) {
            emailError.textContent = 'Email is required';
        } else if (!isValidEmail(emailInput.value)) {
            emailError.textContent = 'Invalid email format';
        }

        
        if (!passwordInput.value.trim()) {
            passwordError.textContent = 'Password is required';
        }

        
        if (!emailError.textContent && !passwordError.textContent) {
             
            console.log('Email:', emailInput.value);
            console.log('Password:', passwordInput.value);
        }
    });

   
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
