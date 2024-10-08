import React from 'react';
import {
    Alert,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

type ToDoListProps = {
    tasks: string[]
}

export default function ToDoList({tasks} : ToDoListProps): React.JSX.Element {

    return (        
        <View style={styles.container}>
            <Text style={styles.header}>ToDoList</Text>
            <View style={styles.divider}/>
            <View>
                {tasks.map((task, index) => (
                    <View style={styles.taskItem}>
                        <BouncyCheckbox
                            size={30}
                            fillColor="green"
                            onPress={(isChecked: boolean) => {Alert.alert(`Task ${task} is ${isChecked ? 'complete' : 'not complete'}`)}} 
                            />
                        <Text key={index} style={styles.taskTxt}>{task}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    taskItem: {
        flexDirection: 'row',
        marginBottom: 10,
    },

    taskTxt: {
        fontSize: 20,
        marginLeft: 10,
    },

    divider: {
        height: 1,
        width: '100%',
        backgroundColor: 'black',
        marginVertical: 10,
    },
    
});