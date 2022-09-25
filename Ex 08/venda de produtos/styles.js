import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box1: {
        backgroundColor: 'white',
        height: 280,
        borderWidth: 4,
        borderColor: "#20232a",
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'Blue',
        fontSize: 40,
        textAlign: 'center',
    },
    subtitle: {
        color: 'black',
        fontSize: 25,
        textAlign: 'start',
        marginLeft: 20,
    },
    btn: {
        width: 10,
        margin: 20,

    }
})

export { styles }