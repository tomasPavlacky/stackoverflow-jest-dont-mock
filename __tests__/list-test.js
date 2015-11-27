import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

jest.mock('action/xhr');
jest.dontMock('list');
const List = require('list');

describe('List', () => {
  it('change data', () => {

    // It`s work if i use here require.
    //var fetch = require("../action/xhr");
    //console.log(fetch)

    var list = TestUtils.renderIntoDocument(<List />);

    //expect...
  });

});
