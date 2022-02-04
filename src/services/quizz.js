const QUIZZS = [
    {
        id: "1",
        slug: "quiz-1",
        title: "XX",
        description: "Ceci est un formulaire qui parle",
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
        slug: "quiz-2",
        title: "XX",
        description: "Ceci est un formulaire qui parle",
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
    getQuizz(slug) {
        return QUIZZS.find(q => q.slug == slug);
    }
}

export default quizz