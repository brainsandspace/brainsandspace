/**
*
* StarDropdown
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
cursor: pointer;
width: 100px;

.stars {
    background-position: -69px -368px;
    margin-right: 5px;
}

#arrow {
  background-image: url(https://images-na.ssl-images-amazon.com/images/G/01/AUIClients/AmazonUIBaseCSS-sprite_1x-28bd59af93d9b1c745bb0aca4de58763b54df7cf._V2_.png);
  -webkit-background-size: 400px 670px;
  background-size: 400px 670px;
  background-repeat: no-repeat;
  display: inline-block;

  margin: 5px 0 0 .385em;
  vertical-align: text-top;
  width: 7px;
  height: 5px;
  background-position: -90px -5px;
  opacity: .6;
}

.popup {
  font-size: 12px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  cursor: default;
  padding: 14px 18px;
  border: 1px solid #cdcdcd;
  border-color: rgba(0,0,0,.2);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,.13);
  width: 240px;
    
  .popup-title {
    margin-bottom: 10px;
    color: #555;
  }

  .arrow-up {
    left: 93px;
    top: 0;
    border: 8px solid transparent;    
    margin-top:-9px;
    margin-left: -8px;
    border-top: 0;
    border-bottom-color: rgba(0,0,0,.2);
    position: absolute;

    &:before {
      content: '';
      top: 1px;
      right: -8px;
      width: 0;
      height: 0;
      position: absolute;
      display: block;
      z-index: 1011;
      border: 8px solid transparent;
      border-top: 0;
      border-bottom-color: #fff;
      }
    }
  
  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }

  .num-star {
    color: #0066c0;
  }

  .percent {
    color: #767676;
  }

  .meter {
      border-radius: 1px;
      box-shadow: inset 0 1px 2px rgba(0,0,0,.4), inset 0 0 0 1px rgba(0,0,0,.1);
      width: 120px; height: 17px;
      background-color: #f3f3f3;
      margin: 5px;
  }

  .meter-fill {
      background-color: #ffce00;
      background: linear-gradient(to bottom,#ffce00,#ffa700);
      width: 40%;
      height: 100%;
      box-shadow: inset 0 1px 2px rgba(0,0,0,.4), inset 0 0 0 1px rgba(0,0,0,.1);
  }
}
`;


class StarDropdown extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      popupVisible: false,
    };
  }

  onMouseEnter() {
    console.log('wtf', this, this.state)
    this.setState({ popupVisible: true });
  }

  onMouseLeave() {
    this.setState({ popupVisible: false });
  }

  render() {
    return (
      <Wrapper onMouseLeave={() => { this.onMouseLeave(); }} >
        <div id="dropdown-button" onMouseEnter={() => { this.onMouseEnter(); }}>
          <span className="stars"></span>
          <span id="arrow"></span>
        </div>
        {this.state.popupVisible ?
          <div className="popup">
            <div className="arrow-up"></div>
            <p className="popup-title">[star rating] out of 5 stars</p>
            
            <div className="row">
              <span className="num-star">5 star</span>
              <div className="meter">
                <div className="meter-fill"></div>
              </div>
              <span className="percent">50%</span>
            </div>

            <div className="row">
              <span className="num-star">4 star</span>
              <div className="meter">
                <div className="meter-fill"></div>
              </div>
              <span className="percent">50%</span>
            </div>

            <div className="row">
              <span className="num-star">3 star</span>
              <div className="meter">
                <div className="meter-fill"></div>
              </div>
              <span className="percent">50%</span>
            </div>

            <div className="row">
              <span className="num-star">2 star</span>
              <div className="meter">
                <div className="meter-fill"></div>
              </div>
              <span className="percent">50%</span>
            </div>

            <div className="row">
              <span className="num-star">1 star</span>
              <div className="meter">
                <div className="meter-fill"></div>
              </div>
              <span className="percent">50%</span>
            </div>

          </div>
          :
          null
        }
      </Wrapper>
    );
  }
}

StarDropdown.propTypes = {

};

export default StarDropdown;
