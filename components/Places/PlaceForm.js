import { useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, TextInput, View } from "react-native";
import { colors } from "../../constants/color";
import ImagePicker from "../ImagePicker";
import CameraPicker from "../CameraPicker";
import LocationPicker from "../LocationPicker";
import ButtonWithIcon from "../../ui/ButtonWithIcon";
import { insertPlace } from "../../models/db";
import { useNavigation } from "@react-navigation/native";

function PlaceForm() {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [camera, setCamera] = useState('');
    const [location, setLocation] = useState('');
    const navigation = useNavigation();
    const locationChangeHandler = (val) => {
        setLocation(val)
    }
    const imageChangeHandler = (val) => {
        setImage(val)

    }
    const cameraChangeHandler = (val) => {
        setCamera(val)

    }
    const titleChangeHandler = (value) => {
        setTitle(value)
    }
    const submitHandler = async () => {
        console.log("Submiting");
        if (title && camera && image && location) {
            console.log("Submitted ", title, camera, image, location);
            try {
                let result = await insertPlace(title, image, camera, JSON.stringify(location))
                if (result.lastInsertRowId && result.changes)
                    navigation.navigate("allPlace");
            }
            catch (e) {
                console.log("Unable to insert", e)
            }
        }

    }
    return (
        <ScrollView style={styles.form} contentContainerStyle={{ paddingBottom: 100 }}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Title"
                    value={title}
                    onChangeText={titleChangeHandler} />
            </View>
            <ImagePicker imageChangeHandler={imageChangeHandler} />
            <CameraPicker cameraChangeHandler={cameraChangeHandler} />
            <LocationPicker locationChangeHandler={locationChangeHandler} />
            <ButtonWithIcon
                name={'add'}
                onPress={submitHandler}
                color={colors.white}
                style={styles.buttonSubmit}>
                Submit
            </ButtonWithIcon>
        </ScrollView>);
}

export default PlaceForm;

const styles = StyleSheet.create({
    form: {
        // borderWidth: 1,
        paddingVertical: 70,
        paddingHorizontal: 20,

    },
    inputContainer: {
        borderRadius: 7
    },
    input: {
        paddingVertical: 15,  // Padding to ensure space for text
        paddingHorizontal: 8,
        backgroundColor: 'white',
        fontSize: 18,
        borderRadius: 10,
        color: colors.black,
        borderBottomColor: colors.grey,
        borderBottomWidth: 1,
    },
    buttonSubmit: {
        backgroundColor: colors.darkRed,
        paddingVertical: 14,
        paddingHorizontal: 30
    },
})

