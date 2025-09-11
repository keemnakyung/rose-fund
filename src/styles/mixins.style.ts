import { css } from "styled-components";

export const flex = css`
  display: flex;
`;

// flex, justify-content
export const flexCenter = css`
  display: flex;
  justify-content: center;
`;

export const flexStart = css`
  display: flex;
  justify-content: start;
`;

export const flexEnd = css`
  display: flex;
  justify-content: end;
`;

export const flexLeft = css`
  display: flex;
  justify-content: left;
`;

export const flexRight = css`
  display: flex;
  justify-content: right;
`;

export const flexBetween = css`
  display: flex;
  justify-content: space-between;
`;

export const flexAround = css`
  display: flex;
  justify-content: space-around;
`;

export const flexEvenly = css`
  display: flex;
  justify-content: space-evenly;
`;

export const flexUnset = css`
  display: flex;
  justify-content: unset;
`;

// flex, align-items
export const flexNoneCenter = css`
  display: flex;
  align-items: center;
`;

export const flexNoneStart = css`
  display: flex;
  align-items: start;
`;

export const flexNoneEnd = css`
  display: flex;
  align-items: end;
`;

// flex, justify-content: unset, align-items
export const flexUnsetCenter = css`
  ${flexUnset};
  align-items: center;
`;

export const flexUnsetStart = css`
  ${flexUnset}
  align-items: start;
`;

export const flexUnsetEnd = css`
  ${flexUnset}
  align-items: end;
`;


// flex, justify-content: center, align-items
export const flexCenterCenter = css`
  ${flexCenter}
  align-items: center;
`;

export const flexCenterStart = css`
  ${flexCenter}
  align-items: start;
`;

export const flexCenterEnd = css`
  ${flexCenter}
  align-items: end;
`;

// flex, justify-content: start, align-items
export const flexStartCenter = css`
  ${flexStart}
  align-items: center;
`;

export const flexStartStart = css`
  ${flexStart}
  align-items: start;
`;

export const flexStartEnd = css`
  ${flexStart}
  align-items: end;
`;

// flex, justify-content: end, align-items
export const flexEndCenter = css`
  ${flexEnd}
  align-items: center;
`;

export const flexEndStart = css`
  ${flexEnd}
  align-items: start;
`;

export const flexEndEnd = css`
  ${flexEnd}
  align-items: end;
`;

// flex, justify-content: left, align-items
export const flexLeftCenter = css`
  ${flexLeft}
  align-items: center;
`;

export const flexLeftStart = css`
  ${flexLeft}
  align-items: start;
`;

export const flexLeftEnd = css`
  ${flexLeft}
  align-items: end;
`;

// flex, justify-content: right, align-items
export const flexRightCenter = css`
  ${flexRight}
  align-items: center;
`;

export const flexRightStart = css`
  ${flexRight}
  align-items: start;
`;

export const flexRightEnd = css`
  ${flexRight}
  align-items: end;
`;

// flex, justify-content: space-between, align-items
export const flexBetweenCenter = css`
  ${flexBetween}
  align-items: center;
`;

export const flexBetweenStart = css`
  ${flexBetween}
  align-items: start;
`;

export const flexBetweenEnd = css`
  ${flexBetween}
  align-items: end;
`;

// flex, justify-content: space-around, align-items
export const flexAroundCenter = css`
  ${flexAround}
  align-items: center;
`;

export const flexAroundStart = css`
  ${flexAround}
  align-items: start;
`;

export const flexAroundEnd = css`
  ${flexAround}
  align-items: end;
`;

// flex, justify-content: space-evenly, align-items
export const flexEvenlyCenter = css`
  ${flexEvenly}
  align-items: center;
`;

export const flexEvenlyStart = css`
  ${flexEvenly}
  align-items: start;
`;

export const flexEvenlyEnd = css`
  ${flexEvenly}
  align-items: end;
`;


// flex, direction: column
export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;


// flex, direction: column, justify-content
export const flexColumnCenter = css`
  ${flexCenter}
  flex-direction: column;
`;

export const flexColumnStart = css`
  ${flexStart}
  flex-direction: column;
`;

export const flexColumnEnd = css`
  ${flexEnd}
  flex-direction: column;
`;

export const flexColumnLeft = css`
  ${flexLeft}
  flex-direction: column;
`;

export const flexColumnRight = css`
  ${flexRight}
  flex-direction: column;
`;

export const flexColumnBetween = css`
  ${flexBetween}
  flex-direction: column;
`;

export const flexColumnAround = css`
  ${flexAround}
  flex-direction: column;
`;

export const flexColumnEvenly = css`
  ${flexEvenly}
  flex-direction: column;
`;


// flex, direction: column, align-items
export const flexColumnUnsetCenter = css`
  ${flexUnsetCenter}
  flex-direction: column;
`;

export const flexColumnUnsetStart = css`
  ${flexUnsetStart}
  flex-direction: column;
`;

export const flexColumnUnsetEnd = css`
  ${flexUnsetEnd}
  flex-direction: column;
`;

// flex, direction: column, justify-content: start, align-items
export const flexColumnCenterCenter = css`
  ${flexColumnCenter}
  align-items: center;
`;

export const flexColumnCenterStart = css`
  ${flexColumnCenter}
  align-items: start;
`;

export const flexColumnCenterEnd = css`
  ${flexColumnCenter}
  align-items: end;
`;


// flex, direction: column, justify-content: start, align-items
export const flexColumnStartCenter = css`
  ${flexColumnStart}
  align-items: center;
`;

export const flexColumnStartStart = css`
  ${flexColumnStart}
  align-items: start;
`;

export const flexColumnStartEnd = css`
  ${flexColumnStart}
  align-items: end;
`;

// flex, direction: column, justify-content: end, align-items
export const flexColumnEndCenter = css`
  ${flexColumnEnd}
  align-items: center;
`;

export const flexColumnEndStart = css`
  ${flexColumnEnd}
  align-items: start;
`;

export const flexColumnEndEnd = css`
  ${flexColumnEnd}
  align-items: end;
`;

// flex, direction: column, justify-content: left, align-items
export const flexColumnLeftCenter = css`
  ${flexColumnLeft}
  align-items: center;
`;

export const flexColumnLeftStart = css`
  ${flexColumnLeft}
  align-items: start;
`;

export const flexColumnLeftEnd = css`
  ${flexColumnLeft}
  align-items: end;
`;

// flex, direction: column, justify-content: right, align-items
export const flexColumnRightCenter = css`
  ${flexColumnRight}
  align-items: center;
`;

export const flexColumnRightStart = css`
  ${flexColumnRight}
  align-items: start;
`;

export const flexColumnRightEnd = css`
  ${flexColumnRight}
  align-items: end;
`;

// flex, direction: column, justify-content: space-between, align-items
export const flexColumnBetweenCenter = css`
  ${flexColumnBetween}
  align-items: center;
`;

export const flexColumnBetweenStart = css`
  ${flexColumnBetween}
  align-items: start;
`;

export const flexColumnBetweenEnd = css`
  ${flexColumnBetween}
  align-items: end;
`;

// flex, direction: column, justify-content: space-around, align-items
export const flexColumnAroundCenter = css`
  ${flexColumnAround}
  align-items: center;
`;

export const flexColumnAroundStart = css`
  ${flexColumnAround}
  align-items: start;
`;

export const flexColumnAroundEnd = css`
  ${flexColumnAround}
  align-items: end;
`;

// flex, direction: column, justify-content: space-evenly, align-items
export const flexColumnEvenlyCenter = css`
  ${flexColumnEvenly}
  align-items: center;
`;

export const flexColumnEvenlyStart = css`
  ${flexColumnEvenly}
  align-items: start;
`;

export const flexColumnEvenlyEnd = css`
  ${flexColumnEvenly}
  align-items: end;
`;

// transition
export const transition02 = css`
  transition: all 0.2s ease-in-out;
`;