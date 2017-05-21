/**
*
* CenterColumn
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import stringHash from 'string-hash';

import StarDropdown from 'components/StarDropdown';

const Wrapper = styled.div`
padding: 10px;

div#pricing {
  display: flex;
  flex-direction: row;
  color: #555;

  ul#pricing-labels {
    text-align:right;
    margin-right: 0.5em;
    min-width: 60px;
  }
}

li.list-price {
  text-decoration: line-through;
}

li.final-price {
  color: #b12704;
  font-size: 18px;
  line-height: 19px;
}

li.savings {
  color: #b12704
}

h1 { 
  margin: 0;
  font-size: 21px;
  font-weight: normal;
}

hr {
  border-top: #e7e7e7;
}

ul {
  padding: 0;
  list-style: none;
}

.feature-list {
  list-style-type: disc;
  color: #949494;
  padding-left: 20px;
  
  span {
    color: #111;
  }
}

.brand {
  color: #0066c0
}

.availability {
  color: #008a00;
  font-size: 17px;
}
`;

class CenterColumn extends React.Component {
  render() {
    return (
      <Wrapper>
        <p className="brand">{this.props.data.brand}</p>
        <h1>{this.props.member}</h1>
        <StarDropdown />
        <hr />
        <div id="pricing">

          <ul id="pricing-labels">
            <li>List Price:</li>
            <li>Price:</li>
            <li>You Lose:</li>
          </ul>
          
          <ul id="pricing-values">
            <li className="list-price">{this.props.data.price}</li>
            <li className="final-price">Freedom</li>
            <li className="savings">Respect of Western Europe</li>
          </ul>
        </div>

        <div className="availability">{this.props.data.availability}</div>

        <ul className="feature-list">
          {this.props.data.feature_bullets.map((bullet) => (
            <li key={stringHash(bullet)}><span>{bullet}</span></li>
          ))}
        </ul>

      </Wrapper>
    );
  }
}

CenterColumn.propTypes = {
  member: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default CenterColumn;
