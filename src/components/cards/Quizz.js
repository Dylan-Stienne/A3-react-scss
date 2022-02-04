import { Link } from "react-router-dom";

function QuizzCard({id, title}) {
    return <div>
        <Link to={`/quizz/${id}`}><h2>{title}</h2></Link>
    </div>
}

export default QuizzCard;

