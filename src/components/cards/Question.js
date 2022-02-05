import '../../sass/components/cards/_question.scss';

function Answer({ answer, onSelect }) {
    return <li className='' onClick={() => { onSelect(answer) }}>{answer}</li>
}

function QuestionCard({ question, onSeletectCorrect, onSeletectWrong }) {
    const shuffle = (array) => {
        let new_arr = [];
        while (new_arr.length < array.length) {
            let random_item = array[Math.floor(Math.random() * (array.length))];
            if (!new_arr.includes(random_item)) { new_arr.push(random_item) }
        }
        return new_arr
    }

    const answers = shuffle(question.answers);

    const onSelectAnswer = (answer) => {
        answer == question.correct ? onSeletectCorrect() : onSeletectWrong()
    }

    return <div className='question-card'>
        <h2>{question.title}</h2>

        <ul className='question-card__answers'>
            {answers.map((answer, key) => {
                return <Answer key={key} answer={answer} onSelect={onSelectAnswer} />
            })}
        </ul>
    </div>
}

export default QuestionCard;

