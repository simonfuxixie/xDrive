import React from 'react';
import { StatusBar, 
	TouchableOpacity, 
	TextInput, 
	StyleSheet, 
	Image, 
	ImageBackground, 
	Dimensions, 
	ScrollView, 
	Platform, 
	SafeAreaView, 
	FlatList, 
	ToolbarAndroid 
} from 'react-native';
import { 
	Container, 
	Header, 
	Content, 
	Button, 
	Icon, 
	Text, 
	Separator, 
	DatePicker, 
	ListItem, 
	View, 
	Card 
} from 'native-base';

import NavigationService from '@Service/Navigation';


import Style from '@Theme/Style';
import Styles from '@Screen/Public/AboutUs/Style';

export default class extends React.Component {

    render() {

        return <Container style={Style.darkBg}>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#222" barStyle="light-content" />

                <View style={Style.nav}>
                    <View style={Style.navLeft}>
                        <Button transparent onPress={() => {
                            NavigationService.navigate('PublicHome')
                        }}>
                            <Icon type="FontAwesome" name="angle-left" style={Style.iconYellow} />
                        </Button>
                    </View>
                    <View style={Style.navMiddle}>
                    </View>
                    <View style={Style.navRight}>
                    </View>
                </View>
            </Header>

            <Content contentContainerStyle={Style.layout}>

                <View style={Styles.detail}>
                    <Text style={Styles.detailTitle}>About Us</Text>
                    <Text style={Styles.detailDesc}>
                        MO N MO Driving School can assist a leaner driver on improving your skills and confidence. We are aiming for safe and confident drivers on the road. Ultimately, you will be able to pass your driving test with confidence.{"\n\n"}
                        We offer both Automatic and Manual driving lessons in Perth.{"\n\n"}
						MO N MO Driving school offers a wide variety of driver training programs. We garantee the qulity of our lesson. Our lesson programs and packages are designed to fit the needs of each individual student.{"\n\n"}
                        We give driving lessons 7 days a week. There is no extra charge in weekend. {"\n\n"}
						sms on 0422 354 499
                    </Text>
                </View>

            </Content>

            <View style={Style.bot}>
                <TouchableOpacity style={Style.botBtn} onPress={() => { NavigationService.navigate('PublicHome') }}>
                    <Icon type="FontAwesome" name="home" style={Style.botIcon} />
                    <Text style={Style.botText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.botBtn} onPress={() => { NavigationService.navigate('PublicPlan') }}>
                    <Icon type="MaterialCommunityIcons" name="cards" style={Style.botIcon} />
                    <Text style={Style.botText}>Plan</Text>
                </TouchableOpacity>
                <View style={Style.botPop}>
                    <TouchableOpacity style={Style.botPopBtn} onPress={() => { NavigationService.navigate('PublicBooking') }}>
                        <Text style={Style.botPopTextSm}>Book</Text>
                        <Text style={Style.botPopText}>Now</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={Style.botBtn} onPress={() => { NavigationService.navigate('PublicLessons') }}>
                    <Icon type="MaterialCommunityIcons" name="car" style={Style.botIcon} />
                    <Text style={Style.botText}>Lessons</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.botBtn} onPress={() => { NavigationService.navigate('PublicAccount') }}>
                    <Icon type="FontAwesome" name="user" style={Style.botIcon} />
                    <Text style={Style.botText}>Account</Text>
                </TouchableOpacity>
            </View>

        </Container>
    }
}