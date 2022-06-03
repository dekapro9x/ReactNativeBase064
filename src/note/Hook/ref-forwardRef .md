# Định nghĩa ref: 
https://viblo.asia/p/su-dung-ref-useref-va-forwardref-trong-react-6J3Zgyng5mB
ref hay còn gọi là reference (tham chiếu) . Để tương tác giữa các component trong DOM của React với nhau thì phải tham chiếu tới chính nó.
Hay nói cách khác ref cho chúng ra truy cập trực tiếp tới element và sửa đổi nó trực tiếp mà không cần phải thông qua props hay state
để component đó được render lại.

VD:  Muốn truy cập đến element TextInput thì sẽ gán ref rồi thực hiện focus() của textInput:

const refInput = useRef({});
<TextInput ref={refInput} />

=> Truy cập đến element props của TextInput focus() 
refInput.current.focus() 


# Định nghĩa forwardRef : 
+ ref có thể giúp truy cập đến 1 element.
+ tương tự forwardRef giúp truy cập đến React.Component khi chúng ta tách nhỏ 1 screen ra nhiều component và cần chúng tương tác qua lại với nhau.

VD :  
import React, { Component, useImperativeHandle, useRef } from "react";

const Child = React.forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    incrseaseNumber: () => setNumber(number + 1),
    returnText: () => text,
  }));

  return (
    <View>
    {children}
    </View>
  );
});

class Father extends React.Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
  }

  showTextInChild = () => {
    const txt = this.childRef.current.returnText();
    alert(txt);
  };

  increaseNumberInChild = () => {
    this.childRef.current.incrseaseNumber();
  };

  render() {
    return (
      <div className="App">
        <Child ref={this.childRef} />
        <button onClick={this.showTextInChild}>
          Show Text in Child compoent
        </button>
        <p></p>
        <button onClick={this.increaseNumberInChild}>
          Increase number in Child compoent
        </button>
      </div>
    );
  }
}

