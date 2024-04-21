import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
        <Text style={styles.footerText}>© Copyright <Text style={{fontWeight:'900'}}>Social Bharat</Text>. All Rights Reserved</Text>
      <Text style={styles.footerText}>Designed By <Text style={{color:'#0373fc'}}>Netparam</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#CEDDD2',
    padding: 10,
    alignItems: 'center',
    //elevation:5,
    
  },
  footerText: {
    color: '#37423B',
    fontSize: 16,
    fontWeight:'bold'
  },
});

export default Footer;
