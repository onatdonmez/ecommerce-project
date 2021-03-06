import React, { useState, useEffect } from 'react'

import { TouchableOpacity, ScrollView } from 'react-native';

import { View, Text } from 'react-native'

import { Button, Icon } from 'react-native-elements'

import { NavigationContainer, useNavigation } from '@react-navigation/native';

import config from '../env/config'


export default function category() {

    const [categories, setCategories] = useState([]);


 //GET Method here

 const getCategories = () =>

 {

     fetch(config.apiurl + 'api/categories')

         .then((res) => res.json())

         .then((data) => {

             setCategories(data);

     })

 }


 //After rendering this block works

 useEffect(() => {


     getCategories();


 }, []);


 //DELETE Method here. Delete which item is press

 const removeCategory = (id) => {

     let requestoptions = {

         method: 'DELETE',

         body: JSON.stringify({ id: id })

     }

     fetch(config.apiurl + 'api/categories/' + id, requestoptions)

         .then((res) => res.json())

         .then((data) => {

             getCategories();


         })

 }


 const navigation = useNavigation();


 function moveNewCategory() {

     navigation.navigate('NewCategory');

 }



 function moveCategoryUpdate(id,description,name){

     navigation.navigate('CategoryUpdate',{

     id:id,

     description:description,

     name:name});

   }







 return (

     <ScrollView style={{ flex: 1, padding: 20 }}>


         <TouchableOpacity style={{ flex: 8, backgroundColor: '#EF9630', padding: 20, borderRadius: 20, marginTop: 10 }} onPress={() => moveNewCategory()}>

             <Text style={{ color: 'white' }}>Add Category</Text>

         </TouchableOpacity>


         {

             categories.map((item) => (

                 <TouchableOpacity style={{ flex: 1, backgroundColor: '#EF9630', padding: 20, borderRadius: 20, marginTop: 10 }}>

                     <Text style={{ color: 'white', textAlign: 'center' }}>ID: {item.id}</Text>

                     <Text style={{ color: 'white', textAlign: 'center' }}>Name: {item.name}</Text>

                     <Text style={{ color: 'white', textAlign: 'center' }}>Description: {item.description}</Text>

                     <Icon onPress={() => removeCategory(item.id)} size={40} name='delete' color='white' ></Icon>

                     <Icon onPress={() => moveCategoryUpdate(item.id,item.description,item.name)} size={40} name='update' color='white' ></Icon>

                 </TouchableOpacity>

             ))

         }

     </ScrollView>

 )


}