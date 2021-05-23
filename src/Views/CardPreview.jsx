import React from 'react';
import styled, { css } from 'styled-components'

import CatEmptyPhoto from '../assets/combined-shape.svg';

const StyledCardPreview = styled.div`
    ${({theme, empty}) => css`
        align-items: center;
        background: ${theme.color.veryLightBlueAlternative};
        border-radius: 4px;
        box-shadow: ${theme.shadow.card};
        color: ${theme.color.lightBlueGrey};
        display: flex;
        font-weight: bold;

        ${!empty && css`
            color: ${theme.color.darkBlueGrey};
            font-size: 20px;
        `}
    `}
`;

const ImageWrapper = styled.div`
    ${({theme, empty}) => css`
        align-items: center;
        background: ${theme.color.neutral000};
        border-radius: 4px 0 0 4px;
        display: flex;
        height: 64px;
        justify-content: center;
        margin-right: 24px;
        width: 64px;

        img {
            border-radius: 4px 0 0 4px;
            height: 100%;
            object-fit: cover;
            width: 100%;

            ${empty && css`
                width: 32px;
                height: 32px;
            `}
        }
    `}
`;

const CardPreview = ({ name, photo, defaultName}) => {
    const photoPath = photo === null ? CatEmptyPhoto : photo;
    const label = name === defaultName || name === '' ? defaultName : name;

    return (
        <StyledCardPreview empty={label === defaultName}>
            <ImageWrapper empty={photo === null}>
                <img src={photoPath} alt={name} />
            </ImageWrapper>
            {label}
        </StyledCardPreview>
    );
}

export default CardPreview;
