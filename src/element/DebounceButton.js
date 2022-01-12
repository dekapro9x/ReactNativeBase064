import PropTypes from "prop-types";
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { blue900 } from "../const/Color";
import { SizeRpScreen } from "../resources/ResponsiveScreen";
import { Loading } from "./Loading";
export class DebounceButton extends Component {
  static propTypes = {
    useDelay: PropTypes.bool.isRequired
  };
  constructor(props) {
    super(props);
    this.timeCountDelay = 0;
    this.state = { disabled: false, loading: false };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.loading !== this.state.loading) {
      if (this.state.loading) {
        this.setState({ disabled: true });
      }
      if (!this.state.loading && this.state.disabled) {
        this.setState({ disabled: false });
      }
    }
  }

  setLoading = value => {
    this.setState({ loading: value });
  };

  onPress = () => {
    const { useDelay = false } = this.props;
    if (this.props.onPress) {
      this.props.onPress();
      if (useDelay) {
        this.setState({ loading: true });
        this.timeCountDelay = setTimeout(() => {
          this.setState({ loading: false });
        }, 1000);
      }
    }
  };

  renderTitle = () => {
    const { loading } = this.state;
    const { title, textStyle, children, loadingColor } = this.props;
    if (loading) {
      return <Loading color={loadingColor} />;
    } else if (title) {
      return (
        <Text style={textStyle}>
          {title}
        </Text>
      );
    } else {
      return children;
    }
  };

  render() {
    const { disabled } = this.state;
    const { style } = this.props;
    return (
      <TouchableOpacity
        style={[styles.touchDefault, style]}
        disabled={disabled}
        onPress={this.onPress}
        activeOpacity={0.8}
      >
        {this.renderTitle()}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  touchDefault: {
    height: 45,
    width: SizeRpScreen.width(96),
    backgroundColor: blue900,
  }
});