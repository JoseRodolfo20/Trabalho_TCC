import react from "react";
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFFFFF;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
`;

export const SwipeDot =  styled.View`
    width: 10px;
    height: 10px;
    background-color: #ffffff;
    border-radius: 5px;
    margin: 3px;
`;

export const SwipeDotActive = styled.View`
    width: 10px;
    height: 10px;
    background-color: #000000;
    border-radius: 5px;
    margin: 3px;
`;

export const SwipeItem = styled.View`
    flex: 1;
    background-color: #1c232e;
`;

export const SwipeImage = styled.Image`
    width: 100%;
    height: 240px;
`;

export const FakeSwiper = styled.View`
    height: 240px;
    background-color: #1c232e;
`;

export const PageBody = styled.View`
    background-color: #ffffff;
    border-top-left-radius: 50px;
    margin-top: -50px;
    min-height: 400px;
`;

export const UserInfoArea =  styled.View`
    flex-direction: row;
    margin-top: -20px;
`;

export const UserAvatar =  styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 20px;
    margin-left: 30px;
    margin-right: 20px;
    border-width: 4px;
    border-color: #ffffff;
    background-color: #ccc;
`;

export const UserInfo =  styled.View`
    flex: 1;
    justify-content: flex-end;
`;

export const UserInfoName =  styled.Text`
    color: #000000;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 0px;
    
`;

export const UserLocation = styled.Text`
    color: #000000;
    margin-top: 3px;
    font-size: 12px;
`;

export const UserFavButton =  styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    background-color: #ffffff;
    border: 2px solid #999999;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-left: 20px;
    margin-right: 20px;
`;

export const ServiceArea = styled.View`
    margin-top: 20px;
`;

export const ServiceItem =  styled.View`
    flex-direction: row;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 20px;
`;

export const ServicesTitle =  styled.Text`
    font-size: 23px;
    font-weight: bold;
    color: #1c232e;
    margin-left: 30px;
    margin-bottom: 20px;
`;

export const ServiceInfo =  styled.View`
    flex: 1;
`;

export const ServiceName =  styled.Text`
    margin-top: 25%;
    font-size: 20px;
    font-weight: bold;
    color: #1c232e;
`;

export const ServicePrice =  styled.Text`
    font-size: 18px;
    color: #1c232e;
`;

export const ServiceChooseButton =  styled.TouchableOpacity`
    background-color: #3b8952;
    border-radius: 10px;
    padding: 20px 20px;
    margin-top: 35%;
`;

export const ServiceChooseBtnText =  styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
`;

export const TestimonialArea =  styled.View`
    margin-top: 30px;
    margin-bottom: 50px;
`;

export const TestimonialItem =  styled.View`
    background-color: #3b8952;
    padding: 15px;
    border-radius: 10px;
    height: 110px;
    justify-content: center;
    margin-left: 50px;
    margin-right: 50px;
`;

export const TestimonialInfo =  styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
`;

export const TestimonialName =  styled.Text`
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
`;

export const TestimonialBody =  styled.Text`
    color: #ffffff;
    font-size: 13px;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 15;
    top: 25;
    z-index: 9;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;
