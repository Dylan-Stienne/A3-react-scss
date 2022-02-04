import '../../sass/components/cards/_main.scss'

function MainCard({ informations }) {
    return <div className="main-card">
        <h1>{informations.name}</h1>
        <p>{informations.description}</p>
    </div>
}

export default MainCard;

