import Skeleton from '@/components/@atoms/Skeleton';
import { Divider } from 'antd';

function ShowcasePage() {
  return (
    <div>
      <Skeleton.Avatar />
      <Divider />
      <Skeleton.Square />
      <Divider />
      <Skeleton.Input />
      <Divider />
      <Skeleton.Paragraph />
      <Divider />
      <Skeleton.Image />
      <Divider />
      <Skeleton.DotChart />
      <Divider />
      <Skeleton.BarChart />
    </div>
  );
}

export default ShowcasePage;
