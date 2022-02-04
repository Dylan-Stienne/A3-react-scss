const QUIZZS = [
    {
        id: "1",
        title: "XX",
        questions: [
            {
                title: "Question 1",
                answers: [
                    '1',
                    '2',
                    '3'
                ],
                correct: '1'
            },
            {
                title: "Question 2",
                answers: [
                    '11',
                    '22',
                    '33'
                ],
                correct: '33'
            }
        ]
    },
    {
        id: "2",
        title: "XX",
        questions: [
            {
                title: "Question 1",
                answers: [
                    '1',
                    '2',
                    '3'
                ],
                correct: '1'
            },
            {
                title: "Question 2",
                answers: [
                    '11',
                    '22',
                    '33'
                ],
                correct: '33'
            }
        ]
    }
]

const quizz = {
    getQuizzs() {
        return QUIZZS;
    },
    getQuizz(id) {
        return QUIZZS.find(q => q.id == id);
    }
}

export default quizz