import Translator from '../services/translate';

function SkillsListItem({ name, level }) {
    return <code>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className='color-primary'>{name}</span>
        <Translator tid="SKILLS_CODE.DICT_SEPARATOR" />
        &nbsp;
        {level}
        <Translator tid="SKILLS_CODE.DICT_END_LINE" />
        <br />
    </code>
}

export default SkillsListItem;
