let userInfo = [];

function addInfo() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
        alert("Please fill in all fields.");
        return;
    }

    const user = { name, email };
    userInfo.push(user);
    displayInfo();
    clearForm();
}

function displayInfo() {
    const tableBody = document.querySelector("#infoTable tbody");
    tableBody.innerHTML = ""; 

    userInfo.forEach((user, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td class="actions">
                <button class="edit" onclick="editInfo(${index})">Edit</button>
                <button onclick="deleteInfo(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function editInfo(index) {
    const user = userInfo[index];
    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;


    deleteInfo(index);
}

function deleteInfo(index) {
    userInfo.splice(index, 1);
    displayInfo();
}

function clearForm() {
    document.getElementById("registrationForm").reset();
}
