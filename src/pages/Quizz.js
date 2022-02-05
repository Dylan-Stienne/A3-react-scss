import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Container from '../components/Containers';
import Nav from '../components/Nav';
import Question from '../components/cards/Question';
import ResultCard from '../components/cards/Result'
import quizzs from '../services/quizz'
import '../sass/pages/_quizz.scss';

function Quizz() {
    const { slug } = useParams()
    const [quizz, setQuizz] = useState(null)
    const [score, setScore] = useState(0)
    const [questionIndex, setQuestionIndex] = useState(0)

    useEffect(() => {
        setQuizz(quizzs.getQuizz(slug));
    }, [])

    const nextQuestion = () => {
        setQuestionIndex(questionIndex + 1)
    }

    const correctAnswer = () => {
        setScore(score + 1);
        nextQuestion();
    }

    return <div id='quizz-page'>
        <Nav />
        {quizz ? <Container width="100" justify="center">
            <h1>{quizz.title}</h1>

            {questionIndex < quizz.questions.length ?
                <Question
                    question={quizz.questions[questionIndex]}
                    onSeletectCorrect={correctAnswer}
                    onSeletectWrong={nextQuestion}
                /> :
                <ResultCard score={score} total={quizz.questions.length} />}

        </Container> : null}
    </div>
}

export default Quizz;
