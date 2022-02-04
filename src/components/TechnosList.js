import TechnoTag from './TechnoTag'

function TechnoList({ technos }) {
    return technos.map((techno, i) => {
        return <TechnoTag key={i} name={techno} />
    })
}

export default TechnoList;