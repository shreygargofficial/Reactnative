import { FlatList } from "react-native";
import PlaceItem from "./PlaceItem";

function PlaceList({ places }) {
    return (
        <FlatList
            data={places}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <PlaceItem item={item} />}
        />
    );
}

export default PlaceList;