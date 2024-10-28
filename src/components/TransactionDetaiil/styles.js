import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 30,
        marginHorizontal: 30,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 3
    },
    basicInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    trName: {
        fontSize: 25,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#333',
    },
    trDesc: {
        fontSize: 16,
        marginTop: 20
    },
    trCat: {
        fontSize: 16,
        fontStyle: 'italic'
    },
    trpayment: {
        fontSize: 16,
        marginVertical: 10,
        marginTop: 20,
        fontStyle: 'normal',
    },
    trAmount: {
        fontSize: 18,
        marginTop: 10
    },
    trPayment: {
        fontStyle: 'italic'
    },
    trDate: {
        marginTop: 10,
        marginBottom: 10,
        fontStyle: 'italic',
    },
    trcard: {
        marginTop: 10,
        fontSize: 17,
        fontStyle: 'italic',
    },
    trtitle: {
        fontSize: 19,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginTop: 30
    },
    cardContent: {
        paddingHorizontal: 20
    }

});

export default styles