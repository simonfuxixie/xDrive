import React from 'react';
import { 
	StatusBar, 
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


import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';

import NavigationService from '@Service/Navigation';

import Style from '@Theme/Style';
import Styles from '@Screen/Public/Payment/Style';

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.renderAccordionHeader = this.renderAccordionHeader.bind(this);
        this.renderAccordionContent = this.renderAccordionContent.bind(this);        
        this.renderAccordionContentCreditcard = this.renderAccordionContentCreditcard.bind(this);        
        this.renderAccordionContentCash = this.renderAccordionContentCash.bind(this);
    }
    renderAccordionHeader(item, expanded) {
        return (
            <View style={Styles.accordionTab}>
                <Text style={Styles.accordionTabText}>
                    {" "}{item.title}
                </Text>
                {expanded
                    ? <Icon style={Styles.accordionTabIconActive} name="ios-arrow-down" type="Ionicons" />
                    : <Icon style={Styles.accordionTabIcon} name="ios-arrow-forward" type="Ionicons" />}
            </View>
        );
    }
    renderAccordionContent(item) {
        var fn = 'renderAccordionContent' + (item.type.charAt(0).toUpperCase() + item.type.substr(1));
        return <View style={Styles.accordionContent}>
            {this[fn]()}
        </View>
    }
    
    
    renderAccordionContentCreditcard() {
        return <View style={Styles.card}>

            <InputGroup style={Styles.cardGroup}>
                <Text style={Styles.cardLabel}>Card Number</Text>
                <TextInput style={Styles.cardInput} placeholder="9876 5432 1098 7654" placeholderTextColor="#FFF" />
            </InputGroup>
            <InputGroup style={Styles.cardGroup}>
                <Text style={Styles.cardLabel}>Cardholder's Number</Text>
                <TextInput style={Styles.cardInput} placeholder="Jeffrey MO" placeholderTextColor="#FFF" />
            </InputGroup>
            <View style={Styles.cardCol}>
                <InputGroup style={Styles.cardGroup}>
                    <Text style={Styles.cardLabel}>Expiry</Text>
                    <TextInput style={Styles.cardInput} placeholder="06/22" placeholderTextColor="#FFF" />
                </InputGroup>
                <InputGroup style={Styles.cardGroup}>
                    <Text style={Styles.cardLabel}>CVV</Text>
                    <TextInput style={Styles.cardInput} placeholder="123" placeholderTextColor="#FFF" />
                </InputGroup>
                <View style={Styles.cardCvv}>
                    <Icon name="credit-card" type="FontAwesome" style={Styles.cardCvvIcon} />
                </View>
            </View>
            <View style={Styles.cardSave}>
                <CheckBox  style={Styles.cardCheckbox} />
                <Text style={Styles.cardSaveText}>Save this card</Text>
            </View>
        </View>
    }
    
    
    renderAccordionContentCash() {
        return <View style={Styles.card}>
            <InputGroup style={Styles.cardGroup}>
                <Text style={Styles.cardLabel}>Pay cash in person.</Text>
            </InputGroup>
        </View>
    }
	
    render() {
        return <Container style={Style.darkBg}>
            <Header style={Style.navigation}>
                <StatusBar backgroundColor="#222" barStyle="light-content" />
                <View style={Style.nav}>
                    <View style={Style.navLeft}>
                        <Button transparent onPress={() => {
                            NavigationService.navigate('PublicBooking')
                        }}>
                            <Icon type="FontAwesome" name="angle-left" style={Style.iconYellow} />
                        </Button>
                    </View>
                    <View style={Style.navMiddle}>
                        <Text style={Style.navMiddleText}>{'STEP 2 - Payment'.toUpperCase()}</Text>
                    </View>
                    <View style={Style.navRight}>
                    </View>
                </View>
            </Header>
            <Content contentContainerStyle={Style.layout}>
                <View style={Styles.payment}>
                    <Accordion
                        style={Styles.accordion}
                        dataArray={[                            
                            {
                                type: 'creditcard',
                                title: 'Credit Card'
                            },
                            {
                                type: 'cash',
                                title: 'Cash'
                            }                            
                        ]}
                        expanded={0}
                        renderHeader={this.renderAccordionHeader}
                        renderContent={this.renderAccordionContent}
                    />
                </View>
                <TouchableOpacity style={Styles.formBtn} onPress={() => {
                    NavigationService.navigate('PublicPaymentConfirm')
                }}>
                    <Text style={Styles.formBtnText}>{'Pay Now'.toUpperCase()}</Text>
                </TouchableOpacity>
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