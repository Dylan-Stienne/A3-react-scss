import '../../sass/components/cards/_quizz.scss';
import { Link } from "react-router-dom";
import Translator from '../../services/translate';

function QuizzCard({ id, title, description, questionsCount }) {
    return <Link to={`/quizz/${id}`} className='quizz-card'>
        <h2>{title}</h2>
        <p>{description}</p>
        <span>{questionsCount} <Translator tid="QUIZZS.LABEL_QUESTIONS" /></span>
    </Link>
}

export default QuizzCard;

