import Container from '../components/Containers';
import Nav from '../components/Nav';
import '../sass/pages/_quizzs.scss';
import quizz from '../services/quizz';
import QuizzsList from '../components/QuizzsList';
import Translator from '../services/translate';

function Quizzs() {
    const quizzs = quizz.getQuizzs();

    return <div id='quizzs-page'>
        <Nav />
        <Container width="100" justify="center">
            <h1><Translator tid="QUIZZS.TITLE" /></h1>

            <QuizzsList quizzs={quizzs} />
        </Container>
    </div>
}

export default Quizzs;
