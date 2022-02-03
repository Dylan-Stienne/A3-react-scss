import '../sass/components/cards/_project.scss'
import Container, { ContainerFlex } from './Containers'

function NavigatorPreview({images}) {
    return (
        <Container className="navigator-preview" width="90">
            <ContainerFlex className="navigator-preview__nav" width="100">
                <span className="navigator-preview__nav__dot dot-red"></span>
                <span className="navigator-preview__nav__dot dot-orange"></span>
                <span className="navigator-preview__nav__dot dot-green"></span>
            </ContainerFlex>
            <div className="navigator-preview__content">
                <img src={images[0]} alt="" />
            </div>
        </Container>
    )
}

export default NavigatorPreview;
