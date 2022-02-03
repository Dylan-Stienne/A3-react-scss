import '../sass/components/_skillsList.scss'
import Translator from '../services/translate';
import SkillsListItem from '../components/SkillsListItem'

function SkillsList({ skills }) {
    return <pre className='skills-list'>
        <code>
            <Translator tid="SKILLS_CODE.DEFINE_VAR" />
            &nbsp;
            <span className='color-primary'><Translator tid="SKILLS_CODE.SKILLS_VAR" /></span>
            &nbsp;
            <Translator tid="SKILLS_CODE.OPEN_DICT" />
            <br />
        </code>
        <br />

        {skills.high.map((skill, i) => {
            return <SkillsListItem key={i} name={skill} level={Translator({ tid: 'SKILLS_CODE.SKILL_LVL_HIGH' })} />
        })}
        <br />

        {skills.medium.map((skill, i) => {
            return <SkillsListItem key={i} name={skill} level={Translator({ tid: 'SKILLS_CODE.SKILL_LVL_MEDIUM' })} />
        })}
        <br />

        {skills.low.map((skill, i) => {
            return <SkillsListItem key={i} name={skill} level={Translator({ tid: 'SKILLS_CODE.SKILL_LVL_LOW' })} />
        })}
        <br />

        <code><Translator tid="SKILLS_CODE.CLOSE_DICT" /></code>
    </pre>
}

export default SkillsList;
