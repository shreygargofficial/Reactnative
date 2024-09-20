import { StyleSheet, SafeAreaView, FlatList, Platform } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryTile from '../components/CategoryTile'

function Category({navigation}) {
    let onCategorySelector = (id)=>{
        navigation.navigate('My Meal',{id:id})
    }
    return (
        <SafeAreaView style={[styles.root]}>
        <FlatList contentContainerStyle={{}} 
          scrollEnabled={true}
          alwaysBounceVertical={false}
          data={CATEGORIES}
          keyExtractor={({ id }) => id}
          renderItem={({item : {color ,title,id}}) => (
          <CategoryTile 
          color={color} 
          title={title} 
          id={id} 
          onCategorySelector={onCategorySelector}/>
        )}
          numColumns={2}
        />
      </SafeAreaView>
      );
}

export default Category;

let styles = StyleSheet.create({
    root: {
      flex: 1,
      marginTop:Platform.select({android:60,ios:0}),
     
    },
  })