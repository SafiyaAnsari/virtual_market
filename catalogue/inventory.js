document.getElementById('catalogue-form').addEventListener('submit', function(event) {
    event.preventDefault();
    showAlert('Item added to catalogue!', 'success');
});

document.getElementById('upload-button').addEventListener('click', function() {
    const fileInput = document.getElementById('file-input');
    if (fileInput.files.length > 0) {
        showAlert('File uploaded successfully!', 'success');
    } else {
        showAlert('Please select a file to upload.', 'error');
    }
});

document.getElementById('publish-button').addEventListener('click', function() {
    showAlert('Inventory published successfully!', 'success');
});

document.getElementById('report-button').addEventListener('click', function() {
    const reportOutput = document.getElementById('report-output');
    reportOutput.innerHTML = `
        <h3>Payment & Settlement Report</h3>
        <p>Total Sales: $5000</p>
        <p>Total Settlements: $4500</p>
        <p>Pending Settlements: $500</p>
    `;
    showAlert('Report generated successfully!', 'success');
});

// Function to show alerts
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert ${type}`;
    alertDiv.innerText = message;

    // Style the alert to position it relative to the viewport
    alertDiv.style.position = 'fixed'; // Fixed position relative to viewport
    alertDiv.style.top = '10px';      // Distance from the top of the viewport
    alertDiv.style.right = '10px';    // Distance from the right of the viewport
    alertDiv.style.zIndex = '9999';   // Ensure it's on top of other elements
    alertDiv.style.padding = '10px';
    alertDiv.style.backgroundColor = type === 'success' ? 'green' : 'red';
    alertDiv.style.color = 'white';
    alertDiv.style.borderRadius = '5px';
    alertDiv.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';

    document.body.appendChild(alertDiv); // Append to the body
    alertDiv.style.display = 'block';

    // Automatically hide the alert after 3 seconds
    setTimeout(() => {
        alertDiv.style.display = 'none';
        alertDiv.remove();
    }, 3000);
}
