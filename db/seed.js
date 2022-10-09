db = connect("mongodb://localhost:27017/footballers")

db.footballers.drop()

db.footballers.insertMany([
    { name: "Ronaldo", age: 38, team: "Man-U" },
    { name: "Rashford", age: 24, team: "Man-U" },
    { name: "De Gea", age: 30, team: "Man-U" },
    { name: "Cancelo", age: 27, team: "Man-city" },
    { name: 'Thiago Silva', age: 23, team: 'Chelsea' },
    { name: "White", age: 25, team: "Arsenal", },
    { name: "Dier", age: 28, team: "Spurs" },
    { name: 'Salah', age: 27, team: 'Liverpool' },
    { name: 'De Bruyne', age: 29, team: 'Man-city'},
    { name: 'Andreas', age: 25, team: 'Fulham' },
    { name: 'Haaland', age: 24, team: 'Man-city' },
    { name: 'Jesus', age: 28, team: 'Arsenal' }
])