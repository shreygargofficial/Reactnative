import { useEffect, useLayoutEffect, useState } from "react";
import PlaceList from "../components/Places/PlaceList";
import { Text } from "react-native";
import IconButton from "../ui/IconButton";
import { colors } from "../constants/color";
import { getPlace } from "../models/db";
import { useIsFocused } from "@react-navigation/native";


function AllPlaces({ navigation, routes }) {
    const [placesItem, setPlacesItem] = useState([]);
    const isFocused = useIsFocused()
    let onAddButtonHandler = () => {
        navigation.navigate('addPlace')
    }
    useEffect(() => {
        let gettingPlaces = async () => {
            let placesArray = await getPlace();
            setPlacesItem(placesArray);
        }
        gettingPlaces();
    }, [routes, isFocused])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: ({ tintColor }) => {
                return <IconButton
                    name={'add'}
                    color={tintColor}
                    size={24}
                    onPress={onAddButtonHandler}
                />
            }
        })
    }, [])
    return (<PlaceList places={placesItem} />);
}

export default AllPlaces;