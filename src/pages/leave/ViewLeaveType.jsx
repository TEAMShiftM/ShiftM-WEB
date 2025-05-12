import Header from "../../components/Header.jsx";
import styled from "styled-components";

const leaveTypes = [
    { id: 1, name: "연차 휴가" },
    { id: 2, name: "출산 휴가" },
    { id: 3, name: "특별 휴가" },
];

const ViewLeaveType = () => {
    return (
        <>
            <Header />
            <ContainerS>
                <Title>연차 유형 관리</Title>
                <TableWrapper>
                    <Table>
                        <thead>
                        <tr>
                            <Th>번호</Th>
                            <Th>이름</Th>
                            <Th></Th> {/* 수정/삭제용 */}
                        </tr>
                        </thead>
                        <tbody>
                        {leaveTypes.map((leave) => (
                            <Tr key={leave.id}>
                                <Td>{leave.id}</Td>
                                <Td>{leave.name}</Td>
                                <Td>
                                    <ActionButton>수정</ActionButton>
                                    <ActionButton>삭제</ActionButton>
                                </Td>
                            </Tr>
                        ))}
                        </tbody>
                    </Table>
                </TableWrapper>

                <CardList>
                    {leaveTypes.map((leave) => (
                        <Card key={leave.id}>
                            <CardRow><strong>번호:</strong> {leave.id}</CardRow>
                            <CardRow><strong>이름:</strong> {leave.name}</CardRow>
                            <CardActions>
                                <ActionButton>수정</ActionButton>
                                <ActionButton>삭제</ActionButton>
                            </CardActions>
                        </Card>
                    ))}
                </CardList>
            </ContainerS>
        </>
    );
};

export default ViewLeaveType;

// ===== styled-components =====

const ContainerS = styled.div`
    background-color: #f5faff;
    min-height: 100vh;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 480px) {
        font-size: 1.25rem;
    }
`;

const TableWrapper = styled.div`
    width: 80%;
    background-color: white;
    border-radius: 8px;
    overflow-x: auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        width: 90%;
    }

    @media (max-width: 480px) {
        display: none; /* 모바일에서는 테이블 숨김 */
    }
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    min-width: 600px; /* 작게 줄어들 때를 대비해서 최소 너비 설정 */

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

const Th = styled.th`
    background-color: #cce4ff;
    padding: 16px;
    font-weight: bold;
    text-align: left;
    font-size: 1rem;
    border-bottom: 1px solid #e0e0e0;

    @media (max-width: 480px) {
        padding: 12px;
    }
`;

const Tr = styled.tr`
    &:not(:last-child) {
        border-bottom: 1px solid #e0e0e0;
    }

    &:hover {
        background-color: #f0f8ff;
    }
`;

const Td = styled.td`
    padding: 16px;
    font-size: 1rem;

    @media (max-width: 480px) {
        padding: 12px;
    }
`;

const ActionButton = styled.button`
    background: none;
    border: none;
    color: #007bff;
    margin-left: 8px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

// 🆕 카드 리스트 (모바일 전용)
const CardList = styled.div`
    display: none;

    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 95%;
    }
`;

const Card = styled.div`
    background-color: white;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const CardRow = styled.div`
    margin-bottom: 8px;
    font-size: 1rem;
`;

const CardActions = styled.div`
    display: flex;
    gap: 8px;
`;

