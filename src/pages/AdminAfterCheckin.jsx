import React, { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const AfterCheckInPage = () => {
  const [searchText, setSearchText] = useState("");

  const data = [
    { id: 1, name: "김사원", location: "서울시 성북구", time: "25.02.28 09:00", status: "대기" },
    { id: 2, name: "이대리", location: "서울시 성북구", time: "25.02.28 09:00", status: "승인" },
    { id: 3, name: "박팀장", location: "서울시 성북구", time: "25.02.28 09:00", status: "거절" },
  ];

  const handleApprove = (id) => {
    // 승인 처리 로직 추가
    alert(`${id} 승인 처리됨`);
  };

  const handleReject = (id) => {
    // 거절 처리 로직 추가
    alert(`${id} 거절 처리됨`);
  };

  return (
    <Wrapper>
      <Header/>
      <Content>
      <Title>출근 신청</Title>
      <SearchBar>
        <Input
          type="text"
          placeholder="직원 이름을 입력해주세요"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <FaSearch color="#4ea3ff" />
      </SearchBar>

      <StyledTable>
        <thead>
          <tr>
            <Th>#</Th>
            <Th>이름</Th>
            <Th>출근 위치</Th>
            <Th>출근 시간</Th>
            <Th>상태</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <Td>{row.id}</Td>
              <Td>{row.name}</Td>
              <Td>{row.location}</Td>
              <Td>{row.time}</Td>
              <Td>
                {row.status === "대기" ? (
                  <>
                    대기 <Action onClick={() => handleApprove(row.id)}> &nbsp; &nbsp; &nbsp;
                    승인</Action> <Action onClick={() => handleReject(row.id)}>거절</Action>
                  </>
                ) : (
                  row.status
                )}
              </Td>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <Pagination>
        <span> ← Previous</span>
        {[1, 2, 3, 4, 5].map((page) => (
          <PageNumber key={page} active={page === 1}>{page}</PageNumber>
        ))}
        <span>Next →</span>
      </Pagination>
      </Content>
    </Wrapper>
  );
};

export default AfterCheckInPage;

const Wrapper = styled.div`
  background-color: #f5f9ff;
  min-height: 100vh;
`;

const Content = styled.div`
  margin: 0 auto;
  padding: 2rem 10vh;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1rem;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.4rem 0.8rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
  width: 250px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  overflow: hidden;
`;

const Th = styled.th`
  background-color: #dceeff;
  padding: 1rem;
  text-align: left;
`;

const Td = styled.td`
  padding: 1rem;
  border-top: 1px solid #eee;
`;

const Action = styled.span`
  color: #4ea3ff;
  margin-left: 0.5rem;
  cursor: pointer;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.5rem;
  color: #555;
`;

const PageNumber = styled.button`
  border: none;
  background-color: ${({ active }) => (active ? "#4ea3ff" : "white")};
  color: ${({ active }) => (active ? "white" : "#4ea3ff")};
  border-radius: 8px;
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  font-weight: 500;
  border: 1px solid #4ea3ff;
`;
