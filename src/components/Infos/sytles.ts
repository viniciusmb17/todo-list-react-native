import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
    fontFamily: 'Inter_700Bold',
  },
  completedInfoText: {
    color: '#8284FA',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
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
    fontFamily: 'Inter_400Regular',
  },
})
