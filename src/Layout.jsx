import React from 'react';
import styled from 'styled-components'

import CardPreview from './Views/CardPreview.jsx';
import CatGenerator from './Views/CatGenerator.jsx';
import Form from './Views/Form.jsx';
import GlobalStyle from './GlobalStyles.jsx';
import Header from './Views/Header.jsx';

const StyledLayout = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 8px 24px 40px;
    width: 100vw;
`;

const Layout = ({
    cardPreview,
    generateRandomCatImage,
    isFetching,
    langSelected,
    translations,
    updateState,
    currentCatPhoto,
}) => (
    <StyledLayout>
        <GlobalStyle />
        <Header updateState={updateState} langSelected={langSelected}/>
        <CardPreview {...cardPreview} />
        <Form  updateState={updateState} {...translations} />
        <CatGenerator isFetching={isFetching}
            generateRandomCatImage={generateRandomCatImage}
            pendingButtonText={translations.findingCat}
            searchButtonText={translations.gimmeAnotherCat}
            photo={currentCatPhoto}
        />
    </StyledLayout>
);

export default Layout;
