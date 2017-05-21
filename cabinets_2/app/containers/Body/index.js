
/*
 *
 * Body
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import SearchResults from 'containers/SearchResults';
import DarkOverlay from 'components/DarkOverlay';
import NavCategory from 'components/NavCategory';
import Listing from 'components/Listing';

import { makeSelectBodyDark, makeSelectBodySelectedListing } from './selectors';

import listings from '../../../mock/sample_cabinet_pages.json';

const Wrapper = styled.div`
z-index: 20;
position: relative;
`;

export class Body extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Helmet
          title="Body"
          meta={[
            { name: 'description', content: 'Description of Body' },
          ]}
        />
        {this.props.dark ?
          <DarkOverlay /> :
          null
        }
        <NavCategory />
        {/* TODO CHANGE this */}
        {false ? 
          <SearchResults /> :
          <Listing
            member={'Rex Tillerson'}
            data={listings['Rex_Tillerson']}
          />
        }
      </Wrapper>
    );
  }
}

Body.propTypes = {
  dispatch: PropTypes.func.isRequired,
  dark: PropTypes.bool.isRequired,
  selectedListing: PropTypes.object, // TODO specify the shape
};

const mapStateToProps = createStructuredSelector({
  dark: makeSelectBodyDark(),
  selectedListing: makeSelectBodySelectedListing(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);
