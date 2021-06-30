import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Cards() {
  return (
    <React.Fragment style={{display: 'flex', justifyContent: 'center'}} >
      <CssBaseline style={{display: 'flex', justifyContent: 'center'}} />
      <Container style={{display: 'flex', justifyContent: 'center'}} maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '60vh', width: '400px', borderRadius: '30px', boxSizing: 'border-box'}} />
      </Container>
    </React.Fragment>
  );
}
