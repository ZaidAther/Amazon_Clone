import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../Components/Header';
import SubHeader from '../Components/SubHeader';
import Catagory from '../Components/Catagory';
import Slider from '../Components/Slider';
import Service from '../Components/Service';
import Discount from '../Components/Discount';
import Section1 from '../Components/Section1';
import Section2 from '../Components/Section2';
import Section3 from '../Components/Section3';
import Footer from '../Components/Footer';

const HomeScreen = () => {
  return (
    <ScrollView>
     <Header/>
     <SubHeader/>
     <Catagory/>
     <Slider/>
     <Service/>
     <Discount/>
     <Section1/>
     <Section2/>
     <Section3/>
     <Footer/>
    </ScrollView>
  );
};

export default HomeScreen;
