import React from "react"
import { AntDesign} from "@expo/vector-icons"
import {useRef,useState} from "react"
import {ScrollView,StatusBar,StyleSheet,Text,TextInput,TouchableOpacity,View,ToastAndroid, SafeAreaView, Platform, Pressable, Image} from "react-native"
import {SliderBox} from "react-native-image-slider-box"
import { COLORS } from "../theme/theme"


export default function Home() {
  const images = [
    "https://img.etimg.com/thumb/msid-93051525,width-1070,height-580,imgsize-2243475,overlay-economictimes/photo.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/PD23/Launches/Updated_ingress1242x550_3.gif",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Books/BB/JULY/1242x550_Header-BB-Jul23.jpg",
  ];
  return (
    <>
    <SafeAreaView style={{paddingTop:Platform.OS === "android" ? 40 : 0,flex:1,backgroundColor:'white'}}>
      <View>
        <View style={{
          backgroundColor:COLORS.primaryBackgroundColor,
          padding:10,
        }}>
        <View style={{
          flexDirection:'row',
          alignItems:'center',
          gap:5,
          paddingRight:15
        }}>
          <Pressable style={{
            flexDirection:'row',
            alignItems:'center',
            marginHorizontal:7,
            gap:10,
            backgroundColor:'white',
            borderRadius:3,
            height:38,
            flex:1
          }}>
            <AntDesign style={{paddingLeft:10}} name="search1" size={22} color="black"/>
            <TextInput placeholder="Search book here"/>
          </Pressable>
          <AntDesign name="shoppingcart" size={28} color="white" />
        </View>
        </View>
        <ScrollView>
          <View style={{marginTop:20}}>
          <ScrollView style={{}} horizontal={true}>
            <View style={{flexDirection:'row',gap:30,paddingLeft:20,paddingRight:20}}>
            <View style={{flexDirection:'column',gap:10,alignItems:'center'}}>
            <View style={{width:80,height:80,backgroundColor:COLORS.primaryBackgroundBox,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
              <Image style={{width:65,height:65,borderRadius:10}} source={require('../assets/vh.jpg')}/>
            </View>
            <Text style={{textAlign:'center'}}>Văn học</Text>
            </View>
            <View style={{flexDirection:'column',gap:10,alignItems:'center'}}>
            <View style={{width:80,height:80,backgroundColor:COLORS.primaryBackgroundBox,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
              <Image style={{width:65,height:65,borderRadius:10}} source={require('../assets/kt.jpg')}/>
            </View>
            <Text style={{textAlign:'center'}}>Kinh tế</Text>
            </View>
            <View style={{flexDirection:'column',gap:10,alignItems:'center'}}>
            <View style={{width:80,height:80,backgroundColor:COLORS.primaryBackgroundBox,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
              <Image style={{width:65,height:65,borderRadius:10}} source={require('../assets/tam-li.png')}/>
            </View>
            <Text style={{textAlign:'center'}}>Tâm lý</Text>
            </View>
            <View style={{flexDirection:'column',gap:10,alignItems:'center'}}>
            <View style={{width:80,height:80,backgroundColor:COLORS.primaryBackgroundBox,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
              <Image style={{width:65,height:65,borderRadius:10}} source={require('../assets/ky-nang-song.jpg')}/>
            </View>
            <Text style={{textAlign:'center'}}>Kỹ năng sống</Text>
            </View>
            <View style={{flexDirection:'column',gap:10,alignItems:'center'}}>
            <View style={{width:80,height:80,backgroundColor:COLORS.primaryBackgroundBox,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
              <Image style={{width:65,height:65,borderRadius:10}} source={require('../assets/truyen-thieu-nhi.jpg')}/>
            </View>
            <Text style={{textAlign:'center'}}>Truyện thiếu nhi</Text>
            </View>
            <View style={{flexDirection:'column',gap:10,alignItems:'center'}}>
            <View style={{width:80,height:80,backgroundColor:COLORS.primaryBackgroundBox,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
              <Image style={{width:65,height:65,borderRadius:10}} source={require('../assets/sach-giao-khoa.jpg')}/>
            </View>
            <Text style={{textAlign:'center'}}>Sách Giáo khoa</Text>
            </View>
            </View>
          </ScrollView>
          </View>
          <SliderBox
            images={images}
            autoPlay
            circleLoop
            dotColor={"#13274F"}
            inactiveDotColor="#90A4AE"
            ImageComponentStyle={{ width: "100%"}}
          />
          <View style={{paddingLeft:10,paddingRight:10,marginTop:20,flexDirection:'column'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
              <Text style={{fontSize:24,fontWeight:'600'}}>Không thể bỏ lỡ</Text>
              <Text style={{color:COLORS.primaryColorLink,fontSize:16}}>Xem tất cả</Text>
            </View>
            <View style={{marginTop:20}}>
          <ScrollView style={{}} horizontal={true}>
            <View style={{flexDirection:'row',gap:30,paddingLeft:20,paddingRight:20}}>
            <View style={{flexDirection:'column',gap:10,alignItems:'center'}}>
            <View style={{width:80,height:80,backgroundColor:COLORS.primaryBackgroundBox,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
              <Image style={{width:65,height:65,borderRadius:10}} source={require('../assets/vh.jpg')}/>
            </View>
            <Text style={{textAlign:'center'}}>Văn học</Text>
            </View>
            <View style={{flexDirection:'column',gap:10,alignItems:'center'}}>
            <View style={{width:80,height:80,backgroundColor:COLORS.primaryBackgroundBox,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
              <Image style={{width:65,height:65,borderRadius:10}} source={require('../assets/kt.jpg')}/>
            </View>
            <Text style={{textAlign:'center'}}>Kinh tế</Text>
            </View>
            <View style={{flexDirection:'column',gap:10,alignItems:'center'}}>
            <View style={{width:80,height:80,backgroundColor:COLORS.primaryBackgroundBox,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
              <Image style={{width:65,height:65,borderRadius:10}} source={require('../assets/tam-li.png')}/>
            </View>
            <Text style={{textAlign:'center'}}>Tâm lý</Text>
            </View>
            <View style={{flexDirection:'column',gap:10,alignItems:'center'}}>
            <View style={{width:80,height:80,backgroundColor:COLORS.primaryBackgroundBox,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
              <Image style={{width:65,height:65,borderRadius:10}} source={require('../assets/ky-nang-song.jpg')}/>
            </View>
            <Text style={{textAlign:'center'}}>Kỹ năng sống</Text>
            </View>
            <View style={{flexDirection:'column',gap:10,alignItems:'center'}}>
            <View style={{width:80,height:80,backgroundColor:COLORS.primaryBackgroundBox,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
              <Image style={{width:65,height:65,borderRadius:10}} source={require('../assets/truyen-thieu-nhi.jpg')}/>
            </View>
            <Text style={{textAlign:'center'}}>Truyện thiếu nhi</Text>
            </View>
            <View style={{flexDirection:'column',gap:10,alignItems:'center'}}>
            <View style={{width:80,height:80,backgroundColor:COLORS.primaryBackgroundBox,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
              <Image style={{width:65,height:65,borderRadius:10}} source={require('../assets/sach-giao-khoa.jpg')}/>
            </View>
            <Text style={{textAlign:'center'}}>Sách Giáo khoa</Text>
            </View>
            </View>
          </ScrollView>
          </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
    </>
  )
}
