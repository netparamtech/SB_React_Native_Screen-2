import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';

const ChoosePhoto = () => {
  
  const [selectedImage, setSelectedImage] = useState(null);

  const handleLaunchImageLibrary = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel) {
        setSelectedImage(response.assets[0]);
      }
    });
  };

  const handleUploadImage = () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', {
        uri: selectedImage.uri,
        type: selectedImage.type,
        name: selectedImage.fileName
      });

      axios.post('YOUR_SERVER_ENDPOINT', formData)
        .then(response => {
          console.log('Image uploaded successfully:', response.data);
          // Handle success response
        })
        .catch(error => {
          console.error('Error uploading image:', error);
          // Handle error response
        });
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 5, padding: 10, backgroundColor:'white',borderColor:'#1255'}}>
        <Button title="Choose File" onPress={handleLaunchImageLibrary} />
        <Text style={{ flex: 1, marginLeft: 10, color:'black',fontSize:15 }}>{selectedImage ? selectedImage.fileName : 'No file chosen'}</Text>
      </View>

      <Button title="Upload" onPress={handleUploadImage} disabled={!selectedImage} />
      
    </View>
  );
};

export default ChoosePhoto;
