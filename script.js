document.getElementById("load-user").addEventListener("click", function () {
    const countText = document.getElementById("user-count").value;
    const count = parseInt(countText);
    console.log(count);

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            data = data.slice(0, count);
            const userContainer = document.getElementById("user-container");
            userContainer.innerHTML = '';
            for (let i = 0; i < data.length; i++) {
                const user = data[i];
                const p = document.createElement("p");
                // p.innerText = user.name;
                p.innerHTML = `Name: <strong> ${user.name} </strong> <button onclick = "getUserDetails(${user.id});">Get Phone - ${user.id} </button>`;
                userContainer.appendChild(p);
            }
        })
})

function getUserDetails(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(data => {
            const details = document.getElementById('user-details');
            details.innerHTML = `
            <h1> ${data.phone} </h1>
            `;
        })
}