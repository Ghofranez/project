import React, { useRef } from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';
import { PagerDotIndicator } from 'react-native-indicators';

const imagesData = [
  { id: '1', source: require('../../assets/page2.png') },
  { id: '2', source: require('../../assets/p2.png') },
  { id: '3', source: require('../../assets/pag2.png') },
];

const ImageList = () => {
  const flatListRef = useRef(null);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        horizontal
        data={imagesData}
        renderItem={({ item }) => (
          <Image source={item.source} style={styles.image} />
        )}
        snapToAlignment="start"
        decelerationRate="fast"
        pagingEnabled
        onMomentumScrollEnd={(event) => {
          const pageIndex = Math.round(
            event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
          );
          flatListRef.current.scrollToIndex({ animated: true, index: pageIndex });
        }}
      />
      <PagerDotIndicator // Add the pager indicator
        pageCount={imagesData.length}
        dotStyle={styles.dot}
        selectedDotStyle={styles.selectedDot}
        containerStyle={styles.indicatorContainer}
        selectedIndex={0} // Initial selected index
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: 350,
    height: 350,
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 16,
  },
  dot: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    marginHorizontal: 4,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  selectedDot: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    marginHorizontal: 4,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});

export default ImageList;
