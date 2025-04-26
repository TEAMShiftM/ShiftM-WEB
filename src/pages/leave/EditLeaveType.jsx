import styled from "styled-components";
import Header from "../../components/Header.jsx";
import Button from "../../components/Button.jsx";
import Input from "../../components/Input.jsx";

const EditLeaveType = () => {
    return (
        <>
            <Header/>
            <ContainerS>
                <PS>연차 유형 수정</PS>

                <DivS>
                    <span>특별 휴가</span> ➡️ <SpanS>여름 휴가</SpanS>
                </DivS>

                <FormS>
                    <FormGroup>
                        <LabelS htmlFor={"leave-type-name"}>
                            이름 <SpanS>*</SpanS>
                        </LabelS>
                        {/*TODO 백엔드 API로 가져온 연차 유형 이름으로 defaultValue 지정*/}
                        <Input
                            id={"leave-type-name"}
                            placeholder={"연차 유형 이름을 입력해주세요"}
                            defaultValue={"특별 휴가"}
                            width={"400px"}
                        />
                    </FormGroup>

                    <Button text={"완료"} width={"434px"}/>
                </FormS>
            </ContainerS>
        </>
    );
};

const ContainerS = styled.div`
    width: 100%;
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        margin-top: 140px;
    }
`;

const PS = styled.p`
    font-size: 2rem;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const LabelS = styled.label`
    font-size: 1.2rem;
    font-weight: bold;
    display: block;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

const SpanS = styled.span`
    color: #007bff;
`;

const FormS = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    Button {
        @media (max-width: 768px) {
            width: 284px;
        }
    }
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    Input {
        @media (max-width: 768px) {
            font-size: 13px;
            width: 250px;
        }
    }
`;

const DivS = styled.div`
    text-align: center;
    margin-bottom: 10px;
    
    span {
        background-color: white;
        padding: 5px 10px;
        border-radius: 10px;
        margin-right: 5px;
        margin-left: 5px;
    }
    
    
    @media (max-width: 768px) {
        font-size: 13px;
    }
`;

export default EditLeaveType;