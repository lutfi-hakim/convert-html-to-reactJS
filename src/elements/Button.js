import React from 'react';

import propTypyes from 'prop-types'

export default function Button(props) {
    const className = ["button"];
    if (props.isPrimary) className.push("button-primary");
    if (props.isWideMobile) className.push("button-wide-mobile");
    if (props.isSmall) className.push("button-sm");
    return (
        <button className={className.join(" ")}>{props.children}</button>
    );
}

Button.propTypyes = {
    isPrimary: propTypyes.bool,
    isWideMobile: propTypyes.bool,
    isSmall: propTypyes.bool,
}
