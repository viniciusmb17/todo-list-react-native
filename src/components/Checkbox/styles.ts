import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#4EA8DE',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: '#5E60CE',
    borderColor: '#5E60CE',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: 400,
    fontSize: 18,
  },
})
