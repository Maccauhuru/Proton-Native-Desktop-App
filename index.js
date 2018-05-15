import React, { Component } from "react";
import { render, Window, App, Box, Text, TextInput } from "proton-native";
import crypto from "crypto";

class Example extends Component {
  state = { text: "", md5: "" };

  hash = text => {
    this.setState({ text });

    let md5 = crypto
      .createHash("md5")
      .update(text, "utf8")
      .digest("hex");

    this.setState({ md5 });
  };
  render() {
    return (
      <App>
        <Window title="Proton Native Rocks!" size={{ w: 300, h: 300 }} menuBar={false}>
          <Box>
            <TextInput onChange={text => this.hash(text)} />
            <Text>{this.state.md5}</Text>
          </Box>
        </Window>
      </App>
    );
  }
}

render(<Example />);