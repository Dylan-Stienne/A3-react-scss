import QuizzCard from './cards/Quizz'

function QuizzsList({ quizzs }) {
    return quizzs.map((quizz, i) => {
        return <QuizzCard key={i} id={quizz.id} title={quizz.title} />
    })
}

export default QuizzsList;