document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const termsCheckbox = document.getElementById('terms');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const termsError = document.getElementById('termsError');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();  

       
        nameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';
        termsError.textContent = '';

        
        if (!nameInput.value.trim()) {
            nameError.textContent = 'Full name is required';
        }

 
        if (!emailInput.value.trim()) {
            emailError.textContent = 'Email is required';
        } else if (!isValidEmail(emailInput.value)) {
            emailError.textContent = 'Invalid email format';
        }

      
        if (!passwordInput.value.trim()) {
            passwordError.textContent = 'Password is required';
        } else if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long';
        }
 
        if (!confirmPasswordInput.value.trim()) {
            confirmPasswordError.textContent = 'Please confirm your password';
        } else if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordError.textContent = 'Passwords do not match';
        }

      
        if (!termsCheckbox.checked) {
            termsError.textContent = 'You must agree to the terms and conditions';
        }

        
        if (!nameError.textContent && !emailError.textContent && !passwordError.textContent && !confirmPasswordError.textContent && !termsError.textContent) {
            
            console.log('Name:', nameInput.value);
            console.log('Email:', emailInput.value);
            console.log('Password:', passwordInput.value);
        }
    });

     
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
