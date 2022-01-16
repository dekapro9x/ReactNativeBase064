import React, {PureComponent} from 'react';
import {debounce} from 'lodash';

const PreventDoubleClickComponentHOC = (WrappedComponent) => {
  class PreventDoubleClick extends PureComponent {
    debouncedOnPress = () => {
      this.props.onPress &&
        this.props.onPress({
          id: this.props.id,
          data: this.props.data,
        });
    };

    onPress = debounce(this.debouncedOnPress, this.props.waitTitme || 700, {
      leading: true,
      trailing: false,
    });

    render() {
      return <WrappedComponent {...this.props} onPress={this.onPress} />;
    }
  }

  PreventDoubleClick.displayName = `PreventDoubleClickComponentHOC(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;
  return PreventDoubleClick;
};

export  {PreventDoubleClickComponentHOC};
