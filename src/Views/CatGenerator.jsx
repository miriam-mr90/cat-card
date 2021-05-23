import React from 'react';
import styled, { css } from 'styled-components'

import CatEmptyPhoto from '../assets/combined-shape.svg';

const StyledCatGenerator = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
`;

const ImageWrapper = styled.div`
    ${({theme, empty}) => css`
        align-items: center;
        background: ${theme.color.neutral000};
        border-radius: 4px 0 0 4px;
        display: flex;
        height: 265px;
        justify-content: center;
        width: 100%;

        img {
            border-radius: 4px;
            height: 100%;
            object-fit: cover;
            width: 100%;

            ${empty && css`
                width: 161px;
                height: 161px;
            `}
        }
    `}
`;

const StyledButton = styled.button`
    ${({theme}) => css`
        background: ${theme.color.bluish};
        border: 0;
        border-radius: 0 0 4px 4px;
        color: ${theme.color.neutral000};
        font-weight: bold;
        padding: 18px;
        width: 100%;
    `}
`;


const CatGenerator = ({
    generateRandomCatImage,
    isFetching,
    pendingButtonText,
    searchButtonText,
    photo,

}) => {
    const photoPath = photo === null ? CatEmptyPhoto : photo;
    const buttonText = isFetching === 'pending' ? pendingButtonText : searchButtonText;
    return (
        <StyledCatGenerator>
            <ImageWrapper>
                <ImageWrapper empty={photo === null}>
                    <img src={photoPath} />
                </ImageWrapper>
            </ImageWrapper>
            <StyledButton onClick={() => generateRandomCatImage()}>{buttonText}</StyledButton>
        </StyledCatGenerator>
    )
};

export default CatGenerator;

