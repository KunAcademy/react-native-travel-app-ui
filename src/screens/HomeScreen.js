import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image, Platform, TextInput } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Categories from '../components/categories';
import Avatar from "../../assets/images/avatar.png"
import SortCategories from '../components/sortCategories';
import Destination from '../components/destination';

const ios = Platform.OS === 'ios';
const topMargin = ios ? 'mt-3' : 'mt-10';
export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white w-full h-full">
      <ScrollView showsVerticalScrollIndicator={false} className="space-y-6 w-full">
        <View className="mx-5 flex-row justify-between items-center mb-10">
          <Text style={{ fontSize: wp(7)}} className="font-bold text-neutral-700">Let's Discover</Text>
          <TouchableOpacity>
            <Image source={Avatar} style={{ height: wp(12), width: wp(12)}} />
          </TouchableOpacity>
        </View>

        {/* search bar */}
        <View className="mx-5 mb-4">
          <View className="flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6">
            <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
            <TextInput
              placeholder='Search destination'
              placeholderTextColor={'gray'}
              className="flex-1 text-base mb-1 pl-1 tracking-wider"
            />
          </View>
        </View>

        {/* categories */}
        <View className="mb-4">
          <Categories />
        </View>

        <View className="mb-4">
          <SortCategories />
        </View>

        <View>
          <Destination />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}