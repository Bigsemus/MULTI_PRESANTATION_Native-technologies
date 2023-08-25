const tickets = (person) => {
    let twentyFive = 0;
    let fifty = 0;
    for (let i = 0; i < person.length; i++) {
        switch (+person[i]) {
            case 25:
                twentyFive++;
                break;
            case 50:
                fifty++;
                twentyFive--;
                break;
            case 100:
                if (fifty > 0) {
                    fifty--;
                    twentyFive--;
                } else {
                    twentyFive -= 3;
                }
                break;
            default:
                return console.log('it is NOT a cash');
        }
        if (twentyFive < 0 || fifty < 0) {
            return console.log('NO. Vasya will not have enough money to give change to cash');
        }
    }
    return console.log('YES');
};
tickets([25, 25, 50, 100, 25, 25, 50, 100]); // yes
tickets([25, 25, 50]); // yes
tickets([25, 100]); // no
tickets([25, 25, 50, 100]); // yes
tickets([25, 50, 100]); // no
tickets([25, 25, 50, 100]); // yes
tickets([25, 50, 100]); // no
tickets([25, 50, 25, 50, 100, 50]); // no
tickets([25, 50, true, 50, 100, 50]); // it is NOT a cash

function getSum(str1, str2) {
    let arrStr1 = str1.split('');
    let arrStr2 = str2.split('');

    const numBigger = arrStr1.length < arrStr2.length ? arrStr2 : arrStr1;
    let sumNumBoth = 0;
    let result = '';
    while(numBigger.length || sumNumBoth){
        let num1 = Number(arrStr1.pop());
        let num2 = Number(arrStr2.pop());

        if (num1 > 0) sumNumBoth += num1;
        if (num2 > 0) sumNumBoth += num2;
        result = sumNumBoth % 10 + result;
        sumNumBoth = sumNumBoth > 9;
    }
    return console.log(result)
}

getSum('99', '99'); // '198'
getSum('1111111111111111111111111111',
    '2333333333333333333333333333'); // 3444444....4444444


const listOfPosts1 = [{
    id: 1,
    post: 'some post1', // Ivanov Posts: 1;
    title: 'title 1',
    author: 'Ivanov',
    comments: [{
        id: 1.1,
        comment: 'some comment1', // Rimus Comments: 1
        title: 'title 1',
        author: 'Rimus',
    },
        {
            id: 1.2,
            comment: 'some comment2', // Uncle Comments: 1
            title: 'title 2',
            author: 'Uncle',
        },
    ],
},
    {
        id: 2,
        post: 'some post2', // Ivanov Posts: 2;
        title: 'title 2',
        author: 'Ivanov',
        comments: [{
            id: 1.1,
            comment: 'some comment1', // Rimus Comments: 2
            title: 'title 1',
            author: 'Rimus',
        },
            {
                id: 1.2,
                comment: 'some comment2', // Uncle Comments: 2
                title: 'title 2',
                author: 'Uncle',
            },
            {
                id: 1.3,
                comment: 'some comment3', // Rimus Comments: 3
                title: 'title 3',
                author: 'Rimus',
            },
        ],
    },
    {
        id: 3,
        post: 'some post3', //Posts: 1;
        title: 'title 3',
        author: 'Rimus',
    },
    {
        id: 4,
        post: 'some post4', // Uncle Posts: 1;
        title: 'title 4',
        author: 'Uncle',
    },
];

const getQuantityPostsByAuthor = (listOfPosts, authorName) => {
    let posts = 0;
    let comments = 0;

    listOfPosts.forEach((obj) => {
        if (obj.author === authorName) {
            posts++;
        }
        if (obj.comments) {
            obj.comments.forEach((comment) => {
                if (comment.author === authorName) {
                    comments++;
                }
            });
        }
    });
    return console.log(`Posts: ${posts}; Comments: ${comments}`);
};

getQuantityPostsByAuthor(listOfPosts1, 'Rimus'); //Rimus Posts: 1; // Rimus Comments: 3
getQuantityPostsByAuthor(listOfPosts1, 'Ivanov');// Ivanov Posts: 2; // Ivanov Comments: 0
getQuantityPostsByAuthor(listOfPosts1, 'Uncle');// Uncle Posts: 1; // Uncle Comments: 2
