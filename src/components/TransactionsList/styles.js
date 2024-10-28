import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f5f5f5',
  },
  infoContent: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  trName: {
    fontSize: 19,
    color: '#333',
    marginTop: 10
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
    fontWeight: 'bold'
  },

  infoCard: {
    backgroundColor: '#fff',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  }
  
});

export default styles