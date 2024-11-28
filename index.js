// defining or storing gst element

const gstRate = 0.18;

// storing or defining some inputs

const addItemButton = document.getElementById("addItemButton");

const itemsTableBody = document.getElementById("itemsTableBody");

const grandTotalSpan = document.getElementById("grandTotal");

let grandTotal = 0;

// adding event listener to trigger

addItemButton.addEventListener("click", function () {

// To store items price and quantity

  const itemName = document.getElementById("itemName").value;

  const price = parseFloat(document.getElementById("price").value);

  const quantity = parseInt(document.getElementById("quantity").value);

// cheacking if inputs are valid or not

  if (itemName && price > 0 && quantity > 0) {

// now calculation part
    const gst = price * gstRate;

    const total = (price + gst) * quantity;

// now creating the row

    const row = document.createElement("tr");

    row.classList.add("border-b", "dark:border-gray-700", "text-md");

    row.innerHTML = `
      <td class="px-6 py-3">${itemName}</td>
      <td class="px-6 py-3">₹ ${price.toFixed(2)}</td>
      <td class="px-6 py-3">${quantity}</td>
      <td class="px-6 py-3">₹ ${gst.toFixed(2)}</td>
      <td class="px-6 py-3">₹ ${total.toFixed(2)}</td>
    `;

// now appending or adding row in table

    itemsTableBody.appendChild(row);

// now updating grand total in span tag

    grandTotal += total;

    grandTotalSpan.textContent = `Grand Total : ₹ ${grandTotal.toFixed(2)}`;

// to clear input field after clicked add item button

    document.getElementById("itemName").value = "";

    document.getElementById("price").value = "";

    document.getElementById("quantity").value = "";

  } else {

    alert("Please enter valid item details.");

  }
});