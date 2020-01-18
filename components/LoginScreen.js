import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

import Wallpaper from './Wallpaper';
import Logo from './Logo';
import Form from './Form';
import Button_Submit from './Button_Submit';

export default class LoginScreen extends Component {
    render() {
      return (
        <Wallpaper>
          <Logo />
          <Form />
          <Button_Submit/>
        </Wallpaper>
      );
    }
  }