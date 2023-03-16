import { HeaderContainer, HeaderInner, HeaderInnerBox, HeaderLogoImg, HeaderLogoLink, HeaderNav, HeaderNavDetail, HeaderNavItem, HeaderNavLink, HeaderNavList, HeaderNavSummary, HeaderTag, HedaerNavDetailItem, HedaerNavDetailList, HedaerNavSummaryItem, HedaerNavSummaryLink, HedaerNavSummaryList, SearchButton } from "./Header.styled";
import Logo from "../../assets/images/Logo.png"
import { CalendarIcon } from "../../assets/images/icons/icons";

export const Header = () => {
    return <>
        <HeaderTag>
            <HeaderContainer>
                <HeaderInner>
                    <HeaderLogoLink to="/">
                        <HeaderLogoImg src={Logo} alt="Site Logo"/>
                    </HeaderLogoLink>

                    <HeaderInnerBox>
                        <SearchButton type="button"/>
                        <HeaderNav>
                            <HeaderNavList>
                                <HeaderNavItem>
                                    <HeaderNavLink to="courses">
                                        курсы
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
                                        о нас
                                    </HeaderNavLink>
                                </HeaderNavItem>
                                <HeaderNavItem>
                                    <HeaderNavLink to="contacts">
                                        контакты
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
