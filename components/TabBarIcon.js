import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const TabBarIcon = name => ({ tintColor }) => (
  <MaterialIcons
    style={{ backgroundColor: 'transparent' }}
    name={name}
    color={tintColor}
    size={24}
  />
);

export default TabBarIcon;
