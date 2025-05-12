import styled from "styled-components";
import Header from "../../components/Header.jsx";
import Button from "../../components/Button.jsx";
import Input from "../../components/Input.jsx";

const CreateLeaveType = () => {
    return (
        <>
            <Header/>
            <ContainerS>
                <PS>연차 유형 생성</PS>
                <FormS>
                    <FormGroup>
                        <LabelS htmlFor={"leave-type-name"}>
                            이름 <SpanS>*</SpanS>
                        </LabelS>
                        <Input
                            id={"leave-type-name"}
                            placeholder={"연차 유형 이름을 입력해주세요"}
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

export default CreateLeaveType;