import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const Profile = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        {/* Profile Picture */}
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fprofile%2520picture%2F&psig=AOvVaw25BmCf7FO6Uj5McsLyC4vu&ust=1710246631579000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCODFp6yb7IQDFQAAAAAdAAAAABAE' }} // Replace with your image URI
            style={styles.profileImage}
          />
        </View>
        {/* Other drawer content */}
        <Text>Drawer Item 1</Text>
        <Text>Drawer Item 2</Text>
        {/* Add more drawer items as needed */}
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Half of width and height to make it circular
  },
});

export default Profile;
