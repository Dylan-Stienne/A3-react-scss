import '../sass/components/_iconButton.scss'

export function IconButton({ id, className = '', icon, type, onClick, color, appearance, size }) {
    const _appearance = ['fill'].includes(appearance) ? appearance : 'fill';
    const _color = [
        'primary',
        'secondary',
        'accent-1',
        'accent-2',
        'accent-3',
        'color-project-1',
        'color-project-2',
        'color-project-3'
    ].includes(color) ? color : 'primary';
    const _size = ['regular', 'large'].includes(size) ? size : 'regular';
    const _type = ['button', 'reset', 'submit'].includes(type) ? type : 'button';

    const _class = `button-icon ${className}`


    return (
        <button
            type={_type}
            id={id}
            className={_class}
            onClick={onClick}
            _color={_color}
            _appearance={_appearance}
            _size={_size}>
            <img className="button-icon__icon" alt="" src={icon} />
        </button>
    );
}

export default IconButton;