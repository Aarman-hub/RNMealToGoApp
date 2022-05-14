import { StyleSheet, View, Image } from 'react-native'
import React from 'react';
import { Card, Text } from 'react-native-paper';
import styled from 'styled-components/native';
import Input from '../../../compnents/Input';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { SvgXml} from 'react-native-svg';

const RestaurantCard = styled(Card)`
    background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
    background-color:white;
    padding:15px;
`

const Info = styled.View`
    padding: ${(props)=>props.theme.space[3]}
`;

const Title = styled(Text)`
    font-family:${(props)=>props.theme.fonts.body};
    color:red;
`;

const Address = styled(Text)`
    font-family: ${(props)=>props.theme.fonts.body}
`;
const Rating = styled.View`
    flex-direction:row;
    padding-top: ${(props)=>props.theme.space[2]}
    padding-top: ${(props)=>props.theme.space[2]}
`;


const Section = styled.View`
    flex-direction:row;
    align-items:center;
`;
const SectionEnd = styled.View`
    flex:1;
    flex-direction:row;
    justify-content:flex-end;
`;

const Open = styled(SvgXml)`
    flex-direction:row;
`;


const RestaurantInfo = ({restaurant = {}}) => {
    const {
            name="Some Restaurants",
            icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
            photos=["https://picsum.photos/700"],
            address = "100 Some",
            isOpenNow=true,
            rating=4,
            isClosedTemporarily=true,
        } = restaurant;

  const rattingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{uri: photos[0]}}/>
        <Info>
            <Title style={styles.text}>{name}</Title>
            <Section>
                <Rating>
                {rattingArray.map(()=>(
                    <SvgXml xml={star} width={20} height={20} />
                ))}
                </Rating>
                <SectionEnd>
                    {isClosedTemporarily && (
                        <Text variant="label" style={{color:"red"}}>
                            CLOSE TEMPORARILY
                        </Text>
                    )}
                    <View style={{paddingLeft:16}} />
                    {isOpenNow && <SvgXml xml={open} height={20} width={20}  />}
                    <View style={{paddingLeft:16}} />
                    <Image style={{height: 15, width:15}} source={{uri:icon}} />
                </SectionEnd>
            </Section>
            <Address>{address}</Address>
        </Info>
    </RestaurantCard>
  )
}

export default RestaurantInfo

const styles = StyleSheet.create({})