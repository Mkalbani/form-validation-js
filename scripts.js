document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });

    function validateForm(form) {
        let valid = true;

        // Handle input validation for both forms
        form.querySelectorAll('input').forEach(input => {
            const error = document.createElement('div');
            error.className = 'error';
            error.style.color = 'red';
            error.style.display = 'none';
            input.parentNode.insertBefore(error, input.nextSibling);

            input.addEventListener('input', function() {
                if (input.value === '') {
                    input.style.borderColor = 'red';
                    error.textContent = 'This field is required';
                    error.style.display = 'block';
                    valid = false;
                } else {
                    input.style.borderColor = 'green';
                    error.style.display = 'none';
                }
            });
        });

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            valid = true; // Reset valid to true for the new validation cycle

            const username = form.querySelector('#username') || form.querySelector('#signup-username');
            const email = form.querySelector('#signup-email');
            const password1 = form.querySelector('#password1') || form.querySelector('#signup-password1');
            const password2 = form.querySelector('#signup-password2');
            const emailGroup =  form.querySelector('#signup-emailGroup');
            const passwordGroup = form.querySelector('#passwordGroup') || form.querySelector('#signup-passwordGroup');
            const usernameGroup = form.querySelector('#usernameGroup') || form.querySelector('#signup-usernameGroup');
            const emailError = form.querySelector('#emailError') || form.querySelector('#signup-emailError');
            const passwordError = form.querySelector('#passwordError') || form.querySelector('#signup-passwordError');
            const usernameError = form.querySelector('#usernameError') || form.querySelector('#signup-usernameError');
            const passwordMatchError = form.querySelector('#passwordMatchError');

            // Reset error states
            if (emailGroup) emailGroup.classList.remove('error', 'success');
            if (passwordGroup) passwordGroup.classList.remove('error', 'success');
            if (usernameGroup) usernameGroup.classList.remove('error', 'success');
            if (emailError) emailError.style.display = 'none';
            if (passwordError) passwordError.style.display = 'none';
            if (usernameError) usernameError.style.display = 'none';
            if (passwordMatchError) passwordMatchError.style.display = 'none';
            if (emailError) emailError.textContent = '';
            if (passwordError) passwordError.textContent = '';
            if (usernameError) usernameError.textContent = '';
            if (passwordMatchError) passwordMatchError.textContent = '';

            // Validate email
            if (email && email.value.trim() === '') {
                valid = false;
                if (emailGroup) emailGroup.classList.add('error');
                if (emailError) {
                    emailError.style.display = 'block';
                    emailError.textContent = "Email cannot be empty";
                }
            } else if (email && !/\S+@\S+\.\S+/.test(email.value)) {
                valid = false;
                if (emailGroup) emailGroup.classList.add('error');
                if (emailError) {
                    emailError.style.display = 'block';
                    emailError.textContent = "Invalid email address";
                }
            }

            // Validate username
            if (username && username.value.trim() === '') {
                valid = false;
                if (usernameGroup) usernameGroup.classList.add('error');
                if (usernameError) {
                    usernameError.style.display = 'block';
                    usernameError.textContent = "Username cannot be empty";
                }
            } else if (username && username.value.trim().length < 5) {
                valid = false;
                if (usernameGroup) usernameGroup.classList.add('error');
                if (usernameError) {
                    usernameError.style.display = 'block';
                    usernameError.textContent = "Username must be at least 5 characters long";
                }
            }

            // Validate passwords
            if (password1 && password1.value.trim() === '') {
                valid = false;
                if (passwordGroup) passwordGroup.classList.add('error');
                if (passwordError) {
                    passwordError.style.display = 'block';
                    passwordError.textContent = "Password cannot be empty";
                }
            } else if (password1 && password1.value.length < 8) {
                valid = false;
                if (passwordGroup) passwordGroup.classList.add('error');
                if (passwordError) {
                    passwordError.style.display = 'block';
                    passwordError.textContent = "Password must be at least 8 characters long";
                }
            }

            // Validate password confirmation
            if (password2 && password2.value.trim() === '') {
                valid = false;
                if (passwordGroup) passwordGroup.classList.add('error');
                if (passwordError) {
                    passwordError.style.display = 'block';
                    passwordError.textContent = "Please confirm your password";
                }
            } else if (password1 && password2 && password1.value !== password2.value) {
                valid = false;
                if (passwordGroup) passwordGroup.classList.add('error');
                if (passwordMatchError) {
                    passwordMatchError.style.display = 'block';
                    passwordMatchError.textContent = "Passwords do not match";
                }
            }

            // If valid, apply success styles and perform submission
            if (valid) {
                if (emailGroup) emailGroup.classList.add('success');
                if (passwordGroup) passwordGroup.classList.add('success');
                if (usernameGroup) usernameGroup.classList.add('success');
                // Form submission logic here
                alert('Form submitted successfully!');
            }
        });
    }

    // Initialize validation for login and signup forms
    const loginForm = document.getElementById('login-form');
    if (loginForm) validateForm(loginForm);

    const signupForm = document.getElementById('signup-form');
    if (signupForm) validateForm(signupForm);
});
