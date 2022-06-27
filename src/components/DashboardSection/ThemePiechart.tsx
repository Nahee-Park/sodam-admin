import { ResponsivePie } from '@nivo/pie';
import { themeType } from '@types';
import React from 'react';

interface PiechartFormat {
  id: themeType;
  label: themeType;
  value?: number;
  color: string;
}
const ThemePiechart = ({ data }: { data: PiechartFormat[] }) => {
  console.log('>>>>>>>>>>>차트데이터', data);
  return (
    <>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 2]],
        }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: '빈티지',
            },
            id: 'dots',
          },
          {
            match: {
              id: '아기자기한',
            },
            id: 'dots',
          },
          // {
          //   match: {
          //     id: '힙한',
          //   },
          //   id: 'dots',
          // },
          // {
          //   match: {
          //     id: '모던한',
          //   },
          //   id: 'dots',
          // },
          // {
          //   match: {
          //     id: 'scala',
          //   },
          //   id: 'lines',
          // },
          {
            match: {
              id: '힙한',
            },
            id: 'lines',
          },
          {
            match: {
              id: '모던한',
            },
            id: 'lines',
          },
          // {
          //   match: {
          //     id: 'javascript',
          //   },
          //   id: 'lines',
          // },
        ]}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default ThemePiechart;
