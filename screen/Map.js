import { useLayoutEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../ui/IconButton";

function Map({ navigation }) {
    const [location, setLocation] = useState();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: ({ tintColor }) => <IconButton name={"save"} size={25} color={tintColor} onPress={saveHandler} />
        })
    }, [location]);

    const onRegionChange = (val) => {
        let obj = {
            latitude: val.nativeEvent.coordinate.latitude,
            longitude: val.nativeEvent.coordinate.longitude
        }
        setLocation(obj)

    }
    let saveHandler = () => {

        if (location) {
            navigation.navigate('addPlace', {
                location: location
            })
        }
        else {
            Alert.alert('Choose Location', "You haven't selected any location", [
                {
                    text: 'Select Location'
                }
            ])
        }
    }


    return (<View style={styles.root}>
        <MapView initialRegion={{
            latitude: 18.561149913700707,
            longitude: 73.78006547957942,
            latitudeDelta: 9,
            longitudeDelta: 9
        }}
            onPress={onRegionChange}
            style={styles.map}
        >
            {location &&
                <Marker
                    title="Picked Location"
                    coordinate={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                    }}

                >

                </Marker>
            }
        </MapView>
    </View>);
}

export default Map;

let styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%'
    },
})