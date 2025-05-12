import { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header.jsx";

export default function RequestLeave() {
    const [vacationType, setVacationType] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const isHalfDay = vacationType.includes("반차");

    return (
        <>
            <Header/>
            <Container>
                <Form>
                    <TitleS>휴가 신청</TitleS>

                    <Field>
                        <LabelS>휴가 유형 <SpanS>*</SpanS></LabelS>
                        <Input
                            type="text"
                            placeholder="휴가 유형을 선택해주세요 (예: 연차, 반차)"
                            value={vacationType}
                            onChange={(e) => setVacationType(e.target.value)}
                            required
                        />


                    </Field>

                    <Field>
                        <LabelS>휴가 유형 <SpanS>*</SpanS></LabelS>
                        <Select
                            value={vacationType}
                            onChange={(e) => setVacationType(e.target.value)}
                            required
                        >
                            <option value="">휴가 유형을 선택해주세요</option>
                            <option value="연차">연차</option>
                            <option value="반차(오전)">반차(오전)</option>
                            <option value="반차(오후)">반차(오후)</option>
                            <option value="병가">병가</option>
                            <option value="경조사">경조사</option>
                            <option value="기타">기타</option>
                        </Select>
                    </Field>

                    <Field>
                        <LabelS>휴가 기간 <SpanS>*</SpanS></LabelS>
                        <Row>
                            <Input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                required
                            />
                            <Dash>~</Dash>
                            <Input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                required
                            />
                        </Row>
                    </Field>

                    {isHalfDay && (
                        <Field>
                            <LabelS>시간 선택 <SpanS>*</SpanS></LabelS>
                            <Row>
                                <Select value={startTime} onChange={(e) => setStartTime(e.target.value)} required>
                                    <option value="">시작 시간</option>
                                    <option value="09:00">09:00</option>
                                    <option value="13:00">13:00</option>
                                </Select>
                                <Dash>~</Dash>
                                <Select value={endTime} onChange={(e) => setEndTime(e.target.value)} required>
                                    <option value="">종료 시간</option>
                                    <option value="12:00">12:00</option>
                                    <option value="18:00">18:00</option>
                                </Select>
                            </Row>
                        </Field>
                    )}



                    <Button type="submit">완료</Button>
                </Form>
            </Container>
        </>
    );
}

// styled-components

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f6ff;
    padding: 1rem;
`;

const Form = styled.form`
    background: transparent;
    padding: 2rem;
    border-radius: 1rem;
    width: 100%;
    max-width: 400px;
`;

const TitleS = styled.h1`
    text-align: center;
    font-size: 1.8rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 2rem;
`;

const Field = styled.div`
    margin-bottom: 1.5rem;
`;

const LabelS = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    color: #666;
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
`;

const Select = styled.select`
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #a0c4ff;
    border-radius: 0.5rem;
    outline: none;
`;

const Button = styled.button`
    width: 100%;
    background-color: #60a5fa;
    color: white;
    font-weight: 600;
    padding: 0.75rem;
    border-radius: 1rem;
    transition: background-color 0.3s;

    &:hover {
        background-color: #3b82f6;
    }
`;

const SpanS = styled.span`
    color: #007bff;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const Dash = styled.span`
    padding: 0 0.5rem;
    font-weight: bold;
`;