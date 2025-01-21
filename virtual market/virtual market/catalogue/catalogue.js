/// Animate Progress Bars
const salesProgress = document.getElementById('sales-progress');
const inventoryProgress = document.getElementById('inventory-progress');

function updateProgressBars() {
    salesProgress.style.width = '75%'; // Dynamic value
    inventoryProgress.style.width = '60%'; // Dynamic value
}

updateProgressBars();