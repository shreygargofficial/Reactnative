import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, Image, Button, StyleSheet, ScrollView } from "react-native";
import { getPlaceById } from "../models/db";
import ButtonWithIcon from "../ui/ButtonWithIcon";
import { colors } from "../constants/color";

function PlaceDetail({ navigation, route }) {
    const myId = route.params.id;
    const isFocused = useIsFocused()
    const [detail, setDetail] = useState({})

    useEffect(() => {
        async function getDetail() {
            let myDetail = await getPlaceById(myId)
            // console.log(myDetail);
            setDetail(myDetail);
            navigation.setOptions({
                title: myDetail.title.toUpperCase()
            })
        }
        getDetail();
    }, [myId, isFocused])

    let maphandler = () => {

    }
    if (!detail) {
        return (
            <View style={styles.root}>
                <Text style={styles.title}>Loading</Text>
            </View>
        )
    }
    return (
        <ScrollView contentContainerStyle={styles.root}>
            <View>
                <Text style={styles.title}>{detail.title}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={{ uri: detail.image }} style={styles.image} resizeMode="contain" />
            </View>
            <View style={styles.imageContainer}>
                <Image source={{ uri: detail.camera }} style={styles.image} />
            </View>
            <View>
                <ButtonWithIcon name={'map'} size={30} color={colors.white} onPress={maphandler}>View Map</ButtonWithIcon>
            </View>
        </ScrollView>
    );
}

export default PlaceDetail;

let styles = StyleSheet.create({
    root: {
        // flex: 1,
        alignItems: 'center',
        paddingHorizontal: 40
    },
    title: {
        fontSize: 30,
        fontWeight: '900',
        textAlign: 'center',
        textTransform: 'uppercase',
        marginVertical: 20,
    },
    imageContainer: {
        borderRadius: 10,
        width: '100%',
        overflow: 'hidden',
        height: 200,
        marginVertical: 20
    },
    image: {
        width: '100%',
        height: '100%'

    },
    buttonContainer: {
        alignItems: 'center',
        marginVertical: 20,
    }
})