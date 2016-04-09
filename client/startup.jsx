import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Hello from './Hello.jsx';

Meteor.startup(() => {
  render(<Hello />, document.getElementById('container'));
});
