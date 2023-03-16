import { useState } from "react"
import { CalendarHeroContainer, CalendarHeroDateBox, CalendarHeroDateNextBtn, CalendarHeroDatePrevBtn, CalendarHeroDateText, CalendarHeroFiltreButton, CalendarHeroItemBox, CalendarHeroItemBoxInner, CalendarHeroItemDateBox, CalendarHeroItemDateDay, CalendarHeroItemDateText, CalendarHeroItemDesc, CalendarHeroItemText, CalendarHeroItemTime, CalendarHeroSection, CalendarHeroTitle, CalendarHeroTopBox, CalendarHerpItem, CalendarHerpList, CalenderHeroFilterCheckBox, CalenderHeroFilterCheckBoxBox, CalenderHeroFilterCheckBoxText, CalenderHeroFilterForm, CalenderHeroFilterFromBtn, CalenderHeroFilterInput, CalenderHeroFilterInputLabel, CalenderHeroFilterLabel, CalenderHeroFilterModal, CalenderHeroFilterModalCloseBtn, CalenderHeroFilterText } from "./CalendarHero.styled"

export const CalendarHero = () => {

    const [filterModal, setFilterModal] = useState(false)

    return <>
        <CalendarHeroSection>
            <CalendarHeroContainer>
                <CalendarHeroTitle>
                    Календарь
                </CalendarHeroTitle>
                <CalendarHeroTopBox>
                    <CalendarHeroFiltreButton onClick={() => {
                        setFilterModal(true)
                    }}>
                        фильтр
                    </CalendarHeroFiltreButton>

                    <CalendarHeroDateBox>
                        <CalendarHeroDatePrevBtn type="button"/>
                        <CalendarHeroDateText>
                            февраль, 2023
                        </CalendarHeroDateText>
                        <CalendarHeroDateNextBtn type="button"/>
                    </CalendarHeroDateBox>
                </CalendarHeroTopBox>

                <CalendarHerpList>
                    <CalendarHerpItem>
                        <CalendarHeroItemDateBox>
                            <CalendarHeroItemDateText>
                                06
                            </CalendarHeroItemDateText>
                            <CalendarHeroItemDateDay>
                                понедельник
                            </CalendarHeroItemDateDay>
                        </CalendarHeroItemDateBox>

                        <CalendarHeroItemBox>
                            <CalendarHeroItemBoxInner>
                                <CalendarHeroItemTime>
                                    12:00
                                </CalendarHeroItemTime>
                                <CalendarHeroItemDesc>
                                    Corem ipsum dolor 
                                </CalendarHeroItemDesc>
                                <CalendarHeroItemText>
                                    Porem ipsum dolor 
                                </CalendarHeroItemText>
                            </CalendarHeroItemBoxInner>
                        </CalendarHeroItemBox>

                        <CalendarHeroItemBox>
                            <CalendarHeroItemBoxInner>
                                <CalendarHeroItemTime>
                                    12:00
                                </CalendarHeroItemTime>
                                <CalendarHeroItemDesc>
                                    Corem ipsum dolor 
                                </CalendarHeroItemDesc>
                                <CalendarHeroItemText>
                                    Porem ipsum dolor 
                                </CalendarHeroItemText>
                            </CalendarHeroItemBoxInner>
                        </CalendarHeroItemBox>
                    </CalendarHerpItem>
                    <CalendarHerpItem className="red">
                        <CalendarHeroItemDateBox>
                            <CalendarHeroItemDateText>
                                08
                            </CalendarHeroItemDateText>
                            <CalendarHeroItemDateDay>
                                среда
                            </CalendarHeroItemDateDay>
                        </CalendarHeroItemDateBox>

                        <CalendarHeroItemBox>
                            <CalendarHeroItemBoxInner>
                                <CalendarHeroItemTime>
                                    12:00
                                </CalendarHeroItemTime>
                                <CalendarHeroItemDesc>
                                    Corem ipsum dolor 
                                </CalendarHeroItemDesc>
                                <CalendarHeroItemText>
                                    Porem ipsum dolor 
                                </CalendarHeroItemText>
                            </CalendarHeroItemBoxInner>
                        </CalendarHeroItemBox>

                        <CalendarHeroItemBox>
                            <CalendarHeroItemBoxInner>
                                <CalendarHeroItemTime>
                                    12:00
                                </CalendarHeroItemTime>
                                <CalendarHeroItemDesc>
                                    Corem ipsum dolor 
                                </CalendarHeroItemDesc>
                                <CalendarHeroItemText>
                                    Porem ipsum dolor 
                                </CalendarHeroItemText>
                            </CalendarHeroItemBoxInner>
                        </CalendarHeroItemBox>
                    </CalendarHerpItem>
                    <CalendarHerpItem>
                        <CalendarHeroItemDateBox>
                            <CalendarHeroItemDateText>
                                06
                            </CalendarHeroItemDateText>
                            <CalendarHeroItemDateDay>
                                понедельник
                            </CalendarHeroItemDateDay>
                        </CalendarHeroItemDateBox>

                        <CalendarHeroItemBox>
                            <CalendarHeroItemBoxInner>
                                <CalendarHeroItemTime>
                                    12:00
                                </CalendarHeroItemTime>
                                <CalendarHeroItemDesc>
                                    Corem ipsum dolor 
                                </CalendarHeroItemDesc>
                                <CalendarHeroItemText>
                                    Porem ipsum dolor 
                                </CalendarHeroItemText>
                            </CalendarHeroItemBoxInner>
                        </CalendarHeroItemBox>

                        <CalendarHeroItemBox>
                            <CalendarHeroItemBoxInner>
                                <CalendarHeroItemTime>
                                    12:00
                                </CalendarHeroItemTime>
                                <CalendarHeroItemDesc>
                                    Corem ipsum dolor 
                                </CalendarHeroItemDesc>
                                <CalendarHeroItemText>
                                    Porem ipsum dolor 
                                </CalendarHeroItemText>
                            </CalendarHeroItemBoxInner>
                        </CalendarHeroItemBox>
                    </CalendarHerpItem>
                    <CalendarHerpItem className="red">
                        <CalendarHeroItemDateBox>
                            <CalendarHeroItemDateText>
                                08
                            </CalendarHeroItemDateText>
                            <CalendarHeroItemDateDay>
                                среда
                            </CalendarHeroItemDateDay>
                        </CalendarHeroItemDateBox>

                        <CalendarHeroItemBox>
                            <CalendarHeroItemBoxInner>
                                <CalendarHeroItemTime>
                                    12:00
                                </CalendarHeroItemTime>
                                <CalendarHeroItemDesc>
                                    Corem ipsum dolor 
                                </CalendarHeroItemDesc>
                                <CalendarHeroItemText>
                                    Porem ipsum dolor 
                                </CalendarHeroItemText>
                            </CalendarHeroItemBoxInner>
                        </CalendarHeroItemBox>

                        <CalendarHeroItemBox>
                            <CalendarHeroItemBoxInner>
                                <CalendarHeroItemTime>
                                    12:00
                                </CalendarHeroItemTime>
                                <CalendarHeroItemDesc>
                                    Corem ipsum dolor 
                                </CalendarHeroItemDesc>
                                <CalendarHeroItemText>
                                    Porem ipsum dolor 
                                </CalendarHeroItemText>
                            </CalendarHeroItemBoxInner>
                        </CalendarHeroItemBox>
                    </CalendarHerpItem>
                    <CalendarHerpItem>
                        <CalendarHeroItemDateBox>
                            <CalendarHeroItemDateText>
                                06
                            </CalendarHeroItemDateText>
                            <CalendarHeroItemDateDay>
                                понедельник
                            </CalendarHeroItemDateDay>
                        </CalendarHeroItemDateBox>

                        <CalendarHeroItemBox>
                            <CalendarHeroItemBoxInner>
                                <CalendarHeroItemTime>
                                    12:00
                                </CalendarHeroItemTime>
                                <CalendarHeroItemDesc>
                                    Corem ipsum dolor 
                                </CalendarHeroItemDesc>
                                <CalendarHeroItemText>
                                    Porem ipsum dolor 
                                </CalendarHeroItemText>
                            </CalendarHeroItemBoxInner>
                        </CalendarHeroItemBox>

                        <CalendarHeroItemBox>
                            <CalendarHeroItemBoxInner>
                                <CalendarHeroItemTime>
                                    12:00
                                </CalendarHeroItemTime>
                                <CalendarHeroItemDesc>
                                    Corem ipsum dolor 
                                </CalendarHeroItemDesc>
                                <CalendarHeroItemText>
                                    Porem ipsum dolor 
                                </CalendarHeroItemText>
                            </CalendarHeroItemBoxInner>
                        </CalendarHeroItemBox>
                    </CalendarHerpItem>
                    <CalendarHerpItem className="red">
                        <CalendarHeroItemDateBox>
                            <CalendarHeroItemDateText>
                                08
                            </CalendarHeroItemDateText>
                            <CalendarHeroItemDateDay>
                                среда
                            </CalendarHeroItemDateDay>
                        </CalendarHeroItemDateBox>

                        <CalendarHeroItemBox>
                            <CalendarHeroItemBoxInner>
                                <CalendarHeroItemTime>
                                    12:00
                                </CalendarHeroItemTime>
                                <CalendarHeroItemDesc>
                                    Corem ipsum dolor 
                                </CalendarHeroItemDesc>
                                <CalendarHeroItemText>
                                    Porem ipsum dolor 
                                </CalendarHeroItemText>
                            </CalendarHeroItemBoxInner>
                        </CalendarHeroItemBox>

                        <CalendarHeroItemBox>
                            <CalendarHeroItemBoxInner>
                                <CalendarHeroItemTime>
                                    12:00
                                </CalendarHeroItemTime>
                                <CalendarHeroItemDesc>
                                    Corem ipsum dolor 
                                </CalendarHeroItemDesc>
                                <CalendarHeroItemText>
                                    Porem ipsum dolor 
                                </CalendarHeroItemText>
                            </CalendarHeroItemBoxInner>
                        </CalendarHeroItemBox>
                    </CalendarHerpItem>
                </CalendarHerpList>
            </CalendarHeroContainer>

            <CalenderHeroFilterModal className={filterModal ? "show" : ""}>
                <CalenderHeroFilterModalCloseBtn type="button" onClick={() => {
                    setFilterModal(false)
                }}></CalenderHeroFilterModalCloseBtn>
                
                <CalenderHeroFilterForm onSubmit={evt => {
                    evt.preventDefault()
                }}>
                    <CalendarHeroFiltreButton type="button">
                        фильтр
                    </CalendarHeroFiltreButton>

                    <CalenderHeroFilterLabel>
                        <CalenderHeroFilterCheckBox className="visually-hidden" type="checkbox" />
                        <CalenderHeroFilterCheckBoxBox></CalenderHeroFilterCheckBoxBox>
                        <CalenderHeroFilterCheckBoxText>
                            Worem ipsum 
                        </CalenderHeroFilterCheckBoxText>
                    </CalenderHeroFilterLabel>
                    <CalenderHeroFilterLabel>
                        <CalenderHeroFilterCheckBox className="visually-hidden" type="checkbox" />
                        <CalenderHeroFilterCheckBoxBox></CalenderHeroFilterCheckBoxBox>
                        <CalenderHeroFilterCheckBoxText>
                            Worem ipsum 
                        </CalenderHeroFilterCheckBoxText>
                    </CalenderHeroFilterLabel>
                    <CalenderHeroFilterLabel>
                        <CalenderHeroFilterCheckBox className="visually-hidden" type="checkbox" />
                        <CalenderHeroFilterCheckBoxBox></CalenderHeroFilterCheckBoxBox>
                        <CalenderHeroFilterCheckBoxText>
                            Worem ipsum 
                        </CalenderHeroFilterCheckBoxText>
                    </CalenderHeroFilterLabel>
                    <CalenderHeroFilterLabel>
                        <CalenderHeroFilterCheckBox className="visually-hidden" type="checkbox" />
                        <CalenderHeroFilterCheckBoxBox></CalenderHeroFilterCheckBoxBox>
                        <CalenderHeroFilterCheckBoxText>
                            Worem ipsum 
                        </CalenderHeroFilterCheckBoxText>
                    </CalenderHeroFilterLabel>
                    <CalenderHeroFilterLabel>
                        <CalenderHeroFilterCheckBox className="visually-hidden" type="checkbox" />
                        <CalenderHeroFilterCheckBoxBox></CalenderHeroFilterCheckBoxBox>
                        <CalenderHeroFilterCheckBoxText>
                            Worem ipsum 
                        </CalenderHeroFilterCheckBoxText>
                    </CalenderHeroFilterLabel>
                    <CalenderHeroFilterLabel>
                        <CalenderHeroFilterCheckBox className="visually-hidden" type="checkbox" />
                        <CalenderHeroFilterCheckBoxBox></CalenderHeroFilterCheckBoxBox>
                        <CalenderHeroFilterCheckBoxText>
                            Worem ipsum 
                        </CalenderHeroFilterCheckBoxText>
                    </CalenderHeroFilterLabel>

                    <CalenderHeroFilterInputLabel>
                        <CalenderHeroFilterText>
                            время
                        </CalenderHeroFilterText>
                        <CalenderHeroFilterInput type="time"/>
                    </CalenderHeroFilterInputLabel>

                    <CalenderHeroFilterText>
                        Место
                    </CalenderHeroFilterText>
                    <CalenderHeroFilterLabel>
                        <CalenderHeroFilterCheckBox className="visually-hidden" type="checkbox" />
                        <CalenderHeroFilterCheckBoxBox></CalenderHeroFilterCheckBoxBox>
                        <CalenderHeroFilterCheckBoxText>
                            Worem ipsum 
                        </CalenderHeroFilterCheckBoxText>
                    </CalenderHeroFilterLabel>
                    <CalenderHeroFilterLabel>
                        <CalenderHeroFilterCheckBox className="visually-hidden" type="checkbox" />
                        <CalenderHeroFilterCheckBoxBox></CalenderHeroFilterCheckBoxBox>
                        <CalenderHeroFilterCheckBoxText>
                            Worem ipsum 
                        </CalenderHeroFilterCheckBoxText>
                    </CalenderHeroFilterLabel>
                    <CalenderHeroFilterLabel>
                        <CalenderHeroFilterCheckBox className="visually-hidden" type="checkbox" />
                        <CalenderHeroFilterCheckBoxBox></CalenderHeroFilterCheckBoxBox>
                        <CalenderHeroFilterCheckBoxText>
                            Worem ipsum 
                        </CalenderHeroFilterCheckBoxText>
                    </CalenderHeroFilterLabel>
                    <CalenderHeroFilterLabel>
                        <CalenderHeroFilterCheckBox className="visually-hidden" type="checkbox" />
                        <CalenderHeroFilterCheckBoxBox></CalenderHeroFilterCheckBoxBox>
                        <CalenderHeroFilterCheckBoxText>
                            Worem ipsum 
                        </CalenderHeroFilterCheckBoxText>
                    </CalenderHeroFilterLabel>

                    <CalenderHeroFilterInputLabel>
                        <CalenderHeroFilterText>
                            день
                        </CalenderHeroFilterText>
                        <CalenderHeroFilterInput type="date"/>
                    </CalenderHeroFilterInputLabel>

                    <CalenderHeroFilterFromBtn type="submit">
                        готово
                    </CalenderHeroFilterFromBtn>
                </CalenderHeroFilterForm>
            </CalenderHeroFilterModal>
        </CalendarHeroSection>
    </>
}
