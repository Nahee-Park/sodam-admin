import styled from 'styled-components';
import useRefreshLogin from '@hooks/useRefreshLogin';
import useShopAnalyzeData from '@hooks/useShopAnalyzeData';
import { StyledEngineProvider } from '@mui/styled-engine-sc';
import React from 'react';
import ThemePiechart from './ThemePiechart';
import { categoryType, themeType } from '@types';
import CategoryPiechart from './CategoryPiechart';
import BarChart from './BarChart';

function DashboardSection() {
  useRefreshLogin();
  const allAnalyzData = useShopAnalyzeData();
  console.log('allAnalyzData', allAnalyzData);
  const themeData = [
    {
      id: allAnalyzData?.data?.shopThemeCount[0]?.name as themeType,
      label: allAnalyzData?.data?.shopThemeCount[0]?.name as themeType,
      value: allAnalyzData?.data?.shopThemeCount[0]?.count,
      color: 'hsl(56, 70%, 50%)',
    },
    {
      id: allAnalyzData?.data?.shopThemeCount[1]?.name as themeType,
      label: allAnalyzData?.data?.shopThemeCount[1]?.name as themeType,
      value: allAnalyzData?.data?.shopThemeCount[1]?.count,
      color: 'hsl(353, 70%, 50%)',
    },
    {
      id: allAnalyzData?.data?.shopThemeCount[2]?.name as themeType,
      label: allAnalyzData?.data?.shopThemeCount[2]?.name as themeType,
      value: allAnalyzData?.data?.shopThemeCount[2]?.count,
      color: 'hsl(238, 70%, 50%)',
    },
    {
      id: allAnalyzData?.data?.shopThemeCount[3]?.name as themeType,
      label: allAnalyzData?.data?.shopThemeCount[3]?.name as themeType,
      value: allAnalyzData?.data?.shopThemeCount[3]?.count,
      color: 'hsl(313, 70%, 50%)',
    },
  ];

  const categoryData = [
    {
      id: allAnalyzData?.data?.shopCategoryCount[0]?.name as categoryType,
      label: allAnalyzData?.data?.shopCategoryCount[0]?.name as categoryType,
      value: allAnalyzData?.data?.shopCategoryCount[0]?.count,
      color: 'hsl(340, 70%, 50%)',
    },
    {
      id: allAnalyzData?.data?.shopCategoryCount[1]?.name as categoryType,
      label: allAnalyzData?.data?.shopCategoryCount[1]?.name as categoryType,
      value: allAnalyzData?.data?.shopCategoryCount[1]?.count,
      color: 'hsl(239, 70%, 50%)',
    },
    {
      id: allAnalyzData?.data?.shopCategoryCount[2]?.name as categoryType,
      label: allAnalyzData?.data?.shopCategoryCount[2]?.name as categoryType,
      value: allAnalyzData?.data?.shopCategoryCount[2]?.count,
      color: 'hsl(254, 70%, 50%)',
    },
    {
      id: allAnalyzData?.data?.shopCategoryCount[3]?.name as categoryType,
      label: allAnalyzData?.data?.shopCategoryCount[3]?.name as categoryType,
      value: allAnalyzData?.data?.shopCategoryCount[3]?.count,
      color: 'hsl(48, 70%, 50%)',
    },
    {
      id: allAnalyzData?.data?.shopCategoryCount[4]?.name as categoryType,
      label: allAnalyzData?.data?.shopCategoryCount[4]?.name as categoryType,
      value: allAnalyzData?.data?.shopCategoryCount[4]?.count,
      color: 'hsl(209, 70%, 50%)',
    },
    {
      id: allAnalyzData?.data?.shopCategoryCount[5]?.name as categoryType,
      label: allAnalyzData?.data?.shopCategoryCount[5]?.name as categoryType,
      value: allAnalyzData?.data?.shopCategoryCount[5]?.count,
      color: 'hsl(373, 70%, 50%)',
    },
  ];

  const areaData = [
    {
      shopName: allAnalyzData?.data?.shopAreaCount[0]?.name,
      shopCount: allAnalyzData?.data?.shopAreaCount[0]?.count,
      shopColor: 'hsl(271, 70%, 50%)',
    },
    {
      shopName: allAnalyzData?.data?.shopAreaCount[1]?.name,
      shopCount: allAnalyzData?.data?.shopAreaCount[1]?.count,
      shopColor: 'hsl(86, 70%, 50%)',
    },
    {
      shopName: allAnalyzData?.data?.shopAreaCount[2]?.name,
      shopCount: allAnalyzData?.data?.shopAreaCount[2]?.count,
      shopColor: 'hsl(207, 70%, 50%)',
    },
    {
      shopName: allAnalyzData?.data?.shopAreaCount[3]?.name,
      shopCount: allAnalyzData?.data?.shopAreaCount[3]?.count,
      shopColor: 'hsl(226, 70%, 50%)',
    },
    {
      shopName: allAnalyzData?.data?.shopAreaCount[4]?.name,
      shopCount: allAnalyzData?.data?.shopAreaCount[4]?.count,
      shopColor: 'hsl(307, 70%, 50%)',
    },
    {
      shopName: allAnalyzData?.data?.shopAreaCount[5]?.name,
      shopCount: allAnalyzData?.data?.shopAreaCount[5]?.count,
      shopColor: 'hsl(25, 70%, 50%)',
    },
    {
      shopName: allAnalyzData?.data?.shopAreaCount[6]?.name,
      shopCount: allAnalyzData?.data?.shopAreaCount[6]?.count,
      shopColor: 'hsl(86, 70%, 50%)',
    },
    {
      shopName: allAnalyzData?.data?.shopAreaCount[7]?.name,
      shopCount: allAnalyzData?.data?.shopAreaCount[7]?.count,
      shopColor: 'hsl(2, 70%, 50%)',
    },
    {
      shopName: allAnalyzData?.data?.shopAreaCount[8]?.name,
      shopCount: allAnalyzData?.data?.shopAreaCount[8]?.count,
      shopColor: 'hsl(282, 70%, 50%)',
    },
    {
      shopName: allAnalyzData?.data?.shopAreaCount[9]?.name,
      shopCount: allAnalyzData?.data?.shopAreaCount[9]?.count,
      shopColor: 'hsl(149, 70%, 50%)',
    },
    {
      shopName: allAnalyzData?.data?.shopAreaCount[10]?.name,
      shopCount: allAnalyzData?.data?.shopAreaCount[10]?.count,
      shopColor: 'hsl(17, 70%, 50%)',
    },
    {
      shopName: allAnalyzData?.data?.shopAreaCount[11]?.name,
      shopCount: allAnalyzData?.data?.shopAreaCount[11]?.count,
      shopColor: 'hsl(126, 70%, 50%)',
    },
    {
      shopName: allAnalyzData?.data?.shopAreaCount[12]?.name,
      shopCount: allAnalyzData?.data?.shopAreaCount[12]?.count,
      shopColor: 'hsl(249, 70%, 50%)',
    },
    {
      shopName: allAnalyzData?.data?.shopAreaCount[13]?.name,
      shopCount: allAnalyzData?.data?.shopAreaCount[13]?.count,
      shopColor: 'hsl(230, 70%, 50%)',
    },
    {
      shopName: allAnalyzData?.data?.shopAreaCount[14]?.name,
      shopCount: allAnalyzData?.data?.shopAreaCount[14]?.count,
      shopColor: 'hsl(240, 70%, 50%)',
    },
    {
      shopName: allAnalyzData?.data?.shopAreaCount[15]?.name,
      shopCount: allAnalyzData?.data?.shopAreaCount[15]?.count,
      shopColor: 'hsl(312, 70%, 50%)',
    },
    {
      shopName: allAnalyzData?.data?.shopAreaCount[16]?.name,
      shopCount: allAnalyzData?.data?.shopAreaCount[16]?.count,
      shopColor: 'hsl(65, 70%, 50%)',
    },
    {
      shopName: allAnalyzData?.data?.shopAreaCount[17]?.name,
      shopCount: allAnalyzData?.data?.shopAreaCount[17]?.count,
      shopColor: 'hsl(173, 70%, 50%)',
    },
    {
      shopName: allAnalyzData?.data?.shopAreaCount[18]?.name,
      shopCount: allAnalyzData?.data?.shopAreaCount[18]?.count,
      shopColor: 'hsl(93, 70%, 50%)',
    },
    {
      shopName: allAnalyzData?.data?.shopAreaCount[19]?.name,
      shopCount: allAnalyzData?.data?.shopAreaCount[19]?.count,
      shopColor: 'hsl(303, 70%, 50%)',
    },
    {
      shopName: allAnalyzData?.data?.shopAreaCount[20]?.name,
      shopCount: allAnalyzData?.data?.shopAreaCount[20]?.count,
      shopColor: 'hsl(297, 70%, 50%)',
    },
    {
      shopName: allAnalyzData?.data?.shopAreaCount[21]?.name,
      shopCount: allAnalyzData?.data?.shopAreaCount[21]?.count,
      shopColor: 'hsl(149, 70%, 50%)',
    },
  ];
  return (
    <Styled.Root>
      {/* <Styled.TotalInfo>
        <Styled.TotalInfoTitle>
          전체 소품샵의 수 : {allAnalyzData?.data?.allShopCount[0]?.count}
        </Styled.TotalInfoTitle>
        <Styled.TotalInfoTitle>
          전체 리뷰 수 : {allAnalyzData?.data?.allReviewCount[0]?.count}
        </Styled.TotalInfoTitle>
      </Styled.TotalInfo> */}
      <Styled.ChartWrapper>
        <Styled.ThemePieChart>
          <Styled.Title>테마별 소품샵</Styled.Title>
          <ThemePiechart data={themeData} />
        </Styled.ThemePieChart>
        <Styled.CategoryPieChart>
          <Styled.Title>카테고리별 소품샵</Styled.Title>
          <CategoryPiechart data={categoryData} />
        </Styled.CategoryPieChart>
      </Styled.ChartWrapper>
      <Styled.BarChart>
        <Styled.Title>지역별 소품샵</Styled.Title>
        <BarChart data={areaData} />
      </Styled.BarChart>
    </Styled.Root>
  );
}

export default DashboardSection;

const Styled = {
  Root: styled.section`
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  TotalInfo: styled.section`
    display: flex;
    width: 90%;
    flex-direction: column;
    align-items: flex-start;
  `,
  TotalInfoTitle: styled.section`
    font-size: 1rem;
  `,
  InfoBox: styled.article`
    height: 100px;
    width: 49%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    border-radius: 16px;
    min-width: 405px;
    border: 1px solid #e9e8eb;
  `,
  Title: styled.h2`
    color: #525050;
    margin: 0px 0px;
    font-size: 20px;
  `,
  ThemePieChart: styled.article`
    height: 400px;
    /* width: 35%; */
    width: 44%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    border-radius: 16px;
    min-width: 405px;
    border: 1px solid #e9e8eb;
    & > div {
      height: 80% !important;
      left: 20px;
      position: relative;
    }
  `,
  CategoryPieChart: styled.article`
    height: 400px;
    /* width: 45%; */
    width: 54%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    border-radius: 16px;
    min-width: 605px;
    border: 1px solid #e9e8eb;
    & > div {
      height: 80% !important;
      left: 20px;
      position: relative;
    }
  `,
  ChartWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
  `,
  BarChart: styled.article`
    height: 400px;
    width: 90%;
    margin-top: 16px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    border-radius: 16px;
    border: 1px solid #e9e8eb;
    min-width: 1010px;
    & > div {
      height: 80% !important;
      left: 20px;
      position: relative;
    }
  `,
};
