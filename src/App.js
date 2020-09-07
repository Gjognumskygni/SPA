import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import{ withTranslation } from 'react-i18next';

function App({ t }) {
  return <Container maxWidth="sm">
    <h1>
      {t('hello world')}
    </h1>
    <Button variant="contained" color="primary">
      {t('button')}
    </Button>
  </Container>;
}

export default withTranslation()(App);
