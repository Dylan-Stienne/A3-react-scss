import '../../sass/components/cards/_result.scss';
import Translator from '../../services/translate';
import { Link } from "react-router-dom";

function ResultCard({ score, total }) {
    return <div className='result-card'>
        <h2><Translator tid="QUIZZS.LABEL_THANKS" /></h2>
        <p>
            <Translator tid="QUIZZS.LABEL_THANKS_SCORE" />
            <span>{score}/{total}</span>
        </p>

        <div className='actions'>
            <div className='action' onClick={() => window.location.reload(false)}>
                <Translator tid="QUIZZS.BUTTON_THANKS_RETRY" />
            </div>
            <Link className='action' to='/quizzs'>
                <Translator tid="QUIZZS.BUTTON_THANKS_LEAVE" />
            </Link>
        </div>
    </div>
}

export default ResultCard;

