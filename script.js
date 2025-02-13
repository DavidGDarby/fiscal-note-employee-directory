const employees = [
    { name: "Alice Johnson", role: "Software Engineer", department: "Engineering", email: "alice@example.com", profilePicture: "https://example.com/alice.jpg", yearsAtCompany: 3 },
    { name: "Bob Smith", role: "Product Manager", department: "Product", email: "bob@example.com", profilePicture: "https://example.com/bob.jpg", yearsAtCompany: 5 },
    { name: "Charlie Lee", role: "Designer", department: "Design", email: "charlie@example.com", profilePicture: "https://example.com/charlie.jpg", yearsAtCompany: 1 },
    { name: "David Wilson", role: "Data Scientist", department: "Analytics", email: "david@example.com", profilePicture: "https://example.com/david.jpg", yearsAtCompany: 4 },
    { name: "Eva Carter", role: "HR Specialist", department: "Human Resources", email: "eva@example.com", profilePicture: "https://example.com/eva.jpg", yearsAtCompany: 2 },
    { name: "Frank Thompson", role: "Marketing Coordinator", department: "Marketing", email: "frank@example.com", profilePicture: "https://example.com/frank.jpg", yearsAtCompany: 3 },
    { name: "Grace Davis", role: "UX Researcher", department: "Design", email: "grace@example.com", profilePicture: "https://example.com/grace.jpg", yearsAtCompany: 2 },
    { name: "Henry Martinez", role: "System Administrator", department: "IT", email: "henry@example.com", profilePicture: "https://example.com/henry.jpg", yearsAtCompany: 6 },
    { name: "Irene Taylor", role: "Business Analyst", department: "Product", email: "irene@example.com", profilePicture: "https://example.com/irene.jpg", yearsAtCompany: 3 },
    { name: "Jack Wilson", role: "Front-end Developer", department: "Engineering", email: "jack@example.com", profilePicture: "https://example.com/jack.jpg", yearsAtCompany: 1 }
];

function searchEmployees() {
    const query = document.getElementById('searchBar').value.toLowerCase();  // Get the search query and convert it to lowercase
    const employeeCards = document.querySelectorAll('.card');  // Select all employee cards
    
    employeeCards.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();  // Get the employee's name
        const department = card.querySelector('.card-back p').textContent.toLowerCase();  // Get the department
        
        // Check if the query matches the name or department
        if (name.includes(query) || department.includes(query)) {
            card.style.display = '';  // Show card
        } else {
            card.style.display = 'none';  // Hide card
        }
    });
}

function createEmployeeCard(employee) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <img src="${employee.profilePicture}" alt="Fallback Image"
                    onerror="this.onerror=null; this.src='img/Default.jpg';">
                <div class="name-box">    
                    <h3>${employee.name}</h3>
                </div>    
            </div>
            <div class="card-back">
                <h4>${employee.name}</h4>
                <h5>${employee.role}</h5>
                <p>Department: ${employee.department}</p>
                <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                <p>Years at Company: ${employee.yearsAtCompany}</p>
            </div>
        </div>
    `;

    // Select the inner card
    const cardFront = card.querySelector('.card-front');
    const cardBack = card.querySelector('.card-back');

    // Conditional border styling
    if (employee.yearsAtCompany >= 5) {
        cardFront.classList.add('gold-border');
        cardBack.classList.add('gold-border-back');
    } else if (employee.yearsAtCompany <= 1) {
        cardFront.classList.add('red-border');
        cardBack.classList.add('red-border-back');
    }

    document.querySelector('.card-container').appendChild(card);
}

// Ensure a container exists
document.addEventListener("DOMContentLoaded", () => {
    const container = document.createElement('div');
    container.classList.add('card-container');
    document.body.appendChild(container);
    
    employees.forEach(createEmployeeCard);
});