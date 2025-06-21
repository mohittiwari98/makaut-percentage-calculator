//script file
function calculatePercentage() {
    // Get input values
    const sgpa1 = parseFloat(document.getElementById('sgpa1').value);
    const subjects1 = parseInt(document.getElementById('subjects1').value);
    const sgpa2 = parseFloat(document.getElementById('sgpa2').value);
    const subjects2 = parseInt(document.getElementById('subjects2').value);

    // Validate inputs
    if (isNaN(sgpa1) || isNaN(subjects1) || isNaN(sgpa2) || isNaN(subjects2) ||
        sgpa1 < 0 || sgpa1 > 10 || sgpa2 < 0 || sgpa2 > 10 ||
        subjects1 < 1 || subjects2 < 1) {
        alert("Please enter valid SGPA (0-10) and number of subjects (minimum 1).");
        return;
    }

    // Calculate total marks (variable subjects * 100)
    const maxMarks1 = subjects1 * 100;
    const maxMarks2 = subjects2 * 100;
    const totalMaxMarks = maxMarks1 + maxMarks2;

    // Calculate CGPA (average of SGPA) without rounding
    const cgpa = (sgpa1 + sgpa2) / 2;

    // Calculate CGPA percentage (MAKAUT formula: (CGPA - 0.75) * 10)
    const cgpaPercentage = (cgpa - 0.75) * 10;

    // Calculate obtained marks using MAKAUT formula
    const obtainedMarks = (totalMaxMarks / 100) * cgpaPercentage;

    // Calculate percentage for both semesters (should match CGPA percentage)
    const percentage = (obtainedMarks / totalMaxMarks) * 100;

    // Display results
    const resultSection = document.getElementById('result');
    document.getElementById('totalMarks').textContent = totalMaxMarks;
    document.getElementById('maxMarks').textContent = totalMaxMarks;
    document.getElementById('obtainedMarks').textContent = obtainedMarks.toFixed(2);
    document.getElementById('percentage').textContent = percentage.toFixed(2);
    document.getElementById('cgpa').textContent = cgpa.toFixed(2);
    document.getElementById('cgpaPercentage').textContent = cgpaPercentage.toFixed(2);

    // Update progress bar
    const progress = document.getElementById('progress');
    progress.style.width = `${Math.min(percentage, 100)}%`;

    // Eligibility message for SVMCM with new GIF
    const messageDiv = document.getElementById('message');
    if (percentage >= 60) {
        messageDiv.innerHTML = "Congratulations! <img src='https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUycnhndGhkNW5lZHU1bHI5ZTQ1ZnY5YW5pMnpnaWIxN3pkYjcyeTRieCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT8qBepJQzUjXpeWU8/giphy.gif' alt='Celebration GIF' style='width: 50px; height: auto; vertical-align: middle;'> You are eligible for SVMCM.";
        messageDiv.className = "message success";
    } else {
        messageDiv.textContent = "Better luck next time.";
        messageDiv.className = "message warning";
    }

    resultSection.style.display = 'block';
}
