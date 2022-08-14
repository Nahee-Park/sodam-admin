import Button from '@components/common/Button';
import Input from '@components/common/Input';
import React, { useState } from 'react';
import styled from 'styled-components';

interface shopFormProps {
  shopName?: string;
  subway?: string;
  roadAddress?: string;
  landAddress?: string;
  time?: string;
  close?: string;
  phone?: string;
  homepage?: string;
  instagram?: string;
  blog?: string;
  store?: string;
  area?: string;
  category?: Array<string>;
  theme?: Array<string>;
  image?: Array<string>;
}

function ShopForm(props: shopFormProps) {
  const {
    shopName = '룰루랄라',
    subway,
    roadAddress,
    landAddress,
    time,
    close,
    phone,
    homepage,
    instagram,
    blog,
    store,
    area,
    category,
    theme,
    image = [
      'https://sodam.me/_next/image?url=https%3A%2F%2Fsearch.pstatic.net%2Fcommon%2F%3FautoRotate%3Dtrue%26quality%3D95%26type%3Dw750%26src%3Dhttps%253A%252F%252Fldb-phinf.pstatic.net%252F20211030_296%252F1635601868759oh4iC_JPEG%252FHSoh5UhZWDbFWrhxNSyfbG4-.jpeg.jpg&w=3840&q=75',
      'https://sodam.me/_next/image?url=https%3A%2F%2Fsearch.pstatic.net%2Fcommon%2F%3FautoRotate%3Dtrue%26quality%3D95%26type%3Dw750%26src%3Dhttps%253A%252F%252Fldb-phinf.pstatic.net%252F20211030_51%252F16356018850800aMQ1_JPEG%252F_RBwbFK7ubsvv-OeyYk8PS0d.jpeg.jpg&w=3840&q=75',
    ],
  } = props;
  const [imageList, setImageList] = useState<string[] | undefined>(image);

  const handleImageClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.currentTarget.id);
    const index = Number(e.currentTarget.id);
    const copyImageList = imageList && [...imageList];
    const updatedImageList = copyImageList?.splice(index, index - 1);
    setImageList(updatedImageList);
  };
  return (
    <Styled.Root>
      <Styled.InputSet>
        <label htmlFor="shopName">소품샵 명</label>
        <Input
          id="shopName"
          width="486px"
          placeholder="추가할 소품샵 명을 입력하세요"
          defaultValue={shopName}
        />
      </Styled.InputSet>
      <Styled.InputSet>
        <label htmlFor="category">소품샵 종류</label>
        <Input id="category" width="486px" placeholder="인테리어소품" defaultValue={category} />
      </Styled.InputSet>
      <Styled.InputSet>
        <label htmlFor="theme">분위기</label>
        <Input id="theme" width="486px" placeholder="아기자기" defaultValue={theme} />
      </Styled.InputSet>
      <Styled.RowInputSet>
        <Styled.InputSet>
          <label htmlFor="roadAddress">도로명 주소</label>
          <Input
            id="roadAddress"
            width="486px"
            placeholder="도로명 주소"
            defaultValue={roadAddress}
          />
        </Styled.InputSet>
        <Styled.InputSet>
          <label htmlFor="landAddress">지번 주소</label>
          <Input
            id="landAddress"
            width="486px"
            placeholder="지번 주소"
            defaultValue={landAddress}
          />
        </Styled.InputSet>
      </Styled.RowInputSet>
      <Styled.RowInputSet>
        <Styled.InputSet>
          <label htmlFor="subway">가까운 역</label>
          <Input id="subway" width="486px" placeholder="강동구청역" defaultValue={subway} />
        </Styled.InputSet>
        <Styled.InputSet>
          <label htmlFor="area">지역(구)</label>
          <Input id="area" width="486px" placeholder="송파구" defaultValue={area} />
        </Styled.InputSet>
      </Styled.RowInputSet>
      <Styled.RowInputSet>
        <Styled.InputSet>
          <label htmlFor="phone">전화번호</label>
          <Input id="phone" width="486px" placeholder="010-0000-0000" defaultValue={phone} />
        </Styled.InputSet>
        <Styled.InputSet>
          <label htmlFor="time">영업시간</label>
          <Input id="time" width="486px" placeholder="11:00~16:00" defaultValue={time} />
        </Styled.InputSet>
      </Styled.RowInputSet>
      <Styled.RowInputSet>
        <Styled.InputSet>
          <label htmlFor="close">휴무일</label>
          <Input id="close" width="486px" placeholder="일요일" defaultValue={close} />
        </Styled.InputSet>
        <Styled.InputSet>
          <label htmlFor="homepage">홈페이지</label>
          <Input
            id="homepage"
            width="486px"
            placeholder="https://sodam.me"
            defaultValue={homepage}
          />
        </Styled.InputSet>
      </Styled.RowInputSet>
      <Styled.RowInputSet>
        <Styled.InputSet>
          <label htmlFor="instagram">인스타</label>
          <Input
            id="instagram"
            width="486px"
            placeholder="https://www.instagram.com/sodam_official_/"
            defaultValue={instagram}
          />
        </Styled.InputSet>
        <Styled.InputSet>
          <label htmlFor="blog">블로그</label>
          <Input id="blog" width="486px" placeholder="https://sodam.me" defaultValue={blog} />
        </Styled.InputSet>
      </Styled.RowInputSet>
      <Styled.InputSet>
        <label htmlFor="store">
          네이버
          <br />
          스토어팜
        </label>
        <Input
          id="store"
          width="486px"
          placeholder="네이버 or 스토어팜 주소를 입력하세요"
          defaultValue={store}
        />
      </Styled.InputSet>
      <Styled.InputSet>
        <label htmlFor="image">사진</label>
        <input type="file" />
      </Styled.InputSet>
      <Styled.imageWrapperList>
        {imageList?.map((item, idx) => {
          return (
            <Styled.ImageWrapper key={idx}>
              <Styled.Image src={item} alt="소품샵 이미지" id={idx.toString()} />
              <Styled.XButton onClick={handleImageClick}>𝖷</Styled.XButton>
            </Styled.ImageWrapper>
          );
        })}
      </Styled.imageWrapperList>
      <Button width="100%" height="45px">
        소품샵 등록 완료
      </Button>
    </Styled.Root>
  );
}

export default ShopForm;

const Styled = {
  Root: styled.section`
    & > button {
      margin-top: 18px;
    }
  `,
  InputSet: styled.div`
    display: flex;
    align-items: center;
    height: 28px;
    margin-top: 18px;
    margin-right: 18px;
    label {
      font-size: 14px;
      margin-right: 8px;
      width: 65px;
    }
  `,
  RowInputSet: styled.div`
    display: flex;
  `,
  imageWrapperList: styled.div`
    display: flex;
    margin-left: 75px;
  `,
  ImageWrapper: styled.div`
    position: relative;
    width: 180px;
    height: 130px;
    margin-right: 10px;
  `,
  Image: styled.img`
    width: 180px;
    height: 130px;
  `,
  XButton: styled.button`
    position: absolute;
    left: 83%;
    top: 4px;
    border: 0;
    outline: 0;
    border-radius: 50%;
    background: #989797;
    color: white;
    cursor: pointer;
  `,
};
