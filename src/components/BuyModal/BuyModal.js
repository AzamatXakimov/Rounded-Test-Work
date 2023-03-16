import ReactModal from 'react-modal';
import { BuyModalBox, BuyModalBtn, BuyModalCardInput, BuyModalCardMiniInput, BuyModalCheckBox, BuyModalCheckBoxLabel, BuyModalCheckBoxLabelText, BuyModalCheckBoxLabelTextGrey, BuyModalCloseBtn, BuyModalCountBox, BuyModalCountBtn, BuyModalForm, BuyModalFormBox, BuyModalPersonInput, BuyModalText, BuyModalTop, BuyModalTopTitle } from './BuyModal.styled';
import { useState } from 'react';

export const BuyModal = ({modal, setModal}) => {

    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(200000)

    ReactModal.setAppElement("#root");
    return <>
        <ReactModal isOpen={modal} style={{
            overlay: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: "6",
                backgroundColor: "rgba(0,0,0,0.4)"
            },
            content:{
                position: "relative",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                maxWidth: "1280px",
                width: "100%",
                paddingTop: "83px",
                paddingRight: "83px",
                paddingBottom: "26px",
                paddingLeft: "63px",
                backgroundColor: "#fff",
                borderRadius: "0",
                border: "none",
            }
        }} onRequestClose={() => {
            setModal(false)
        }}>
            <BuyModalTop>
                <BuyModalTopTitle>
                    Worem ipsum dolor sit 
                </BuyModalTopTitle>
                <BuyModalCloseBtn type='button' onClick={() => {
                    setModal(false)
                }}></BuyModalCloseBtn>
            </BuyModalTop>
            <BuyModalForm onSubmit={evt => {
                evt.preventDefault()
            }}>

                <BuyModalFormBox>
                    <BuyModalPersonInput type='text' aria-label='Enter your first name' placeholder='ИМЯ' required/>
                    <BuyModalPersonInput type='text' aria-label='Enter your last name' placeholder='Фамилия' required/>
                    <BuyModalPersonInput type='tel' aria-label='Enter your phone number' placeholder='Номер телефона' required/>
                    <BuyModalPersonInput type='email' aria-label='Enter your email' placeholder='email' required/>

                    <BuyModalCheckBoxLabel>
                        <BuyModalCheckBox type='checkbox' required/>
                        <BuyModalCheckBoxLabelText> <BuyModalCheckBoxLabelTextGrey>Worem ipsum</BuyModalCheckBoxLabelTextGrey> dolor sit amet, consectetur adipiscing elit.</BuyModalCheckBoxLabelText>
                    </BuyModalCheckBoxLabel>
                </BuyModalFormBox>

                <BuyModalFormBox>
                    <BuyModalBox>
                        <BuyModalText>цена</BuyModalText>
                        <BuyModalText>{price*count} сум</BuyModalText>
                    </BuyModalBox>
                    <BuyModalBox>
                        <BuyModalText>Кол-во</BuyModalText>

                        <BuyModalCountBox>
                            <BuyModalCountBtn type='button' onClick={() => {
                                if(count > 1){
                                    setCount(count-1)
                                }
                            }}>-</BuyModalCountBtn>
                            <BuyModalText>{count}</BuyModalText>
                            <BuyModalCountBtn type='button' onClick={() => {
                                setCount(count+1)
                            }}>+</BuyModalCountBtn>
                        </BuyModalCountBox>
                    </BuyModalBox>
                    <BuyModalBox>
                        <BuyModalCardInput type='number' aria-label='Enter amount of money' min={price*count}  placeholder='Сумма...' required/>
                    </BuyModalBox>
                    <BuyModalBox>
                        <BuyModalCardInput type='text' aria-label='Enter card number' placeholder='номер карты'required/>
                    </BuyModalBox>
                    <BuyModalBox>
                        <BuyModalCardInput type='text' aria-label='Enter card number' placeholder=''required/>
                    </BuyModalBox>
                    <BuyModalBox>
                        <BuyModalCardMiniInput type='number' aria-label='Enter card validity' placeholder='срок дейст.' required/>
                        <BuyModalCardMiniInput type='number' aria-label='Enter card cvc/cw' placeholder='cvc/cw' required/>
                    </BuyModalBox>
                    <BuyModalBtn type='submit'>оплатить</BuyModalBtn>
                </BuyModalFormBox>
            </BuyModalForm>
        </ReactModal>
    </>
}
