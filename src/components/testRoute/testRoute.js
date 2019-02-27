import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Box from '../box';

import styles from './testRoute.css';

class HwWallet extends React.Component {

  render() {
    return (
      <Box className={styles.testRoute}>
        <h1>Test Route </h1>
      </Box>);
  }
}

const mapStateToProps = state => ({
  network: state.settings.network,
  liskAPIClient: state.peers && state.peers.liskAPIClient,
});

const mapDispatchToProps = dispatch => ({
  // liskAPIClientSet: data => dispatch(liskAPIClientSet(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(HwWallet));
