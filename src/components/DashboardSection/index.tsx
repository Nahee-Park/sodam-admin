import styled from 'styled-components';
import useRefreshLogin from '@hooks/useRefreshLogin';
import useShopAnalyzeData from '@hooks/useShopAnalyzeData';
import { StyledEngineProvider } from '@mui/styled-engine-sc';
import React from 'react';
import ThemePiechart from './ThemePiechart';
import { categoryType, themeType } from '@types';

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
  return (
    <Styled.Root>
      <Styled.ChartWrapper>
        <Styled.ThemePieChart>
          <Styled.Title>테마별 소품샵</Styled.Title>
          <ThemePiechart data={themeData} />
        </Styled.ThemePieChart>
        <Styled.CategoryPieChart>
          <Styled.Title>카테고리별 소품샵</Styled.Title>
          <ThemePiechart data={categoryData} />
        </Styled.CategoryPieChart>
      </Styled.ChartWrapper>
    </Styled.Root>
  );
}

export default DashboardSection;

const Styled = {
  Root: styled.section`
    height: fit-content;
    width: 100%;
  `,
  Title: styled.h2`
    color: #525050;
    margin: 0px 0px;
    font-size: 20px;
  `,
  ThemePieChart: styled.article`
    height: 400px;
    width: 35%;
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
    width: 45%;
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
    justify-content: space-around;
    width: 100%;
  `,
};
