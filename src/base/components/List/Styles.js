import styled from 'styled-components';

import theme from '../../Theme'

const { typography, spacingSizes, colors } = theme

export const listSizes = {
    small: typography.finePrint,
    medium: typography.body,
    large: typography.bodyLarge,
  };

  export const listColors = {
    ...colors
  };

  export const StyledListItem = styled.li`
  color: ${p => listColors[p.color]};
  ${p => listSizes[p.size]};
  ${spacingSizes}

`;
  
  const ListBase = styled.span`
    margin: 0;
    color: ${p => listColors[p.color]};
    ${p => listSizes[p.size]};
    ${spacingSizes}
  `;
  
  export const listElements = {
    ol: ListBase.withComponent('ol'),
    ul: ListBase.withComponent('ul')
  };
