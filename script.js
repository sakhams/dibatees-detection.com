document.getElementById('diabetes-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const ketoneLevel = parseFloat(document.getElementById('ketoneLevel').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseInt(document.getElementById('age').value);
    const humidity = parseFloat(document.getElementById('humidity').value);
    const temperature = parseFloat(document.getElementById('temperature').value);

    let resultMessage = `${name}, based on the provided information, `;

    if (ketoneLevel > 1.6) {
        resultMessage += "you are at risk for diabetes.";
    } else {
        resultMessage += "you are not at risk for diabetes.";
    }

    document.getElementById('result').textContent = resultMessage;
});
