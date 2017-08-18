import { css } from 'styled-components';

const HeaderLinkStyles = css`
    position: relative;
    padding: 15px;
    text-decoration: none;
    color: #555;
    display: inline-block;
    
    &:hover {
        color: #111;
        text-decoration: none;
    }
    
    &:focus {
        color: #555;
        text-decoration: none;
    }
    
    background-color: ${ props => {
        let colour = 'transparent';
        props.to
            .split('/')
            .filter(to => to !== "")
            .map(to => {
                props['data-pathname']
                    .split('/')
                    .filter(pathname => pathname !== "")
                    .map(pathname => {
                        if (to === pathname) {
                            colour = '#ddd';
                        }
                    })
            });
    
        return colour;
    }}
`;

export default HeaderLinkStyles;
