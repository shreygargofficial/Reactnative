import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/color";
import ButtonWithIcon from "../ui/ButtonWithIcon";
import { launchImageLibraryAsync } from "expo-image-picker";

function ImagePicker({ imageChangeHandler }) {

    const [image, setImage] = useState();

    let choosePic = async () => {
        let image = await launchImageLibraryAsync({
            aspect: [1, 1]
        });
        if (image && !image.canceled) {
            setImage(image.assets[0].uri)
            imageChangeHandler(image.assets[0].uri)
        }
    }
    return (<>
        <View style={styles.imageView}>
            {
                image ?
                    <Image source={{ uri: image }} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
                    : <Text>No Image Selected</Text>
            }
        </View>
        <ButtonWithIcon
            name={'camera'}
            size={26}
            color={colors.white}
            onPress={choosePic}>
            Choose Pic
        </ButtonWithIcon>
    </>);
}

export default ImagePicker;

let styles = StyleSheet.create({
    imageView: {
        marginVertical: 30,
        height: 200,
        borderRadius: 20,
        backgroundColor: colors.lightBlue,
        justifyContent: 'center',
        alignItems: 'center',
    },
}) 