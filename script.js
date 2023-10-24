function add() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 + num2;
    document.getElementById("result").textContent = result;
}

function multiply() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 * num2;
    document.getElementById("result").textContent = result;
}

function divide() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) {
        document.getElementById("result").textContent = "Cannot divide by zero";
    } else {
        const result = num1 / num2;
        document.getElementById("result").textContent = result;
    }
}

function minus() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 - num2;
    document.getElementById("result").textContent = result;
}

function check() {
    const num1 = parseFloat(document.getElementById("num1").value);
    
    if (num1 % 2 == 0){
        document.getElementById("result").textContent = "Even";
    } else {
        document.getElementById("result").textContent = "Odd";
    }
}


function displayFeedback() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const gender = document.getElementById("gender").value;
    const color = document.getElementById("color").value;

    // Validation
    if (name === "" || email === "" || mobile === "") {
        alert("Please fill in all required fields (Name, Email, Mobile No).");
        return;
    }

    // Display the feedback in a textbox
    const feedbackResult = document.getElementById("feedbackResult");
    feedbackResult.innerHTML = `
        <h2>Feedback Information:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile No:</strong> ${mobile}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Favorite Color:</strong> <span style="background-color:${color}; color:white;">${color}</span></p>
    `;
}