import useTheme from '@/hooks/useMediaQuery';
import { BarChartOutlined, DotChartOutlined } from '@ant-design/icons';
import { Skeleton as AntdSkeleton } from 'antd';

// TODO 스켈레톤을 사용할 Loading UI에 해당하는 종류로만 구성해서 바로 사용할 수 있도록 구성
function Avatar() {
  return <AntdSkeleton.Avatar active />;
}

function Square() {
  return <AntdSkeleton.Button active />;
}

function Input() {
  return <AntdSkeleton.Input active />;
}

function Paragraph() {
  return <AntdSkeleton active paragraph={{ rows: 4 }} />;
}

function Image() {
  return <AntdSkeleton.Image active />;
}

function DotChart() {
  const theme = useTheme();
  return (
    <AntdSkeleton.Node active>
      <DotChartOutlined css={{ color: theme.grey400, fontSize: 50 }} />
    </AntdSkeleton.Node>
  );
}

function BarChart() {
  const theme = useTheme();
  return (
    <AntdSkeleton.Node active>
      <BarChartOutlined css={{ color: theme.grey400, fontSize: 50 }} />
    </AntdSkeleton.Node>
  );
}

const Skeleton = {
  Avatar,
  Square,
  Input,
  Paragraph,
  Image,
  DotChart,
  BarChart,
};

export default Skeleton;
