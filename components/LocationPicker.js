
import { useEffect, useState } from "react";
import { PermissionStatus } from 'expo-image-picker';
import { useForegroundPermissions, getLastKnownPositionAsync } from 'expo-location';
import { Alert, StyleSheet, Linking, View, Text } from "react-native";
import { colors } from "../constants/color";
import ButtonWithIcon from "../ui/ButtonWithIcon";
import MapView, { Marker } from "react-native-maps";
import { useNavigation, useRoute } from "@react-navigation/native";

function LocationPicker({ locationChangeHandler }) {
    const [mylocation, setMyLocation] = useState(null)
    const route = useRoute();

    useEffect(() => {
        if (route.params && route.params.location) {
            setMyLocation(route.params.location)
            locationChangeHandler(route.params.location)
        }

    }, [route.params])

    const [permissionLocation, requestPermissionLocation] = useForegroundPermissions()
    const navigation = useNavigation()
    let pickLocation = () => {
        navigation.navigate('map')
    }

    let getMyLocation = async () => {
        if (permissionLocation.status == PermissionStatus.UNDETERMINED) {
            let myPermission = await requestPermissionLocation();
            if (myPermission.status != PermissionStatus.GRANTED) {
                Alert.alert('Permission needed', 'In order to locate you')
                return
            }
        }
        if (permissionLocation?.status == PermissionStatus.GRANTED) {
            let location = await getLastKnownPositionAsync({
            });

            let locationObj = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            }
            setMyLocation(locationObj)
            locationChangeHandler(locationObj)

        }
        if (permissionLocation.status == PermissionStatus.DENIED) {
            Alert.alert(
                'Permission needed',
                'You have denied location permissions. Please enable them from the app settings.', [
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
                {(mylocation) ?
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: mylocation.latitude,
                            longitude: mylocation.longitude,
                            latitudeDelta: 0.0009,
                            longitudeDelta: 0.009,
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: mylocation.latitude,
                                longitude: mylocation.longitude,
                            }}
                        />
                    </MapView>
                    :
                    <Text>No Location selected</Text>
                }
            </View>
            <View style={styles.row}>
                <ButtonWithIcon
                    name={'location'}
                    size={26}
                    color={colors.white}
                    onPress={getMyLocation}
                    style={styles.leftButton}>
                    Locate Me
                </ButtonWithIcon>
                <ButtonWithIcon
                    name={'location'}
                    size={26}
                    color={colors.white}
                    style={styles.rightButton}
                    onPress={pickLocation}>
                    Pick Location
                </ButtonWithIcon>
            </View>
        </>
    );
}

export default LocationPicker;

let styles = StyleSheet.create({
    imageView: {
        marginVertical: 30,
        height: 200,
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: colors.lightBlue
    },
    map: {
        height: '100%',
        width: '100%'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    leftButton: {
        marginRight: 20,
        flex: 1
    },
    rightButton: {
        flex: 1
    },
}) 