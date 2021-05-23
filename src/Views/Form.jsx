import React from 'react';
import styled, { css } from 'styled-components'

const StyledForm = styled.form`
    ${({theme}) => css`
        display: flex;
        flex-direction: column;

        label {
            margin-bottom: 8px;
            margin-top: 24px;
        }

        input {
            background: ${theme.color.neutral000};
            border: solid 1px ${theme.color.veryLightBlue};
            border-radius: 4px;
            box-shadow: ${theme.shadow.input};
            box-sizing: border-box;
            color: ${theme.color.bluish};
            font-size: ${theme.font.bodySize};
            font-weight: bold;
            height: 40px;
            padding: 10px 16px;

            &:selected {
                border-color: ${theme.color.veryLightBlue};
            }

            ::placeholder {
                color: ${theme.color.lightBlueGrey};
            }
        }
    `}
`;

const StyledTitle = styled.h1`
    ${({theme}) => css`
        color: ${theme.color.bluish};
        font-size: ${theme.font.bodySize};
        font-weight: bold;
        margin-top: 40px;
    `}
`;

const Form = ({
    catsEmail,
    catsName,
    catsPhoneNumber,
    email,
    name,
    randomCardGenerator,
    updateState,
}) => (
    <>
        <StyledTitle>{randomCardGenerator}</StyledTitle>
        <StyledForm>
            <label htmlFor='frmName'>{catsName}</label>
            <input type='text'
                id='frm-name'
                name='frmName'
                placeholder={name}
                onChange={e => updateState('currentCatName', e.target.value)}
            />

            <label htmlFor="frmEmail">{catsEmail}</label>
            <input type="email" id='frm-email' name='frmEmail' placeholder={email} />

            <label htmlFor="frmPhone">{catsPhoneNumber}</label>
            <input type="tel" id='frm-phone' name='frmPhone' placeholder='000000000' />
        </StyledForm>
    </>
);

export default Form;
