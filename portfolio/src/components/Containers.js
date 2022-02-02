import '../sass/components/_containers.scss'

export function Container({ id, className = "", refName, width, height, justify, align, children, IF }) {
    const _class = `container ${className}`;
    const _justify = ['left', 'center', 'right'].includes(justify) ? justify : 'left';
    const _align = ['top', 'center', 'bottom', 'around', 'between', 'evenly'].includes(align) ? align : 'top';
    const _width = !isNaN(parseInt(width)) || ['auto', 'max'].includes(width) ? width : 'auto';
    const _height = !isNaN(parseInt(height)) || ['auto', 'max'].includes(height) ? height : 'auto';
    const _IF = [true, false].includes(IF) ? IF : true;

    return (
        <If IF={_IF}>
            <div
                id={id}
                className={_class}
                _justify={_justify}
                _align={_align}
                _width={_width}
                _height={_height}
                ref={refName}>
                {children}
            </div>
        </If>
    );
}

export function ContainerFlex({ id, className = "", refName, width, height, justify, align, children, IF }) {
    const _class = `container-flex ${className}`;
    const _justify = ['left', 'center', 'right', 'around', 'between', 'evenly'].includes(justify) ? justify : 'left';
    const _align = ['top', 'center', 'bottom'].includes(align) ? align : 'top';
    const _width = !isNaN(parseInt(width)) || ['auto', 'max'].includes(width) ? width : 'auto';
    const _height = !isNaN(parseInt(height)) || ['auto', 'max'].includes(height) ? height : 'auto';
    const _IF = [true, false].includes(IF) ? IF : true;

    return (
        <If IF={_IF}>
            <div
                id={id}
                className={_class}
                _justify={_justify}
                _align={_align}
                _width={_width}
                _height={_height}
                ref={refName}>
                {children}
            </div>
        </If>
    );
}

export function Row({ id, className = "", refName, width, height, justify, align, children, IF }) {
    const _class = `container__row ${className}`;
    const _justify = ['left', 'center', 'right', 'around', 'between', 'evenly'].includes(justify) ? justify : 'left';
    const _align = ['top', 'center', 'bottom'].includes(align) ? align : 'top';
    const _width = !isNaN(parseInt(width)) || ['auto', 'max'].includes(width) ? width : '100';
    const _height = !isNaN(parseInt(height)) || ['auto', 'max'].includes(height) ? height : 'auto';
    const _IF = [true, false].includes(IF) ? IF : true;

    return (
        <If IF={_IF}>
            <div
                id={id}
                className={_class}
                _justify={_justify}
                _align={_align}
                _width={_width}
                _height={_height}
                ref={refName}>
                {children}
            </div>
        </If>
    );
}

export function Col({ id, className = "", refName, width, height, justify, align, children, IF }) {
    const _class = `container__col ${className}`;
    const _justify = ['left', 'center', 'right'].includes(justify) ? justify : 'left';
    const _align = ['top', 'center', 'bottom', 'around', 'between', 'evenly'].includes(align) ? align : 'top';
    const _width = !isNaN(parseInt(width)) || ['auto', 'max'].includes(width) ? width : 'auto';
    const _height = !isNaN(parseInt(height)) || ['auto', 'max'].includes(height) ? height : '100';
    const _IF = [true, false].includes(IF) ? IF : true;

    return (
        <If IF={_IF}>
            <div
                id={id}
                className={_class}
                _justify={_justify}
                _align={_align}
                _width={_width}
                _height={_height}
                ref={refName}>
                {children}
            </div>
        </If>
    );
}

export function If({ children, IF }) {
    const _IF = [true, false].includes(IF) ? IF : true;

    return (
        <>{_IF && children}</>
    );
}


export default Container;