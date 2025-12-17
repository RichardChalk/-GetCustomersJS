// 1) "Customer" som ett objekt (en enkel mall via en funktion)
function createCustomer(name, age, gender) {
  return {
    name: name,
    age: age,
    gender: gender,
  };
}

// 2) Array med 5 Customer-objekt
const customers = [
  createCustomer("Anna Andersson", 28, "Female"),
  createCustomer("Erik Svensson", 35, "Male"),
  createCustomer("Sara Lind", 22, "Female"),
  createCustomer("Omar Ali", 41, "Male"),
  createCustomer("Maja Berg", 30, "Female"),
];

// 3) Hämta knappen och lyssna efter klick
const showCustomersBtn = document.getElementById("showCustomersBtn");
showCustomersBtn.addEventListener("click", showCustomersTable);

// 4) Funktion som skapar + fyller tabellen
function showCustomersTable() {
  const tableHost = document.getElementById("tableHost");

  // Töm innan vi skapar en ny tabell (så det inte blir dubbelt)
  tableHost.innerHTML = "";

  // Skapa table-elementet
  const table = document.createElement("table");

  // Skapa thead + en header-rad
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const headers = ["Name", "Age", "Gender"];
  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Skapa tbody och fyll rader från customers-arrayen
  const tbody = document.createElement("tbody");

  customers.forEach((customer) => {
    const row = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.textContent = customer.name;

    const tdAge = document.createElement("td");
    tdAge.textContent = customer.age;

    const tdGender = document.createElement("td");
    tdGender.textContent = customer.gender;

    row.appendChild(tdName);
    row.appendChild(tdAge);
    row.appendChild(tdGender);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  // Lägg tabellen på sidan
  tableHost.appendChild(table);
}
