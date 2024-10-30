import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // container: {
  //   padding: 16,
  //   flexDirection: 'row'
  // },
  totalExp: {
    marginRight: 15,
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  totalCost: {
    marginTop: 6,
    fontSize: 18
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  summaryCard: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  summaryLabel: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4a235a',
  },
  summaryValue: {
    fontSize: 18,
    color: 'red',
    fontStyle: 'italic'
  },
  transactionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  }

});

export default styles