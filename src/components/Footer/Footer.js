import { FooterAdressLink, FooterBottomBox, FooterBottomText, FooterBtn, FooterContainer, FooterForm, FooterInfoBox, FooterInput, FooterLink, FooterLinkBox, FooterLinkItem, FooterLinkList, FooterLinkTitle, FooterLogoImg, FooterLogoLink, FooterNetWorkImg, FooterNetWorkItem, FooterNetWorkLink, FooterNetWorkList, FooterPhoneLink, FooterTag, FooterTopBox } from "./Footer.styled";

import Logo from "../../assets/images/Logo.png";
import InstagramLogo from "../../assets/images/instagram.svg";
import FaceBookLogo from "../../assets/images/facebook.svg";
import TwitterLogo from "../../assets/images/twitter.svg";

export const Footer = () => {
    return <>
        <FooterTag>
            <FooterContainer>
                <FooterTopBox>
                    <FooterLogoLink to="/">
                        <FooterLogoImg src={Logo} alt="Site Logo"/>
                    </FooterLogoLink>

                    <FooterInfoBox>
                        <FooterLinkBox>
                            <FooterLinkTitle>
                                Курсы
                            </FooterLinkTitle>
                            <FooterLinkList>
                                <FooterLinkItem>
                                    <FooterLink to="/">
                                        Rorem
                                    </FooterLink>
                                </FooterLinkItem>
                                <FooterLinkItem>
                                    <FooterLink to="/">
                                        Ipsum
                                    </FooterLink>
                                </FooterLinkItem>
                                <FooterLinkItem>
                                    <FooterLink to="/">
                                        Dolor Sit
                                    </FooterLink>
                                </FooterLinkItem>
                                <FooterLinkItem>
                                    <FooterLink to="/">
                                        Amet
                                    </FooterLink>
                                </FooterLinkItem>
                                <FooterLinkItem>
                                    <FooterLink to="/">
                                        Consect
                                    </FooterLink>
                                </FooterLinkItem>
                                <FooterLinkItem>
                                    <FooterLink to="/">
                                        Etur
                                    </FooterLink>
                                </FooterLinkItem>
                            </FooterLinkList>
                        </FooterLinkBox>

                        <FooterLinkBox>
                            <FooterLinkTitle>
                                О НАС
                            </FooterLinkTitle>
                            <FooterLinkList>
                                <FooterLinkItem>
                                    <FooterLink to="/">
                                        Rorem
                                    </FooterLink>
                                </FooterLinkItem>
                                <FooterLinkItem>
                                    <FooterLink to="/">
                                        Ipsum
                                    </FooterLink>
                                </FooterLinkItem>
                                <FooterLinkItem>
                                    <FooterLink to="/">
                                        Dolor Sit
                                    </FooterLink>
                                </FooterLinkItem>
                                <FooterLinkItem>
                                    <FooterLink to="/">
                                        Amet
                                    </FooterLink>
                                </FooterLinkItem>
                                <FooterLinkItem>
                                    <FooterLink to="/">
                                        Consect
                                    </FooterLink>
                                </FooterLinkItem>
                                <FooterLinkItem>
                                    <FooterLink to="/">
                                        Etur
                                    </FooterLink>
                                </FooterLinkItem>
                            </FooterLinkList>
                        </FooterLinkBox>

                        <FooterLinkBox>
                            <FooterLinkTitle>
                                КОНТАКТЫ
                            </FooterLinkTitle>
                            <FooterPhoneLink href="tel:998908141339">
                                +998 (90) 814 13 39
                            </FooterPhoneLink>
                            <FooterAdressLink href="https://www.google.com/maps/place/%D0%A3%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9+%D1%86%D0%B5%D0%BD%D1%82%D1%80/@41.2943455,69.3628449,17z/data=!3m1!4b1!4m6!3m5!1s0x38aef5ac53525b5b:0x99c3f6611d7d7409!8m2!3d41.2943455!4d69.3650336!16s%2Fg%2F11mb0l83cy?hl=ru" target="blank">
                                Наш адрес: Абая 6А, Учебный центр виноградарства.
                            </FooterAdressLink>
                        </FooterLinkBox>

                        <FooterLinkBox>
                            <FooterLinkTitle>
                                ПОДПИШИТЕСЬ НА НОВОСТИ
                            </FooterLinkTitle>
                            <FooterForm onSubmit={evt => {
                                evt.preventDefault()
                            }}>
                                <FooterInput type="email" aria-label="Enter your email" placeholder="ВАШ EMAIL"/>
                                <FooterBtn type="submit">
                                    ОТПРАВИТЬ
                                </FooterBtn>
                            </FooterForm>

                            <FooterLinkTitle>
                                ПОДПИШИТЕСЬ НА НАС
                            </FooterLinkTitle>
                            <FooterNetWorkList>
                                <FooterNetWorkItem>
                                    <FooterNetWorkLink href="#" target="blank">
                                        <FooterNetWorkImg src={InstagramLogo} alt="Instagram Logo"/>
                                    </FooterNetWorkLink>
                                </FooterNetWorkItem>
                                <FooterNetWorkItem>
                                    <FooterNetWorkLink href="#" target="blank">
                                        <FooterNetWorkImg src={FaceBookLogo} alt="Instagram Logo"/>
                                    </FooterNetWorkLink>
                                </FooterNetWorkItem>
                                <FooterNetWorkItem>
                                    <FooterNetWorkLink href="#" target="blank">
                                        <FooterNetWorkImg src={TwitterLogo} alt="Instagram Logo"/>
                                    </FooterNetWorkLink>
                                </FooterNetWorkItem>
                            </FooterNetWorkList>
                        </FooterLinkBox>
                    </FooterInfoBox>
                </FooterTopBox>

                <FooterBottomBox>
                    <FooterBottomText>
                        copyright 2023
                    </FooterBottomText>
                </FooterBottomBox>
            </FooterContainer>
        </FooterTag>
    </>
}
