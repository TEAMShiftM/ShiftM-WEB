import React from 'react';
import styled from 'styled-components';
import Header from "../../components/Header.jsx";
import Page from "../../components/Page.jsx";

const Leave = () => {
    const data = [
        {leaveId: 1, name: '연차 휴가', expirationDate: '2026년 3월 2일', count: 12, usedCount: 5},
        {leaveId: 2, name: '출산 휴가', expirationDate: '2026년 3월 2일', count: 60, usedCount: 30},
        {leaveId: 3, name: '특별 휴가', expirationDate: '2026년 3월 2일', count: 1, usedCount: 0}
    ];

    return (
        <>
            <Header/>
            <ContainerS>
                <TitleS>김직원의 휴가</TitleS>
                <TableS>
                    <thead>
                    <tr>
                        <ThS>휴가 유형</ThS>
                        <ThS>유효 날짜</ThS>
                        <ThS>직급 일수</ThS>
                        <ThS>사용 일수</ThS>
                        <ThS></ThS>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item) => (
                        <tr key={item.leaveId}>
                            <Td>{item.name}</Td>
                            <Td>{item.expirationDate}</Td>
                            <Td>{item.count}</Td>
                            <Td>{item.usedCount}</Td>
                            <Td><ButtonS>수정</ButtonS></Td>
                        </tr>
                    ))}
                    </tbody>
                </TableS>

                <MobileTable>
                    {data.map((item) => (
                        <CardS key={item.leaveId}>
                            <RowS><LabelS>휴가 유형</LabelS><ValueS>{item.name}</ValueS></RowS>
                            <RowS><LabelS>유효 날짜</LabelS><ValueS>{item.expirationDate}</ValueS></RowS>
                            <RowS><LabelS>직급 일수 / 사용 일수</LabelS><ValueS>{item.count} / {item.usedCount}</ValueS></RowS>
                            <ButtonS>수정</ButtonS>
                        </CardS>
                    ))}
                </MobileTable>

                <Page
                    currentPage={1}
                    totalPages={10}
                    onPageChange={(page) => console.log('이동할 페이지:', page)}
                    pageRange={5}
                    showArrows={true}
                />
            </ContainerS>
        </>
    );
};

export default Leave;

const ContainerS = styled.div`
    margin-top: 2rem;
    padding: 40px 60px;

    @media (max-width: 768px) {
        margin-top: 0;
        padding: 10px 30px;
    }
`;

const TitleS = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
`;

const TableS = styled.table`
    width: 100%;
    border-collapse: collapse;
    background: white;
    text-align: center;

    @media (max-width: 768px) {
        display: none;
    }
`;

const ThS = styled.th`
    background-color: #cfe5ff;
    padding: 12px;
    font-size: 16px;
`;

const Td = styled.td`
    padding: 12px;
    border-bottom: 1px solid #eee;
`;

const MobileTable = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`;

const CardS = styled.div`
    background: white;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

const RowS = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`;

const LabelS = styled.span`
    font-weight: bold;
`;

const ValueS = styled.span`
    color: #555;
`;

const ButtonS = styled.button`
    color: #2a7de1;
    background: none;
    border: none;
    cursor: pointer;
    font-weight: bold;
    margin-top: 8px;

    @media (max-width: 768px) {
        align-self: flex-end;
        margin-top: 0;
        color: white;
        background-color: #007bff;
        padding: 6px 10px;
        border-radius: 10px;
        opacity: 0.7;
    }
`;