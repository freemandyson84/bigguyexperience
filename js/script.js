document.getElementById('contact-form').addEventListener('submit', function(e) {
    document.querySelector('.send-button').textContent = 'Submitted!';
    document.querySelector('.send-button').disabled = true;
});