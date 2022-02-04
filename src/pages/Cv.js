import mock from '../services/mock'
import Container from '../components/Containers'
import Nav from '../components/Nav'
import Timeline from '../components/Timeline'
import TimelineStep from '../components/TimelineStep'
import Translator from '../services/translate';
import '../sass/pages/_cv.scss';

function Cv() {
    const background = mock.getMyBackground();

    return <div id='cv-page'>
        <Nav />
        <Container width="100" justify="center">
            <h1><Translator tid="CV.TITLE" /></h1>

            <Timeline>
                {background.map((step, i) => {
                    return <TimelineStep key={i} title={step.title} subtitle={step.subtitle} content={step.description} date={step.date} />
                })}
            </Timeline>
        </Container>
    </div>
}

export default Cv;
