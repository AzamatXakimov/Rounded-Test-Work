import { HeaderContainer, HeaderInner, HeaderInnerBox, HeaderLogoImg, HeaderLogoLink, HeaderNav, HeaderNavDetail, HeaderNavItem, HeaderNavLink, HeaderNavList, HeaderNavSummary, HeaderTag, HeadereLangOption, HeadereLangSelect, HedaerNavDetailItem, HedaerNavDetailList, HedaerNavSummaryItem, HedaerNavSummaryLink, HedaerNavSummaryList, SearchButton } from "./Header.styled";
import Logo from "../../assets/images/Logo.png"
import { CalendarIcon } from "../../assets/images/icons/icons";
import { useDispatch, useSelector } from "react-redux";
import { addLanguage } from "../../redux/language/languageActions";
import { useRef } from "react";
import { language } from "../../Lang/Lang";

export const Header = () => {
    const dispatch = useDispatch()
    const {lang} = useSelector((state) => state);
    const LanguageSelectRef = useRef()
    return <>
        <HeaderTag>
            <HeaderContainer>
                <HeaderInner>
                    <HeaderLogoLink to="/">
                        <HeaderLogoImg src={Logo} alt="Site Logo"/>
                    </HeaderLogoLink>

                    <HeaderInnerBox>
                        <SearchButton type="button"/>
                        <HeadereLangSelect defaultValue={lang.lang} ref={LanguageSelectRef} onChange={() => {
                            dispatch(addLanguage(LanguageSelectRef.current.value))
                            localStorage.setItem("lang", LanguageSelectRef.current.value)
                        }}>
                            <HeadereLangOption value="ru">Ru</HeadereLangOption>
                            <HeadereLangOption value="uz">Uz</HeadereLangOption>
                        </HeadereLangSelect>
                        <HeaderNav>
                            <HeaderNavList>
                                <HeaderNavItem>
                                    <HeaderNavLink to="courses">
                                        {language[lang.lang]?.header.courses}
                                    </HeaderNavLink>
                                    
                                    <HedaerNavDetailList>
                                        <HedaerNavDetailItem>
                                            <HeaderNavDetail>
                                                <HeaderNavSummary>Rorem</HeaderNavSummary>
                                                <HedaerNavSummaryList>
                                                    <HedaerNavSummaryItem>
                                                        <HedaerNavSummaryLink to="/">
                                                            Rorem
                                                        </HedaerNavSummaryLink>
                                                    </HedaerNavSummaryItem>
                                                    <HedaerNavSummaryItem>
                                                        <HedaerNavSummaryLink to="/">
                                                            Rorem
                                                        </HedaerNavSummaryLink>
                                                    </HedaerNavSummaryItem>
                                                    <HedaerNavSummaryItem>
                                                        <HedaerNavSummaryLink to="/">
                                                            Rorem
                                                        </HedaerNavSummaryLink>
                                                    </HedaerNavSummaryItem>
                                                </HedaerNavSummaryList>
                                            </HeaderNavDetail>
                                        </HedaerNavDetailItem>

                                        <HedaerNavDetailItem>
                                            <HeaderNavDetail>
                                                <HeaderNavSummary>Rorem</HeaderNavSummary>
                                                <HedaerNavSummaryList>
                                                    <HedaerNavSummaryItem>
                                                        <HedaerNavSummaryLink to="/">
                                                            Rorem
                                                        </HedaerNavSummaryLink>
                                                    </HedaerNavSummaryItem>
                                                    <HedaerNavSummaryItem>
                                                        <HedaerNavSummaryLink to="/">
                                                            Rorem
                                                        </HedaerNavSummaryLink>
                                                    </HedaerNavSummaryItem>
                                                    <HedaerNavSummaryItem>
                                                        <HedaerNavSummaryLink to="/">
                                                            Rorem
                                                        </HedaerNavSummaryLink>
                                                    </HedaerNavSummaryItem>
                                                </HedaerNavSummaryList>
                                            </HeaderNavDetail>
                                        </HedaerNavDetailItem>

                                        <HedaerNavDetailItem>
                                            <HeaderNavDetail>
                                                <HeaderNavSummary>Rorem</HeaderNavSummary>
                                                <HedaerNavSummaryList>
                                                    <HedaerNavSummaryItem>
                                                        <HedaerNavSummaryLink to="/">
                                                            Rorem
                                                        </HedaerNavSummaryLink>
                                                    </HedaerNavSummaryItem>
                                                    <HedaerNavSummaryItem>
                                                        <HedaerNavSummaryLink to="/">
                                                            Rorem
                                                        </HedaerNavSummaryLink>
                                                    </HedaerNavSummaryItem>
                                                    <HedaerNavSummaryItem>
                                                        <HedaerNavSummaryLink to="/">
                                                            Rorem
                                                        </HedaerNavSummaryLink>
                                                    </HedaerNavSummaryItem>
                                                </HedaerNavSummaryList>
                                            </HeaderNavDetail>
                                        </HedaerNavDetailItem>

                                        <HedaerNavDetailItem>
                                            <HeaderNavDetail>
                                                <HeaderNavSummary>Rorem</HeaderNavSummary>
                                                <HedaerNavSummaryList>
                                                    <HedaerNavSummaryItem>
                                                        <HedaerNavSummaryLink to="/">
                                                            Rorem
                                                        </HedaerNavSummaryLink>
                                                    </HedaerNavSummaryItem>
                                                    <HedaerNavSummaryItem>
                                                        <HedaerNavSummaryLink to="/">
                                                            Rorem
                                                        </HedaerNavSummaryLink>
                                                    </HedaerNavSummaryItem>
                                                    <HedaerNavSummaryItem>
                                                        <HedaerNavSummaryLink to="/">
                                                            Rorem
                                                        </HedaerNavSummaryLink>
                                                    </HedaerNavSummaryItem>
                                                </HedaerNavSummaryList>
                                            </HeaderNavDetail>
                                        </HedaerNavDetailItem>

                                        <HedaerNavDetailItem>
                                            <HeaderNavDetail>
                                                <HeaderNavSummary>Rorem</HeaderNavSummary>
                                                <HedaerNavSummaryList>
                                                    <HedaerNavSummaryItem>
                                                        <HedaerNavSummaryLink to="/">
                                                            Rorem
                                                        </HedaerNavSummaryLink>
                                                    </HedaerNavSummaryItem>
                                                    <HedaerNavSummaryItem>
                                                        <HedaerNavSummaryLink to="/">
                                                            Rorem
                                                        </HedaerNavSummaryLink>
                                                    </HedaerNavSummaryItem>
                                                    <HedaerNavSummaryItem>
                                                        <HedaerNavSummaryLink to="/">
                                                            Rorem
                                                        </HedaerNavSummaryLink>
                                                    </HedaerNavSummaryItem>
                                                </HedaerNavSummaryList>
                                            </HeaderNavDetail>
                                        </HedaerNavDetailItem>

                                        <HedaerNavDetailItem>
                                            <HeaderNavDetail>
                                                <HeaderNavSummary>Rorem</HeaderNavSummary>
                                                <HedaerNavSummaryList>
                                                    <HedaerNavSummaryItem>
                                                        <HedaerNavSummaryLink to="/">
                                                            Rorem
                                                        </HedaerNavSummaryLink>
                                                    </HedaerNavSummaryItem>
                                                    <HedaerNavSummaryItem>
                                                        <HedaerNavSummaryLink to="/">
                                                            Rorem
                                                        </HedaerNavSummaryLink>
                                                    </HedaerNavSummaryItem>
                                                    <HedaerNavSummaryItem>
                                                        <HedaerNavSummaryLink to="/">
                                                            Rorem
                                                        </HedaerNavSummaryLink>
                                                    </HedaerNavSummaryItem>
                                                </HedaerNavSummaryList>
                                            </HeaderNavDetail>
                                        </HedaerNavDetailItem>
                                    </HedaerNavDetailList>

                                </HeaderNavItem>
                                <HeaderNavItem>
                                    <HeaderNavLink to="about-us">
                                        {language[lang.lang]?.header.aboutUs}
                                    </HeaderNavLink>
                                </HeaderNavItem>
                                <HeaderNavItem>
                                    <HeaderNavLink to="contacts">
                                        {language[lang.lang]?.header.contacts}
                                    </HeaderNavLink>
                                </HeaderNavItem>
                                <HeaderNavItem>
                                    <HeaderNavLink to="calendar">
                                        <CalendarIcon/>
                                    </HeaderNavLink>
                                </HeaderNavItem>
                            </HeaderNavList>
                        </HeaderNav>
                    </HeaderInnerBox>
                </HeaderInner>
            </HeaderContainer>
        </HeaderTag>
    </>
}
