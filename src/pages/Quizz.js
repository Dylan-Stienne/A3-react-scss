import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Container from '../components/Containers';
import Nav from '../components/Nav';
import quizzs from '../services/quizz'
import '../sass/pages/_quizz.scss';

function Quizz() {
    const { id } = useParams()
    const [quizz, setQuizz] = useState({})

    useEffect(() => {
        setQuizz(quizzs.getQuizz(id));
    }, [])

    return <div id='quizz-page'>
        <Nav />
        <Container width="100" justify="center">
            <h1>{quizz.title}</h1>


        </Container>
    </div>
}

export default Quizz;
