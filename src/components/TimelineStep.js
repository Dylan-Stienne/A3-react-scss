import '../sass/components/_timelineStep.scss'

function TimelineStep({ title, subtitle, content, date }) {
    return <div className="timeline-step">
        <div className='content'>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{content}</p>
            <span>{date}</span>
        </div>
    </div>
}

export default TimelineStep;
