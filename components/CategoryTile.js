import { View, Text,StyleSheet, Pressable } from 'react-native';

function CategoryTile({ color, title, id, onCategorySelector }) {
    return (
    <Pressable 
     style={({pressed})=>[pressed && styles.ripple,styles.tile,{backgroundColor:color}]}
     onPress={()=>onCategorySelector(id)}
     android_ripple={{color:'#ccc'}}
     >
    <Text style={[styles.title]}>{title}</Text>
    </Pressable>);
}

export default CategoryTile;


let styles = StyleSheet.create({
tile:{
    flex:1,
    padding:50,
    margin:6,
    borderRadius:8,
    shadowColor:'#000000',
    elevation:8,
    shadowOffset:{width:2,height:2},
    shadowOpacity:0.4,
    shadowRadius:2,
},
ripple:{
    opacity:0.5
},
title :{
    textAlign:'center'
}

})