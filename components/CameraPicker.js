import { useState } from "react";
import { launchCameraAsync, PermissionStatus, useCameraPermissions } from 'expo-image-picker';

import { Alert, Image, StyleSheet, Linking, View, Text } from "react-native";
import { colors } from "../constants/color";
import ButtonWithIcon from "../ui/ButtonWithIcon";

function CameraPicker({ cameraChangeHandler }) {
    const [camera, serCamera] = useState();
    const [permission, requestPermission] = useCameraPermissions();

    let takePic = async () => {
        if (permission.status == PermissionStatus.UNDETERMINED) {
            let myPermission = await requestPermission();
            if (myPermission.status != PermissionStatus.GRANTED) {
                Alert.alert('Permission needed', 'In order to click images', [
                    { text: 'Enable in settings' }
                ]
                )
                return
            }
        }
        if (permission?.status == PermissionStatus.GRANTED) {
            let camera = await launchCameraAsync({
                aspect: [16, 9],
                allowsEditing: true
            });
            if (camera && !camera.canceled) {
                serCamera(camera.assets[0].uri)
                cameraChangeHandler(camera.assets[0].uri)
            }

        }
        if (permission.status == PermissionStatus.DENIED) {
            Alert.alert(
                'Permission needed',
                'You have denied camera permissions. Please enable them from the app settings.', [
                {
                    text: 'Enable in settings',
                    onPress: async () => await Linking.openSettings()
                }
            ]
            )
        }

    }
    return (
        <>
            <View style={styles.imageView}>
                {camera ? <Image
                    source={{ uri: camera }}
                    style={{ width: '100%', height: '100%' }} resizeMode="contain" /> : <Text>No Pic Clicked</Text>}
            </View>
            <ButtonWithIcon
                name={'camera'}
                size={26}
                color={colors.white}
                onPress={takePic}>
                Take Pic
            </ButtonWithIcon>
        </>
    );
}

export default CameraPicker;

let styles = StyleSheet.create({
    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginVertical: 30,
        height: 200,
        backgroundColor: colors.lightBlue
    },
}) 