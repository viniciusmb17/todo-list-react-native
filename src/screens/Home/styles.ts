import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  infos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 33,
    paddingHorizontal: 24,
  },
  infoContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  createdInfoText: {
    color: '#4EA8DE',
    fontWeight: 'bold',
    fontSize: 14,
  },
  completedInfoText: {
    color: '#8284FA',
    fontWeight: 'bold',
    fontSize: 14,
  },
  counter: {
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  counterText: {
    color: '#D9D9D9',
  },
})
