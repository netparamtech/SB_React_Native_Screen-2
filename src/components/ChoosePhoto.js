import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const ChoosePhoto = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleLaunchImageLibrary = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel) {
        setSelectedImage(response.assets[0].fileName);
        
      }
    });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 5, padding: 10, backgroundColor:'white',borderColor:'#1255'}}>
        <Button title="Choose File" onPress={handleLaunchImageLibrary} />
        <Text style={{ flex: 1, marginLeft: 10, color:'black',fontSize:15 }}>{selectedImage ? selectedImage : 'No file chosen'}</Text>
      </View>
    </View>
  );
};

export default ChoosePhoto;
