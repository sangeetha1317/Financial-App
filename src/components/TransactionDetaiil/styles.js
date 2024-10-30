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
        color: '#4a235a',
    },
    trDesc: {
        fontSize: 16,
        marginTop: 20,
        fontWeight: '500',
        color: '#4a235a'
    },
    trCat: {
        fontSize: 16,
        fontStyle: 'italic',
        color: '#4a235a'
    },
    paymentInfo: {
        flexDirection: 'row',
    },
    trpaytitle: {
        fontSize: 16,
        marginVertical: 10,
        marginTop: 20,
        color: '#4a235a',
        fontWeight: 'bold',
        fontStyle: 'normal',
    },
    trpayment: {
        fontSize: 16,
        marginVertical: 10,
        marginTop: 20,
        color: '#4a235a',
        fontStyle: 'normal',
    },
    trDate: {
        marginTop: 10,
        marginBottom: 10,
        fontStyle: 'italic',
        fontWeight: '600',
        
        color: '#4a235a'
    },
    cardTitle: {
       fontWeight: '500',
       fontStyle: 'normal'
    },
    trcard: {
        marginTop: 20,
        fontSize: 17,
        fontStyle: 'italic',
        color: '#4a235a'
    },
    trCost: {
        fontSize: 16,
        fontStyle: 'italic',
        color: 'red'
    },
    trtitle: {
        fontSize: 19,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginTop: 30,
        color: '#4a235a',

    },
    cardContent: {
        paddingHorizontal: 20
    }

});

export default styles