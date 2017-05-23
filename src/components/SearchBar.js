import React from 'react';
import styled from 'styled-components';
import { compose, withHandlers, withState } from 'recompose';

const Wrapper = styled.div`
  padding-top: 10px;
  margin-left: 20px;
  border-radius: 4px 4px 4px 4px;
  overflow: hidden;
  width: 100%;
  
  form {
    display: flex;
    border-radius: 4px;
    overflow: hidden;

    select {
      height: 35px;
      line-height: 35px;
      border: 0;
      color: #777;
      font-size: 12px;
      background-color: #f3f3f3;
      cursor: pointer;
      padding: 0 0.5rem;

      &:hover {
        background-color: #dadada;
      }

      option {
        font-size: 14px;
        color: black;
      }
    }

    input {
      text-indent: 8px;
      padding: 6px 10px 6px 0;
      font-size: 15px;
      color: #111;
      border: none;
      width: 100%;

      &:focus {
        outline: 0px;
      }

    }
  }

  .nav-left {
    height: 35px;
    background-color: #f3f3f3;
    border-right: 1px solid #cdcdcd;
  }

  .nav-right {
    background-color: #febd69;
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: #f3a847;
    }
    
    #search-logo {
      background: url(https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global_bluebeacon-1x_optimized._CB281044790_.png);
      background-position: -10px -290px
      width: 21px;
      height: 21px;
      padding: 7px;
      display: block;
    }

    input {
      display: none;
    }
  }
  
`;

const enhance = compose(
  withState('value', 'updateValue', ''),
  withHandlers({
    onChange: props => event => {
      props.updateValue(event.target.value);
    },
    onSubmit: props => event => {
      event.preventDefault();
      window.location.href = `https://www.amazon.com/s/ref=nb_sb_ss_c_1_15?url=search-alias%3Daps&field-keywords=${props.value}`;
    },
  })
);

const SearchBar = enhance(({ value, onChange, onSubmit }) => (
  <Wrapper>
    <form onSubmit={onSubmit} action="">

      <div className="nav-left">
        <select title="Search In" name="department" id="">
          <option value="All">All</option>
        </select>
      </div>

      <input type="text" value={value} onChange={onChange} />

      <div className="nav-right">
        <label id="search-logo">
          <input value="Go" type="submit" />
        </label>
      </div>
    </form>
  </Wrapper>
));

export default SearchBar;
