var conn = new Mongo();
var db = conn.getDB('tar');

var users = [{
    name: 'Alice',
    birthdate: new Date('03.02.1993'),
    gender: 'f',
    statuses: [{
        title: 'Hey @bob, did you get my secure message?',
        likes: 2,
        comments: [{
            user: 'Eve',
            message: 'sup'
        }]
    }, {
        title: 'Alice, alice',
        likes: 3,
        comments: [{
            user: 'Bob',
            message: 'Who the f*** is alice?!'
        }]
    }]
}, {
    name: 'Noam Okman',
    gender: 'm',
    birthdate: new Date('02.27.1992'),
    statuses: [{
        likes: 10,
        title: 'Lets write MZ in node!!1',
        comments: [{
            user: 'Arik Yakual',
            message: 'lol k'
        }]
    }]
}, {
    name: 'Elmer Fudd',
    gender: 'm',
    birthdate: new Date('10.10.1977'),
    statuses: [{
        title: 'Its wabbit season!',
        likes: 0,
        comments: [{
            user: 'Bugs Bunny',
            message: 'Duck season!'
        }, {
            user: 'Elmer Fudd',
            message: 'Wabbit season!'
        }]
    }]
}, {
    name: 'Amit Messing',
    gender: 'f',
    birthdate: new Date('02.27.1992'),
    statuses: []
}];

db.users.drop();
db.users.insert(users);