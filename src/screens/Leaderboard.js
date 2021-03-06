import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMembersPoints } from '../actions';
import _ from 'lodash';
import * as Progress from 'react-native-progress';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions } from 'react-native';

const dimension = Dimensions.get('window');
const iteratees = ['points','lastName','firstName'];
const order = ['desc','asc','asc'];

class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: false,
      indeterminate: true,
      progress: .5
    };
  }

  componentWillMount() {
    this.props.fetchMembersPoints();
  }

   _keyExtractor = (item, index) => index;

  render() {
    const {
      containerStyle,
      contentContainerStyle,
      progress } = styles;
    const sortedMembers = _.orderBy(this.props.membersPoints, iteratees, order);

    return (
      <FlatList
          data={sortedMembers}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={({item, separators}) => (
          <View style={contentContainerStyle}>
            <View style={containerStyle}>
              <Text>{`${item.firstName} ${item.lastName}`}</Text>
              <Text>Points:{item.points}</Text>
              <Progress.Bar
                style={styles.progress}
                progress={.03}
                indeterminate={this.state.indeterminate}
                width={dimension.width * .9}
              />
            </View>
          </View>
        )}
      />
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    paddingVertical: 30,
  },
  contentContainerStyle: {
    margin: 1,
    backgroundColor: '#abc',
  },
  progress: {
    justifyContent: 'center',
  }
});

const mapStateToProps = ({ members }) => {
  const { membersPoints } = members;

  return { membersPoints };
};

const mapDispatchToProps = {
  fetchMembersPoints,
};

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
