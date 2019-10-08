/**
 * @format
 */

import 'react-native';
import React from 'react';
import comp1 from '../comps/comp1';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import comp1 from '../comps/comp1';

it('renders Hi correctly', () => {
  renderer.create(<comp1 />);
});