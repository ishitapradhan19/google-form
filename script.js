document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    let valid = true;

    formData.forEach((value, key) => {
        if (!value && key !== 'comments' && key !== 'otherStressManagement') {
            valid = false;
        }
    });

    if (valid) {
        alert('Form submitted successfully!');
        this.reset();
    } else {
        alert('Please fill out all required fields.');
    }
});
