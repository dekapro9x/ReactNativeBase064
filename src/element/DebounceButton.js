import PropTypes from "prop-types";
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { debounceButtonDefault, titleDebounceButtonDefault } from "src/css";
import { Loading } from "./Loading";
export class DebounceButton extends Component {
  static propTypes = {
    useLoading: PropTypes.bool.isRequired,
    useDelay: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.timeCountDelay = 0;
    this.state = { disabled: false, loading: false };
  }

  componentWillUnmount() {
    clearTimeout(this.timeCountDelay);
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
    const { useDelay = false, timeDelay = 1000 } = this.props;
    if (this.props.onPress) {
      this.props.onPress();
      if (useDelay) {
        this.setState({ loading: true });
        this.timeCountDelay = setTimeout(() => {
          this.setState({ loading: false });
        }, timeDelay);
      }
    }
  };

  renderTitle = () => {
    const { loading } = this.state;
    const {
      title = "DebonceButton",
      textTitleStyle,
      children,
      loadingColor,
      useLoading
    } = this.props;
    if (loading) {
      if (useLoading) {
        return <Loading color={loadingColor} />;
      } else {
        return null;
      }
    } else if (children) {
      return children;
    }
    if (title == "DebonceButton") {
      return (
        <Text style={[styles.titleDefault, textTitleStyle]}>
          {title}
        </Text>
      );
    } else {
      return (
        <Text style={[styles.titleDefault, textTitleStyle]}>
          {title}
        </Text>
      );
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
  touchDefault: debounceButtonDefault,
  titleDefault: titleDebounceButtonDefault
});
