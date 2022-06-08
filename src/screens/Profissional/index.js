import react, { useState, useEffect } from "react";
import { useNavigation, useRoute } from '@react-navigation/native'
import Swiper from 'react-native-swiper'

import Stars from '../../components/Stars'
import ProfissionalModal from '../../components/ProfissionalModal'

import FavoriteFullIcon from '../../assets/favorite_full.svg'
import FavoriteIcon from '../../assets/favorites.svg'
import BackIcon from '../../assets/back.svg'
import NavPrevIcon from '../../assets/nav_prev.svg'
import NavNextIcon from '../../assets/nav_next.svg'

import { 
    Container,
    Scroller,
    FakeSwiper,
    PageBody,
    UserInfoArea,
    ServiceArea,
    SwipeDot,
    SwipeDotActive,
    SwipeItem,
    SwipeImage,
    UserAvatar,
    UserInfo,
    UserInfoName,
    UserFavButton,
    BackButton,
    LoadingIcon,
    UserLocation,

    ServiceItem,
    ServicesTitle,
    ServiceInfo,
    ServiceName,
    ServicePrice,
    ServiceChooseButton,
    ServiceChooseBtnText,

    TestimonialArea,
    TestimonialItem,
    TestimonialInfo,
    TestimonialName,
    TestimonialBody

} from './styles'

import Api from "../../../Api";

export default () => {
    const navigation = useNavigation()
    const route = useRoute()

    const [userInfo, setUserInfo] = useState({
        id: route.params.id,
        nome: route.params.nome,
        profissao: route.params.profissao,
        fotoUsuario: route.params.fotoUsuario,
        endereco: route.params.endereco,
        stars: route.params.stars
    })

    const [loading, setLoading] = useState(false)
    const [favorited, setFavorited] = useState(false)
    const [selectedService, setSelectedService] = useState(null)
    const [showModal, setShowModal] = useState(false)


    const handleBackButton = () => {
        navigation.goBack()
    }

    const handleFavClick = () => {
        setFavorited ( !favorited )
        Api.setFavorite(userInfo.id)
    }

    const handleServiceChoose = () => {
        // setSelectedService(key)
        setShowModal(true)
    }

    return(
        <Container>
            <Scroller>
                {userInfo.photo && userInfo.photo.lenght > 0 ? 
                    <Swiper
                        style={{height: 240}}
                        dot={<SwipeDot />}
                        activeDot={<SwipeDotActive />}
                        paginationStyle={{top: 15, right: 15, bottom: null, left: null}}
                        autoplay={true}
                    >
                        {userInfo.photo.map((item, key) => (
                            <SwipeItem key={key}>
                                <SwipeImage source={{uri:item.url}} resizeMode="cover" />
                            </SwipeItem>
                        ))}
                    </Swiper>
                    :
                    <FakeSwiper></FakeSwiper>
                }
                <PageBody>
                    <UserInfoArea>
                        <UserAvatar source={{uri: userInfo.fotoUsuario}} />
                        <UserInfo>
                            <UserInfoName>{userInfo.nome}</UserInfoName>
                            <UserLocation>{userInfo.endereco}</UserLocation>
                            <Stars stars={userInfo.stars} showNumber={true} />
                        </UserInfo>
                        <UserFavButton onPress={handleFavClick}>
                            {favorited ? 
                                <FavoriteIcon width="24" height="24" fill="#FF0000" />
                            :
                                <FavoriteFullIcon width="24" height="24" fill="#FF0000" />
                            }
                            
                        </UserFavButton>
                    </UserInfoArea>

                    {loading &&
                        <LoadingIcon size="large" color="#000000" />
                    }

                    {userInfo.profissao && 
                    <ServiceArea>
                        <ServicesTitle>Lista de serviços</ServicesTitle>
                    
                        
                            <ServiceItem>
                                <ServiceInfo>
                                    <ServiceName>{userInfo.profissao}</ServiceName>
                                    <ServicePrice>R$</ServicePrice>
                                    <ServiceChooseButton onPress={handleServiceChoose}>
                                        <ServiceChooseBtnText>Agendar</ServiceChooseBtnText>
                                    </ServiceChooseButton>
                                </ServiceInfo>
                            </ServiceItem>
                         

                    </ServiceArea>
                     }

                    {userInfo.testimonials && userInfo.testimonials.lenght> 0 &&
                    <TestimonialArea>
                        <Swiper
                            style={{height: 110}}
                            showsPagination={false}
                            showsButtons={true}
                            prevButton={<NavPrevIcon width="35" height="35" fill="#000000" />}
                            nextButton={<NavNextIcon width="35" height="35" fill="#000000" />}
                        >
                            {userInfo.testimonials.map((item, key) => (
                                <TestimonialItem key={key}>
                                    <TestimonialInfo>
                                        <TestimonialName>{item.name}</TestimonialName>
                                        <Stars stars={item.rate} showNumber={false}/>
                                    </TestimonialInfo>
                                    <TestimonialBody>{item.body}</TestimonialBody>
                                </TestimonialItem>
                            ))}
                        </Swiper>
                    </TestimonialArea>
                    }
                </PageBody>
            </Scroller>
            <BackButton onPress={handleBackButton}>
                <BackIcon width="25" height="25" fill="#ffffff" />
            </BackButton>

            <ProfissionalModal 
                show={showModal}
                setShow={setShowModal}
                user={userInfo}
                service={selectedService}
            />

        </Container>
    )
}