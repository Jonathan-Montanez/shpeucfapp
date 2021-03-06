import React, { Component } from 'react';
import {Text, View, StyleSheet }from 'react-native';
import { Actions } from 'react-native-router-flux';
import { List, ListItem } from 'react-native-elements';

  const menuItems = [
    {
      title: 'E-Board',
      icon: 'people',
      screen: 'EBoard'
    },
    {
      title: 'Feedback / Suggestions',
      icon: 'feedback',
      screen: 'ComingSoon'
    },
    {
      title: 'Contributors',
      icon: 'folder-shared',
      screen: 'ComingSoon'
    },
    {
      title: 'Terms of Service',
      icon: 'insert-drive-file',
      screen: 'ComingSoon'
    },
    {
      title: 'Privacy Policy',
      icon: 'insert-drive-file',
      screen: 'WebPageShow',
      uri:"http://www.shpeucf.com/privacy-policy/"
    },
    {
      title: 'Version',
      icon: 'beenhere',
      screen: 'Version',
      content: "Current version: v1.0-alpha",
      footer: 'Check our GitHub Page - SHPEUCF'
    }
    ];

class About extends Component {

  render() {
    return (
      <View>
        <List>
          {
            menuItems.map((menuItem, i) => (
              <ListItem
                key={i}
                title={menuItem.title}
                leftIcon={{name: menuItem.icon}}
                onPress={() => Actions[menuItem.screen]({ title: menuItem.title,
                                                          uri: menuItem.uri,
                                                          content: menuItem.content,
                                                          footer: menuItem.footer })}
              />
            ))
          }
        </List>
      </View>
    );
  };
}

export { About };
