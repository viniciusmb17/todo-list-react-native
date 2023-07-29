import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'center',
    alignItems: 'center',
    height: 54.08,
    paddingHorizontal: 24,
    marginTop: -34,
  },
  input: {
    width: '100%',
    gap: 8,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#262626',
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#0d0d0d',
    fontSize: 16,
    color: '#F2F2F2',
    flexShrink: 1,
  },
  createButton: {
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
  },
})
