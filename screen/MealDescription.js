import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native'
import { MEALS } from '../data/dummy-data';
import { useContext, useLayoutEffect, useMemo } from 'react';
import { styles } from '../components/MealTile';
import {Ionicons} from '@expo/vector-icons'
import { mealContext } from '../context/FavoriteMealProvider';

function MealDescription({ route,navigation }) {
    const { id } = route.params;
    const mealCtx = useContext(mealContext)
    let isFavorite = mealCtx.ids.includes(id);
    const myMeal = useMemo(() => {
        return MEALS.find(ele => ele.id == id);
    }, [MEALS, id]);

    let favoriteHandler =()=>{
        if(isFavorite){
            mealCtx.removeFavorite(id)
        }
        else{
            mealCtx.addFavorite(id)
        }
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:myMeal.title,
            headerRight:({size,color})=><Ionicons onPress={favoriteHandler} name={isFavorite ? "star" : "star-outline"} size={20} color={color}/>
        })

    },[isFavorite,navigation])
    return (<SafeAreaView>
        <ScrollView>
            <Image source={{ uri: myMeal.imageUrl }} style={styles.cardImage} />
            <View style={stylesMD.descriptionContent}>
                <Text style={[styles.bold, styles.textCenter]}>{myMeal.title}</Text>
                <View style={styles.flexRow}>
                    <Text style={styles.marginRight}>{myMeal.duration}m</Text>
                    <Text style={[styles.upperCases, styles.marginRight]}> {myMeal.complexity}</Text>
                    <Text style={[styles.upperCases, styles.marginRight]}>{myMeal.affordability}</Text>
                </View>
                <View>
                    <Text style={stylesMD.ingredients}>Ingredients</Text>
                    {myMeal.ingredients.map(ele=>{
                        return <View key={ele} style={stylesMD.itemSlab}>
                            <Text style={[styles.textCenter,stylesMD.white]}>
                                {ele}
                            </Text>
                        </View>
                    })}
                </View>
                <View>
                    <Text style={stylesMD.ingredients}>Steps</Text>
                    {myMeal.steps.map(ele=>{
                        return <View key={ele} style={stylesMD.itemSlab}>
                            <Text style={[styles.textCenter,stylesMD.white]}>
                                {ele}
                            </Text>
                        </View>
                    })}
                </View>
            </View>

        </ScrollView>
    </SafeAreaView>);
}

export default MealDescription;

let stylesMD = StyleSheet.create({
    descriptionContent:{
        padding:40
    },
    cardImage: {
        width: '100%',
        height: 200
    },
    ingredients: {
        fontWeight: '900',
        color: 'lightbrown',
        textAlign: 'center',
        fontSize: 24,
        borderBottomWidth: 2,
        borderBottomColor: 'lightbrown',
        paddingBottom: 10
    },
    itemSlab:{
        padding:10,
        borderRadius:10,
        marginVertical:5,
        backgroundColor:'brown'
    },
    white:{
        color:'white'
    }
})