import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Pressable, Text, Image } from 'react-native'
function GoalInput({ inputChangeHandler, goal, addGoalHandler }) {
    const [modalState, setModalState] = useState(false);
    let modalClickHandler = () => {
        setModalState(prev => !prev)
    }
    let addGoalAndCloseModalHandler = () => {

        addGoalHandler();
        modalClickHandler();
    }
    return (
        <>
            <Pressable  onPress={modalClickHandler}  style={({pressed})=>pressed ? styles.pressedItem && styles.modalTogglerButton:styles.modalTogglerButton }
            android_ripple={{ color: '#dddddd' }}>
                <Text style={styles.text}>Log Goal</Text>
            </Pressable>
            <Modal visible={modalState} animationType='fade'>
                <View style={styles.inputContainer}>
                    <Image source={require('../assets/Images/adaptive-icon.png')} style={styles.image} />
                    <TextInput placeholder="Enter Goal" onChangeText={inputChangeHandler} value={goal} style={styles.input} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.btn}>
                            <Button title='Add Goal' onPress={addGoalAndCloseModalHandler} />
                        </View>
                        <View style={styles.btn}>
                            <Button title='Cancel' onPress={modalClickHandler} />
                        </View>
                    </View>

                </View>
            </Modal>
        </>
    );
}

export default GoalInput;

const styles = StyleSheet.create({

    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        flex: 2,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 6
    },
    pressedItem:{
        opacity:0.5,
        textAlign:"center"
    },
    input: {
        borderColor: "#ccc",
        borderWidth: 1,
        height: 34,
        color: '#000',
        width: '100%',
        paddingHorizontal: 15,
    },
    modalTogglerButton: {
        width: 100,
        alignSelf:'center',
        marginTop: 130,
        padding: 10,
        textTransform: 'capitalize',
        backgroundColor: 'purple',
    },
    text: {
        color: 'white',
        textAlign:'center'
    },
    buttonContainer: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    },
    btn:{
        marginLeft:10,
        width:100
    }
})