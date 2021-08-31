import React from 'react';
import {View, Text, Image} from 'react-native';
import AddtoCartButton from '../../AddtoCartButton';
import Price from '../../Price';
import styles from './styles';
import {dummyProductWithDiscount} from '../../utils/dummyData';
import Icon from 'react-native-vector-icons/Ionicons';
function getProduct(productId) {
  return dummyProductWithDiscount;
}
export default function ProductScreen(props) {
  const {productId} = props;
  const product = getProduct(productId);
  return (
    <View style={styles.container}>
      <Image source={{uri: product.imageUrl}} style={styles.image} />
      <View style={styles.titlewrapper}>
        <Icon name="md-arrow-back" style={styles.backIcon} />
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.productTitle}>{product.title}</Text>
        </View>
      </View>
      
      <Price price={product.price} discount={product.discount} />
      <Text>Description</Text>
      <Text>{product.discription}</Text>
      <View style={styles.buttonWrapper}>
      <AddtoCartButton />
      </View>
    </View>
  );
}
