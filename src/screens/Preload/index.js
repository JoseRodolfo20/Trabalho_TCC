import React from "react";
import { Container, LoadingIcon } from './styles'

import Logo from '../../assets/regardian.svg'

export default () => {
    return(
        <Container>
            <Logo width="100%" height="160"/>
            <LoadingIcon size="large" color="#FFFFFF"/>
        </Container>
    );
}