import styled from 'styled-components'

import theme from '../../Theme'

const { typography, spacingSizes, colors } = theme

export const footerSizes = {
    small: typography.finePrint,
    medium: typography.body,
    large: typography.bodyLarge,
  };
  
  export const footerColors = {
    ...colors
  };
  
  export const footerHoverColors = footerColors

  export const footerBgColors = footerColors

export const FooterStyles = styled.footer`
    color: ${p => footerColors[p.color]};
    ${p => footerSizes[p.size]};
    display: flex;
    justify-content: center;
    background: ${p => footerBgColors[p.bg]};
    ${spacingSizes};
`
export const FooterLogoStyles = styled.div`
  width: 10%;
  min-width: 16.8rem;
`;

export const FooterListStyles = styled.ul`
    list-style: none;
    display: flex;
    flex: 0 1 30%;
    justify-content: space-between;
    color: ${p => footerColors[p.color]};
    ${p => footerSizes[p.size]};
    ${spacingSizes};
`

export const FooterItemStyles = styled.li`
    text-align: center;
    cursor: pointer;
    color: ${p => footerColors[p.color]};
    ${p => footerSizes[p.size]};
    ${spacingSizes};

    &:hover {
    color: ${p => footerHoverColors[p.hover]};
  }
`