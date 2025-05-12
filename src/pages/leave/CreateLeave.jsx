// components/AnnualLeaveForm.tsx

import {useState} from "react";
import styled from "styled-components";
import Header from "../../components/Header.jsx";
import Button from "../../components/Button.jsx";
import VacationPeriodPicker from "./VacationPeriodPicker.jsx";

export default function CreateLeave() {
    const [leaveType, setLeaveType] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [isUnlimited, setIsUnlimited] = useState(false);
    const [leaveCount, setLeaveCount] = useState("");
    const [targetEmployee, setTargetEmployee] = useState("");

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log({
    //         leaveType,
    //         expiryDate: isUnlimited ? "무기한" : expiryDate,
    //         leaveCount,
    //         targetEmployee,
    //     });
    // };

    return (

        <>
            <Header/>
            <ContainerS>
                <FormS>
                    <Title>연차</Title>
                    <Field>
                        <LabelS htmlFor={"leave-type-name"}>연차 유형 <SpanS>*</SpanS></LabelS>
                        <Input
                            id={"leave-type-name"}
                            placeholder="연차 유형을 선택해주세요"
                            value={leaveType}
                            onChange={(e) => setLeaveType(e.target.value)}
                            width={"450px"}
                        />
                    </Field>

                    <Field>
                        <LabelS htmlFor={"expiration-date"}>유효 날짜 <SpanS>*</SpanS></LabelS>
                        <DateRow>
                            <Input
                                id={"expiration-date"}
                                type="date"
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                                disabled={isUnlimited}
                                required={!isUnlimited}
                            />
                            <CheckboxWrapper>
                                <span>무기한</span>
                                <Checkbox
                                    type="checkbox"
                                    checked={isUnlimited}
                                    onChange={() => setIsUnlimited(!isUnlimited)}
                                />
                            </CheckboxWrapper>
                        </DateRow>
                    </Field>

                    <Field>
                        <LabelS htmlFor={"leave-count"}>연차 개수 <SpanS>*</SpanS></LabelS>
                        <Input
                            id={"leave-count"}
                            type="number"
                            placeholder="연차 개수를 입력해주세요"
                            value={leaveCount}
                            onChange={(e) => setLeaveCount(e.target.value)}
                            required
                            min={1}
                        />
                    </Field>

                    <Field>
                        <LabelS>대상 직원 <SpanS>*</SpanS></LabelS>
                        <Input
                            type="text"
                            placeholder="연차 대상 직원을 선택해주세요"
                            value={targetEmployee}
                            onChange={(e) => setTargetEmployee(e.target.value)}
                            required
                        />
                    </Field>
                    <Button width={"476px"} text={"완료"} type="submit"/>
                </FormS>
            </ContainerS>
        </>
    );
}

// styled-components

const ContainerS = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FormS = styled.form`
    background: transparent;
    padding: 2rem;
    border-radius: 1rem;
    width: 100%;
    max-width: 450px;
`;

const SpanS = styled.span`
    color: #007bff;
`;

const Title = styled.h1`
    text-align: center;
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 2rem;
`;

const Field = styled.div`
    margin-bottom: 1.5rem;
`;

const LabelS = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
`;

const Input = styled.input`
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #a0c4ff;
    border-radius: 0.5rem;
    outline: none;

    &::placeholder {
        color: #90caf9;
    }

    &:disabled {
        background-color: #f1f5f9;
    }
`;

const DateRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

const CheckboxWrapper = styled.label`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: #555;
`;

const Checkbox = styled.input`
    width: 1rem;
    height: 1rem;
    accent-color: #60a5fa;
`;


