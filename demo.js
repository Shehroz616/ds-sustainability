// Example data
const connectionGame = {
    asda32123: {
        name: 'flana',
        correct: 6,
        time: '5 sec'
    },
    asd21asd: {
        name: 'flana',
        correct: 5,
        time: '8 sec'
    },
    asd23sad34: {
        name: 'timcana',
        correct: 6,
        time: '5 sec'
    },
    asdasd4231sd: {
        name: 'flana',
        correct: 4,
        time: '7 sec'
    },
};

// Convert time from string to number for easy sorting
Object.keys(connectionGame).forEach(key => {
    connectionGame[key].time = parseInt(connectionGame[key].time.split(' ')[0]);
});

// Create an array of users, sorted by correct answers (desc) and time (asc)
const leaderboard = Object.values(connectionGame)
    .sort((a, b) => {
        if (b.correct === a.correct) {
            return a.time - b.time; // sort by time if correct answers are the same
        }
        return b.correct - a.correct; // sort by correct answers
    });

// Convert time back to string format and display the leaderboard
leaderboard.forEach(user => {
    user.time = `${user.time} sec`;
    console.log(`Name: ${user.name}, Correct: ${user.correct}, Time: ${user.time}`);
});
