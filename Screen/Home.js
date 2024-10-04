import { setNotificationHandler, scheduleNotificationAsync, addNotificationReceivedListener, addNotificationResponseReceivedListener, getPermissionsAsync, requestPermissionsAsync, getExpoPushTokenAsync } from 'expo-notifications'
import { Text, SafeAreaView, Button, Alert } from 'react-native'
import { useEffect } from 'react';
import Constants from 'expo-constants';
function Home({ navigation }) {
    setNotificationHandler({
        handleNotification: async () => {
            return {
                shouldShowAlert: true,
                shouldSetBadge: true
            }
        }
    })
    useEffect(() => {
        let sub1 = addNotificationReceivedListener((res) => {
            console.log("Recieved ", res)
        })
        let sub2 = addNotificationResponseReceivedListener((res) => {
            navigation.navigate('notified', {
                data: res.notification.request.content.data
            })
        })
        return () => {
            sub1.remove();
            sub2.remove();
        }
    }, []);

    let scheduleMyNotification = () => {
        scheduleNotificationAsync({
            content: {
                title: 'Shrey sent you a notificatipon',
                body: 'Yes this is the notifucation',
                data: { name: "Shrey Garg" }
            },
            trigger: {
                seconds: 5,

            }
        })
    }
    useEffect(() => {
        const configurePermission = async () => {
            let { status } = await getPermissionsAsync();
            let finalStatus = status;
            console.log('Current Status', status);
            if (status !== 'granted') {
                let { status } = await requestPermissionsAsync({
                    projectId: projectId
                });
                finalStatus = status;
            }
            if (finalStatus !== 'granted') {
                Alert.alert("Enable setting for notification", "Please Enable");
                return
            }
            // Retrieve projectId
            const projectId = Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;

            if (!projectId) {
                console.error("Project ID is missing.");
                return;
            }
            let token = await getExpoPushTokenAsync();
            console.log('Token ', token);
        }
        configurePermission()
    }, [])
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hello</Text>
            <Button onPress={scheduleMyNotification} title='send' />
        </SafeAreaView>

    );
}

export default Home;