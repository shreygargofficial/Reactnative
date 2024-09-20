import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'

function MealTile({
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    id
}) {
    const navigation = useNavigation()
    return (
        <Pressable android_ripple={{color:'#ccc'}} style={({pressed})=>[pressed && {opacity:0.5},styles.card]} onPress={() => navigation.navigate("About My Meal",{id:id})}>
            <Image source={{ uri: imageUrl }} style={styles.cardImage} />
            <View style={styles.cardTextContainer}>
                <Text style={[styles.bold, styles.textCenter]}>{title}</Text>
                <View style={styles.flexRow}>
                    <Text style={styles.marginRight}>{duration}m</Text>
                    <Text style={[styles.upperCases, styles.marginRight]}> {complexity}</Text>
                    <Text style={[styles.upperCases, styles.marginRight]}>{affordability}</Text>
                </View>

            </View>
        </Pressable>);
}

export default MealTile;

export let styles = StyleSheet.create({
    card: {
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'white'
    },
    marginRight: {
        marginRight: 5,
        color: '#555'
    },
    cardTextContainer: {
        padding: 10,
    },
    textCenter: {
        textAlign: 'center'
    },
    flexRow: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    bold: {
        fontWeight: '900',
        fontSize: 29
    },
    upperCases: {
        textTransform: 'uppercase'
    },
    cardImage: {
        width: '100%',
        height: 200
    }
})

