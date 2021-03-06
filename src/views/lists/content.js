import _ from 'lodash';

import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Avatar, Button, Icon } from 'react-native-elements';

const USERS = [
  {
    name: 'Johh Smith',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    value: '- 164',
  },
  {
    name: 'Sarah Parker',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg',
    value: '+ 203',
    positive: true,
  },
  {
    name: 'Paul Allen',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
    value: '+ 464',
    positive: true,
  },
  {
    name: 'Terry Andrews',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/talhaconcepts/128.jpg',
    value: '- 80',
    positive: false,
  },
  {
    name: 'Andy Vitale',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/andyvitale/128.jpg',
    value: '- 230',
    positive: false,
  },
  {
    name: 'Katy Friedson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    value: '+ 160',
    positive: true,
  },
];

export default class ListContent extends Component {
  renderValue(user) {
    const { value, positive } = user;

    if (positive) {
      return (
        <View
          style={{
            backgroundColor: 'rgba(220,230,218,1)',
            width: 70,
            height: 28,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginLeft: 10,
          }}
        >
          <Icon name="md-arrow-dropup" type="ionicon" color="green" size={25} />
          <Text
            style={{
              color: 'green',
              fontFamily: 'regular',
              fontSize: 13,
              marginLeft: 5,
            }}
          >
            {value}
          </Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            backgroundColor: 'rgba(244,230,224,1)',
            width: 70,
            height: 28,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginLeft: 10,
          }}
        >
          <Icon name="md-arrow-dropdown" type="ionicon" color="red" size={25} />
          <Text
            style={{
              color: 'red',
              fontFamily: 'regular',
              fontSize: 13,
              marginLeft: 5,
            }}
          >
            {value}
          </Text>
        </View>
      );
    }
  }

  renderCard(user, index) {
    const { name, avatar } = user;

    return (
      <View
        key={index}
        style={{
          height: 60,
          marginHorizontal: 10,
          marginTop: 10,
          backgroundColor: 'white',
          borderRadius: 5,
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ marginLeft: 15 }}>
            <Avatar
              small
              rounded
              source={{
                uri: avatar,
              }}
              activeOpacity={0.7}
            />
          </View>
          <Text
            style={{
              fontFamily: 'regular',
              fontSize: 15,
              marginLeft: 10,
              color: 'gray',
            }}
          >
            {name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginRight: 10,
          }}
        >
          {this.renderValue(user)}
          <View
            style={{
              backgroundColor: 'rgba(222,222,222,1)',
              width: 35,
              height: 28,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
            }}
          >
            <Icon name="md-person-add" type="ionicon" color="gray" size={20} />
          </View>
        </View>
      </View>
    );
  }

  renderListCards() {
    return _.map(USERS, (user, index) => {
      return this.renderCard(user, index);
    });
  }

  render() {
    return (
      <>
        <ScrollView
          style={{ marginTop: 15, backgroundColor: 'rgba(241,240,241,1)' }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              backgroundColor: 'white',
              borderRadius: 5,
              alignItems: 'center',
              marginHorizontal: 10,
              height: 250,
              marginBottom: 10,
            }}
          >
            <View style={{ flex: 3, flexDirection: 'row' }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  width={145}
                  height={145}
                  source={{
                    uri:
                      'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
                  }}
                  activeOpacity={0.7}
                  avatarStyle={{ borderRadius: 145 / 2 }}
                  overlayContainerStyle={{ backgroundColor: 'transparent' }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    flex: 1,
                    marginTop: 10,
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'bold',
                      fontSize: 25,
                      color: 'rgba(98,93,144,1)',
                      marginLeft: -15,
                    }}
                  >
                    Paul Allen
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: 300,
                borderWidth: 0.5,
                borderColor: 'rgba(222, 223, 226, 1)',
                marginHorizontal: 20,
                height: 1,
                marginVertical: 10,
              }}
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Button
                  title="View Profile"
                  buttonStyle={{
                    height: 33,
                    width: 120,
                    backgroundColor: 'rgba(222, 223, 226, 1)',
                    borderRadius: 5,
                  }}
                  titleStyle={{
                    fontFamily: 'regular',
                    fontSize: 13,
                    color: 'gray',
                  }}
                  onPress={() => console.log('aye')}
                  underlayColor="transparent"
                />
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Button
                  title="Add User"
                  buttonStyle={{
                    height: 33,
                    width: 120,
                    backgroundColor: 'rgba(113, 154, 112, 1)',
                    borderRadius: 5,
                  }}
                  titleStyle={{
                    fontFamily: 'regular',
                    fontSize: 13,
                    color: 'white',
                  }}
                  onPress={() => console.log('aye')}
                  underlayColor="transparent"
                />
              </View>
            </View>
          </View>
          {this.renderListCards()}
        </ScrollView>
      </>
    );
  }
}
