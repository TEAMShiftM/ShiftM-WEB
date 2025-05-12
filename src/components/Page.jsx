import React from "react";
import styled from "styled-components";

const Page = ({currentPage, totalPages, onPageChange, pageRange, showArrows = true}) => {

    const startPage = Math.max(
        1,
        currentPage - Math.floor(pageRange / 2)
    );

    const endPage = Math.min(
        totalPages,
        startPage + pageRange - 1
    );

    const handlePageClick = (page) => {
        if (page !== currentPage) {
            onPageChange(page);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return (
        <PaginationS>
            {showArrows && (
                <ArrowS
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                >
                    ← Previous
                </ArrowS>
            )}
            {pages.map((page) => (
                <PageNumberS
                    key={page}
                    active={page === currentPage}
                    onClick={() => handlePageClick(page)}
                >
                    {page}
                </PageNumberS>
            ))}
            {showArrows && (
                <ArrowS
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                >
                    Next →
                </ArrowS>
            )}
        </PaginationS>


        // <Pagination>
        //     <Arrow disabled>← Previous</Arrow>
        //     <PageNumber active>1</PageNumber>
        //     <PageNumber>2</PageNumber>
        //     <PageNumber>3</PageNumber>
        //     <PageNumber>4</PageNumber>
        //     <PageNumber>5</PageNumber>
        //     <Arrow>Next →</Arrow>
        // </Pagination>
    );
};

// 스타일
const PaginationS = styled.div`
    margin-top: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
`;

const ArrowS = styled.button`
    background: none;
    border: none;
    color: ${({disabled}) => (disabled ? '#ccc' : '#000')};
    cursor: ${({disabled}) => (disabled ? 'default' : 'pointer')};
    font-size: 14px;
`;

const PageNumberS = styled.button`
    background: ${({active}) => (active ? '#2a7de1' : 'transparent')};
    color: ${({active}) => (active ? '#fff' : '#000')};
    border: none;
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
`;

// const Pagination = styled.div`
//     margin-top: 24px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 8px;
//     flex-wrap: wrap;
// `;
//
// const Arrow = styled.button`
//     background: none;
//     border: none;
//     color: ${({disabled}) => (disabled ? '#ccc' : '#000')};
//     cursor: ${({disabled}) => (disabled ? 'default' : 'pointer')};
//     font-size: 14px;
// `;
//
// const PageNumber = styled.button`
//     background: ${({active}) => (active ? '#2a7de1' : 'transparent')};
//     color: ${({active}) => (active ? '#fff' : '#000')};
//     border: none;
//     padding: 4px 8px;
//     border-radius: 4px;
//     cursor: pointer;
// `;

export default Page;