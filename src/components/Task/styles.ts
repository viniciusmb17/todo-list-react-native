import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 12,
    paddingRight: 8,
    paddingVertical: 12,
    backgroundColor: '#262626',
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#333333',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    marginBottom: 8,
  },
  content: {
    paddingLeft: 24,
    paddingRight: 32,
    flexShrink: 1,
    flexGrow: 0,
  },
  text: {
    maxWidth: 354,
    color: '#F2F2F2',
    lineHeight: 19.6,
  },
  textChecked: {
    color: '#808080',
    textDecorationLine: 'line-through',
  },
  // trashContainer: {
  //   width: 100,
  // },
})
