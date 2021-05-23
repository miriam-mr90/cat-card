import React from 'react';
import styled, { css } from 'styled-components'

import { ReactComponent as Logo } from '../assets/cat-card-logo.svg';

const StyledHeader = styled.header`
    align-items: flex-end;
    display: flex;
    height: 40px;
    justify-content: space-between;
    margin-bottom: 24px;
`;

const StyledLogo = styled(Logo)`
    height: 16px;
    width: auto;
`;

const StyledSelect = styled.select`
    ${({theme}) => css`
        background: ${theme.color.neutral000};
        border: solid 1px ${theme.color.veryLightBlue};
        border-radius: 4px;
        box-shadow: ${theme.shadow.input};
        box-sizing: border-box;
        height: 40px;
        padding: 8px;
        position: relative;
    `}
`;

const Header = ({
    langSelected,
    updateState,
}) => (
    <StyledHeader>
        <StyledLogo />
        <StyledSelect onChange={e => updateState('langSelected', e.target.value)}>
            <option value='en'>EN</option>
            <option value='es'>ES</option>
        </StyledSelect>
    </StyledHeader>
);

export default Header;
