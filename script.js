document.getElementById('strokeRiskForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const formData = {
        gender: document.getElementById('gender').value,
        age: document.getElementById('age').value,
        hypertension: document.getElementById('hypertension').value,
        heart_disease: document.getElementById('heart_disease').value,
        smoking_history: document.getElementById('smoking_history').value,
        bmi: document.getElementById('bmi').value,
        HbA1c_level: document.getElementById('HbA1c_level').value,
        blood_glucose_level: document.getElementById('blood_glucose_level').value
    };

    // Convert form data to JSON
    const jsonData = JSON.stringify(formData);

    console.log(jsonData)

    // API URL (replace with your actual API URL)
    const apiUrl = 'https://diabetes-fastapi.onrender.com/predict'; 

    // Send the data to the API
    fetch(apiUrl, {
        method: 'POST', // Assuming POST request
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
    })
    .then(data => {
        // Handle the JSON response from the API
        console.log(data.response)

        // Show pop-up with the stroke risk result
        if (data.response === 'YES'){
            alert(`You are liable to have diabetes`);
        } else {
            alert(`You are not liable to have diabetes`);
        }
            
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        
    });
});
