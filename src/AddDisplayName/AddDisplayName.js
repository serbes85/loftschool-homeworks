import React, { Component } from 'react';

/*
  Напишите простой HOC и укажите для него displayName
*/

export const withDisplayName = (WrappedComponent) => {
  class withDisplayName extends Component {}
  withDisplayName.displayName = getDisplayName(WrappedComponent);

  return withDisplayName;

  function getDisplayName(WrappedComponent) {
    return 'HOC' + (WrappedComponent.displayName || 'Component');
  }
};
