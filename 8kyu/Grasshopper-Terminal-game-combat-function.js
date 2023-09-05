// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

// My solution
function combat(health, damage) {
    if (damage < 0) {
        throw new Error("Damage must be a positive number");
    }

    const newHealth = health - damage;

    const finalHealth = newHealth < 0 ? 0 : newHealth;

    return finalHealth;
}

