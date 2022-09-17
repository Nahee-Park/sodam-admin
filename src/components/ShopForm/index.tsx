import Button from '@components/common/Button';
import Input from '@components/common/Input';
import React, { createRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import usePostShop from '@hooks/usePostShop';
import { ImageType, shopFormProps } from '@types';
import Router from 'src/core/router';
import { useNavigate } from 'react-router-dom';

function ShopForm(props: shopFormProps) {
  const {
    shopName,
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
    image = [],
  } = props;
  const [imageList, setImageList] = useState<Array<ImageType | string>>(image);
  const shopNameInput = createRef<HTMLInputElement>();
  const subwayInput = createRef<HTMLInputElement>();
  const roadAddressInput = createRef<HTMLInputElement>();
  const landAddressInput = createRef<HTMLInputElement>();
  const timeInput = createRef<HTMLInputElement>();
  const closeInput = createRef<HTMLInputElement>();
  const phoneInput = createRef<HTMLInputElement>();
  const homepageInput = createRef<HTMLInputElement>();
  const instagramInput = createRef<HTMLInputElement>();
  const blogInput = createRef<HTMLInputElement>();
  const storeInput = createRef<HTMLInputElement>();
  const areaInput = createRef<HTMLInputElement>();
  const categoryInput = createRef<HTMLInputElement>();
  const themeInput = createRef<HTMLInputElement>();
  const imageInput = createRef<HTMLInputElement>();
  const [postData, setPostData] = useState<any>();
  const { mutate } = usePostShop(postData);
  const navigate = useNavigate();

  const convertURLtoFile = async (url: string) => {
    const response = await fetch(url);
    const data = await response.blob();
    const ext = url.split('.').pop(); // url 구조에 맞게 수정할 것
    const filename = url.split('/').pop(); // url 구조에 맞게 수정할 것
    const metadata = { type: `image/${ext}` };
    console.log('>>>url to filedata', new File([data], filename!, metadata));
    return new File([data], filename!, metadata);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;

    const MAX_NUM = 4;

    const tempImageList: Array<string | ImageType> = imageList ? [...imageList] : [];
    // 받은 파일 리스트
    const dataList = Array.from(e.target.files);

    if (imageList.length + dataList.length > MAX_NUM) {
      const restSize = MAX_NUM - imageList.length;
      dataList.splice(restSize);
    }

    const promiseList: Array<Promise<ImageType>> = dataList.map(
      async (data) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(data);
          reader.onloadend = () => {
            if (reader.result instanceof ArrayBuffer) {
              resolve({
                file: null,
                preview: null,
              });

              return;
            }
            resolve({ file: data, preview: reader.result });
          };
        }),
    );

    const resolvedList = await Promise.all(promiseList);
    console.log('>>resolvedList', resolvedList);
    resolvedList.forEach((resolvedData: ImageType) => {
      tempImageList.push(resolvedData);
    });

    e.target.value = '';
    setImageList(tempImageList);
  };

  const handleImageClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.currentTarget.id);
    const idx = Number(e.currentTarget.id);
    // const copyImageList = imageList && [...imageList];
    // const updatedImageList = copyImageList?.splice(index, index - 1);
    // setImageList(updatedImageList);
    imageList && setImageList(imageList?.filter((_, index) => idx !== index));
  };

  // useEffect(() => {
  //   console.log('>>imageList', imageList);
  //   convertURLtoFile(
  //     'https://sodam.me/_next/image?url=https%3A%2F%2Fsearch.pstatic.net%2Fcommon%2F%3FautoRotate%3Dtrue%26quality%3D95%26type%3Dw750%26src%3Dhttps%253A%252F%252Fldb-phinf.pstatic.net%252F20211030_51%252F16356018850800aMQ1_JPEG%252F_RBwbFK7ubsvv-OeyYk8PS0d.jpeg.jpg&w=3840&q=75',
  //   );
  // }, [imageList]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    console.log('>>shopNameInput.', shopNameInput.current?.value);
    console.log('>>subwayInput.', subwayInput.current?.value);
    console.log('>>roadAddressInput.', roadAddressInput.current?.value);
    console.log('>>landAddressInput.', landAddressInput.current?.value);
    console.log('>>timeInput.', timeInput.current?.value);
    console.log('>>closeInput.', closeInput.current?.value);
    console.log('>>phoneInput.', phoneInput.current?.value);
    console.log('>>homepageInput.', homepageInput.current?.value);
    console.log('>>instagramInput.', instagramInput.current?.value);
    console.log('>>blogInput.', blogInput.current?.value);
    console.log('>>storeInput.', storeInput.current?.value);
    console.log('>>areaInput.', areaInput.current?.value);
    console.log('>>categoryInput.', categoryInput.current?.value);
    console.log('>>themeInput.', themeInput.current?.value);
    console.log('>>imageList.', imageList);
    const imageFileList = imageList?.map((item) => item.file);
    // const formData = new FormData();
    // formData.append('file');
    setPostData({
      image: imageFileList,
      shopName: shopNameInput.current?.value,
      subway: subwayInput.current?.value,
      roadAddress: roadAddressInput.current?.value,
      landAddress: landAddressInput.current?.value,
      time: timeInput.current?.value,
      close: closeInput.current?.value,
      phone: phoneInput.current?.value,
      homepage: homepageInput.current?.value,
      instagram: instagramInput.current?.value,
      blog: blogInput.current?.value,
      store: storeInput.current?.value,
      area: areaInput.current?.value,
      category: categoryInput.current?.value.replace(' ', '').split(','),
      theme: themeInput.current?.value.replace(' ', '').split(','),
    });
    mutate();
    // navigate('/shop');
  };

  useEffect(() => {
    console.log('postData', postData);
  }, [postData]);

  useEffect(() => {
    console.log('>https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg');
    convertURLtoFile('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg');
  }, []);
  return (
    <Styled.Root onSubmit={handleSubmit}>
      <Styled.InputSet>
        <label htmlFor="shopName">소품샵 명</label>
        <Input
          id="shopName"
          width="486px"
          placeholder="추가할 소품샵 명을 입력하세요"
          defaultValue={shopName}
          ref={shopNameInput}
        />
      </Styled.InputSet>
      <Styled.InputSet>
        <label htmlFor="category">소품샵 종류</label>
        <Input
          id="category"
          width="486px"
          placeholder="인테리어소품"
          defaultValue={category}
          ref={categoryInput}
        />
      </Styled.InputSet>
      <Styled.InputSet>
        <label htmlFor="theme">분위기</label>
        <Input
          id="theme"
          width="486px"
          placeholder="아기자기"
          defaultValue={theme}
          ref={themeInput}
        />
      </Styled.InputSet>
      <Styled.RowInputSet>
        <Styled.InputSet>
          <label htmlFor="roadAddress">도로명 주소</label>
          <Input
            id="roadAddress"
            width="486px"
            placeholder="도로명 주소"
            defaultValue={roadAddress}
            ref={roadAddressInput}
          />
        </Styled.InputSet>
        <Styled.InputSet>
          <label htmlFor="landAddress">지번 주소</label>
          <Input
            id="landAddress"
            width="486px"
            placeholder="지번 주소"
            defaultValue={landAddress}
            ref={landAddressInput}
          />
        </Styled.InputSet>
      </Styled.RowInputSet>
      <Styled.RowInputSet>
        <Styled.InputSet>
          <label htmlFor="subway">가까운 역</label>
          <Input
            id="subway"
            width="486px"
            placeholder="강동구청역"
            defaultValue={subway}
            ref={subwayInput}
          />
        </Styled.InputSet>
        <Styled.InputSet>
          <label htmlFor="area">지역(구)</label>
          <Input id="area" width="486px" placeholder="송파구" defaultValue={area} ref={areaInput} />
        </Styled.InputSet>
      </Styled.RowInputSet>
      <Styled.RowInputSet>
        <Styled.InputSet>
          <label htmlFor="phone">전화번호</label>
          <Input
            id="phone"
            width="486px"
            placeholder="010-0000-0000"
            defaultValue={phone}
            ref={phoneInput}
          />
        </Styled.InputSet>
        <Styled.InputSet>
          <label htmlFor="time">영업시간</label>
          <Input
            id="time"
            width="486px"
            placeholder="11:00~16:00"
            defaultValue={time}
            ref={timeInput}
          />
        </Styled.InputSet>
      </Styled.RowInputSet>
      <Styled.RowInputSet>
        <Styled.InputSet>
          <label htmlFor="close">휴무일</label>
          <Input
            id="close"
            width="486px"
            placeholder="일요일"
            defaultValue={close}
            ref={closeInput}
          />
        </Styled.InputSet>
        <Styled.InputSet>
          <label htmlFor="homepage">홈페이지</label>
          <Input
            id="homepage"
            width="486px"
            placeholder="https://sodam.me"
            defaultValue={homepage}
            ref={homepageInput}
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
            ref={instagramInput}
          />
        </Styled.InputSet>
        <Styled.InputSet>
          <label htmlFor="blog">블로그</label>
          <Input
            id="blog"
            width="486px"
            placeholder="https://sodam.me"
            defaultValue={blog}
            ref={blogInput}
          />
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
          ref={storeInput}
        />
      </Styled.InputSet>
      <Styled.InputSet>
        <label htmlFor="image">사진</label>
        {/* <input type="file" accept="image/*" multiple onChange={handleImageUpload} /> */}
        <Styled.FileInput
          accept="image/*"
          id="previewImage"
          type="file"
          multiple
          onChange={handleImageUpload}
          ref={imageInput}
        />
        <Styled.Label htmlFor="previewImage">Select</Styled.Label>
      </Styled.InputSet>
      <Styled.imageWrapperList>
        {imageList?.map((item, idx) => {
          return (
            <Styled.ImageWrapper key={idx}>
              <LazyLoadImage
                src={item?.preview ? item?.preview : item}
                alt="소품샵 이미지"
                width={180}
                height={130}
                effect="blur"
              />
              <Styled.XButton id={idx.toString()} onClick={handleImageClick}>
                𝖷
              </Styled.XButton>
            </Styled.ImageWrapper>
          );
        })}
      </Styled.imageWrapperList>
      <Button width="100%" height="45px" onClick={handleSubmit}>
        소품샵 등록 완료
      </Button>
    </Styled.Root>
  );
}

export default ShopForm;

const Styled = {
  Root: styled.form`
    & > button {
      margin-top: 18px;
    }
    display: flex;
    flex-direction: column;
    align-items: space-between;
    height: 90vh;
    justify-content: space-around;
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
    margin-top: 12px;
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
  FileInput: styled.input`
    display: none;
    visibility: hidden;
    border-radius: 8px;
    width: 50px;
    height: 30px;
  `,
  Label: styled.label`
    width: 90px;
    height: 30px;
    border-radius: 8px;
    background-color: #abacfe;
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
