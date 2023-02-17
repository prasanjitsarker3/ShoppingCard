let serial = 0;
document.getElementById('first-card').addEventListener('click', function () {
    serial += 1;
    const productName = document.getElementById("first-name").innerText;
    const productPrice = document.getElementById("first-price").innerText;
    const productQuantity = document.getElementById("first-quantity").innerText;
    const priceTotal = productPrice * productQuantity;
    displayData(productName, productPrice, productQuantity, priceTotal);
})

document.getElementById('second-card').addEventListener('click', function (e) {
    serial += 1;
    const productName = e.target.parentNode.parentNode.children[0].innerText;
    const productPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
    const priceTotal = parseInt(productPrice) + parseInt(productQuantity)
    displayData(productName, productPrice, productQuantity, priceTotal);
})
function getTheData(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}
document.getElementById('last-card').addEventListener('click', function () {
    serial+=1;
    const productName = document.getElementById("last-name").innerText;
    const productPrice = getTheData("first-input");
    const productQuantity = getTheData("second-input");
    const priceTotal=parseFloat(productPrice)*parseFloat(productQuantity);
    displayData(productName, productPrice, productQuantity, priceTotal);
})

function displayData(productName, productPrice, productQuantity, priceTotal) {

    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${productName}</td>
        <td>${productPrice}</td>
        <td>${productQuantity}</td>
        <td>${priceTotal}</td>
    `
    container.appendChild(tr);
}