import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/color";
import { useNavigation } from "@react-navigation/native";

function PlaceItem({ item: { camera, id, title, image, location } }) {
    const navigation = useNavigation();
    let pressHandler = (id) => {
        navigation.navigate('placeDetail', {
            id
        })
    }
    return (<Pressable style={styles.card}
        onPress={pressHandler.bind(this, id)}
    >
        <View style={styles.imageContainer}>
            <Image source={{ uri: camera }} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.location}>{location}</Text>
        </View>
        <View style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.image} />
        </View>

    </Pressable>);
}

export default PlaceItem;

let styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: colors.grey,
        marginVertical: 10,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 20,
    },
    imageContainer: {
        flex: 1
    },
    textContainer: {
        flex: 3,
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 100,
    },
    title: {
        fontWeight: '900',
        fontSize: 20,
        letterSpacing: 1,
        textTransform: 'uppercase'

    },
    location: {
        marginTop: 10,
    }


})