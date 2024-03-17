import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, Dimensions, Button, DatePickerAndroid, DateTimePickerAndroid, Touchable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

 function Register() {
  const [isSelectedYes, setIsSelectedYes] = useState(false);
  const [isSelectedNo, setIsSelectedNo] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [selectedDate, setSelectedDate] = useState(''); // State for the date
  const [show, setShow] = useState(false); // State to control visibility of DateTimePicker

  const handlePressYes = () => {
    setIsSelectedYes(true);
    setIsSelectedNo(false);
  };

  const handlePressNo = () => {
    setIsSelectedNo(true);
    setIsSelectedYes(false);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  const showDatePicker = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date(),
        mode: 'calendar'
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected date
        setSelectedDate(`${day}-${month + 1}-${year}`);
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  };

  const showTimepicker = () => {
    setShow(true);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setShow(false);
    setSelectedDate(currentDate.toLocaleString());
  };

  return (
    <SafeAreaView>
       <TouchableOpacity style={styles.closeIcon} onPress={() => {}}>
          <Icon name="times" size={20} color="black" />
        </TouchableOpacity>
        {/* Existing UI components and input fields */}
      <View style={styles.container}>
        <Text style={[styles.label, { fontSize: 30}]}>Đăng ký</Text>
        <Text style={styles.label}>Số điện thoại</Text>
        <TextInput style={styles.input} placeholder="Nhập số điện thoại" />
        <Text style={styles.label}>Họ Tên</Text>
        <TextInput style={styles.input} placeholder="Nhập họ tên" />
        
        <Text style={styles.label}>Nhập mật khẩu</Text>
        <View style={styles.inputContainers}>
  <TextInput
    placeholder="Nhập họ tên"
    secureTextEntry={isPasswordHidden}
  />
  <TouchableOpacity
    onPress={togglePasswordVisibility}
    style={styles.visibilityIcon}
  >
    <Icon name={isPasswordHidden ? "eye" : "eye-slash"} size={20} color="grey" />
  </TouchableOpacity>
</View>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="" />
        <Text style={styles.label}>Ngày sinh</Text>
        <TouchableOpacity style={styles.input} onPress={showDatePicker}>
          <Text>{selectedDate || "Chọn ngày sinh"}</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.label}>Giới Tính</Text>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[styles.choiceButton, isSelectedYes && { backgroundColor: "black", color: "white" }]}
            onPress={handlePressYes}
          >
            <Text style={isSelectedYes && { color: "white" }}>Nam</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.choiceButton, isSelectedNo && { backgroundColor: "black", color: "white" }]}
            onPress={handlePressNo}
          >
            <Text style={isSelectedNo && { color: "white" }}>Nữ</Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Đăng ký" />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode={'time'}
            is24Hour={true}
            onChange={onChange}
          />
        )}
        <View style={{flexDirection:'row'}}>
        <Text style={styles.label}>Bạn đã có tài khoản?</Text>
        <TouchableOpacity
          onPress={() =>{}}><Text style={{color:'red'}}>Đăng nhập</Text>
          </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    padding: 8,
    margin: 5,
    opacity: 0.5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor  
    : "#000",
    borderRadius: 10,
    padding: 8,
    margin: 5,
    opacity: 0.5,
  },
  visibilityIcon: {
    position: "absolute",
    right: 10,
  },
  choiceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  choiceButton: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 8,
    margin: 5,
    backgroundColor: "white",
  },
  buttonContainer: {
    marginTop: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginLeft:150,
  },
  choiceButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 8,
    margin: 5,
    backgroundColor: 'white',
  },
  inputContainers: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    padding: 8,
    margin: 5,
    opacity: 0.5,
  },
  visibilityIcon: {
    position: "absolute",
    right: 10,
  },
  container: {
    padding: 20,
  },
  closeIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
 });
 
 export default Register;
 