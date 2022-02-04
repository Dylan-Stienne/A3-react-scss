import '../sass/components/_timeline.scss'
import Container from '../components/Containers'

function Timeline({ children }) {
    return <Container className='timeline'>
        {children}
    </Container>
}

export default Timeline;
