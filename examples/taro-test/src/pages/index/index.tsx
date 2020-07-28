import React, { Component } from "react";
import taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.css";

export default class Index extends Component {
  componentWillMount() {
    taro
      .request({
        url: "http://localhost:8080/base/get",
        data: { name: "张三", age: 45 },
      })
      .then((res) => {
        console.log(res);
      });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
      </View>
    );
  }
}
