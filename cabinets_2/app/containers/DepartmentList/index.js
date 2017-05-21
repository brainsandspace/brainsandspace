/*
 *
 * DepartmentList
 *
 */
// current department

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import StyledButton from './StyledButton';
import StyledList from './StyledList';
import { selectDepartmentListDomain, makeSelectDepartmentList } from './selectors';
import { showDepartmentList, hideDepartmentList } from './actions';

const Wrapper = styled.div`
margin-left: 10px;
`;

/** YOU WERE HERE ABOUT TO FIGURE OUT HOW TO MAKE THIS CONTAINER FILL IN INFORMATION FROM THE DEPARTMENTS CONSTANT */

export class DepartmentList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper onMouseLeave={this.props.onMouseLeave}>
        <StyledButton onClick={this.props.onClick} />
        {this.props.departmentListVisible ?
          <StyledList departmentsArr={this.props.departmentsArr} /> :
          null
        }
      </Wrapper>
    );
  }
}

DepartmentList.propTypes = {
  departmentsArr: PropTypes.array.isRequired,
  departmentListVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,

};

// TODO this could definitely be refactored
const mapStateToProps = (state) => {
  return {
    departmentsArr: state.get('departments').get('departmentsArr'),
    departmentListVisible: state.get('departments').get('departmentListVisible'),
  };
};

// const mapStateToProps = createStructuredSelector({
//   departmentsArr: makeSelectDepartmentList(),
// });

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => dispatch(showDepartmentList()),
    onMouseLeave: () => dispatch(hideDepartmentList()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentList);
