// Create thoughts data to seed. Use Thoughts model for referencing
const thoughts = [
    { thoughtText: 'Excited to see where i go from here', username:'Mat'},
    { thoughtText: 'Getting the guys together to get bronze tonight', username: 'Bl8k'},
    { thoughtText: 'I have so much code that i need to finish by tonight', username: 'Dab'}
]

// Create user data to seed. Use User model for referencing
const user = [
    { username: "Bl8k", email: "Bl8k@test.com" },
    { username: "Mat", email: "Mat@test.com" },
    { username: "Dab", email: "dab@test.com" }
]

module.exports = { thoughts, user };