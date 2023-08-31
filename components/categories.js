import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Categories() {
  return (
    <View className="space-y-5">
      <View className="mx-5 flex-row justify-between items-center">
        <Text style={{fontSize: wp(4) }} className="font-semibold text-neutral-700">Categories</Text>
        <TouchableOpacity>
          <Text style={{fontSize: wp(4)}}>See all</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}