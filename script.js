// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const lifeGoalsDropdown = document.getElementById('life-goals');
    // Get other dropdowns and elements similarly

    // Event listener for life goals dropdown
    lifeGoalsDropdown.addEventListener('change', function() {
        // Prevent selecting the same option for different questions
        // Implement similar logic for other dropdowns
    });

    // Function to generate inspirational quotes
    function generateQuotes() {
        const lifeGoal = lifeGoalsDropdown.value;
        // Get other dropdown values similarly

        const quotesContainer = document.getElementById('inspirational-quotes');
        quotesContainer.innerHTML = `
            <p>I love that I focus on my ${lifeGoal}.</p>
            <!-- Generate other quotes using other dropdown values -->
        `;
    }

    // Event listener for generating quotes
    lifeGoalsDropdown.addEventListener('change', generateQuotes);
    // Add similar event listeners for other dropdowns

    // Function to add sub-goals
    document.getElementById('add-sub-goal').addEventListener('click', function() {
        const subGoalsContainer = document.getElementById('sub-goals');
        const subGoalInput = document.createElement('input');
        subGoalInput.type = 'text';
        subGoalInput.placeholder = 'Enter sub goal';
        subGoalsContainer.appendChild(subGoalInput);
    });

    // Function to update goal status
    function updateGoalStatus() {
        const mainGoalInput = document.getElementById('main-goal');
        const subGoals = document.querySelectorAll('#sub-goals input');
        const completedSubGoals = document.querySelectorAll('#sub-goals input:checked');

        const goalStatus = document.getElementById('goal-status');
        goalStatus.textContent = `Main Goal: ${mainGoalInput.value} | Goals Accomplished: ${completedSubGoals.length}/${subGoals.length}`;
    }

    // Event listeners to update goal status
    document.getElementById('main-goal').addEventListener('input', updateGoalStatus);
    document.getElementById('sub-goals').addEventListener('change', updateGoalStatus);
});
