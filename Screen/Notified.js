import { useEffect, useState } from "react";
import { Text, View } from "react-native";

function Notified({ route }) {
    const [data, setData] = useState('')
    useEffect(() => {
        let myData = route.params.data;
        setData(myData)
    }, [route.params])

    return (
        <View>
            <Text>Hello {JSON.stringify(data)}</Text>
        </View>
    );
}

export default Notified;