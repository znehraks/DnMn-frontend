import { ColorKeys } from '@/styles/designSystem';
import { Typography as AntdTypography } from 'antd';
import { ParagraphProps } from 'antd/es/typography/Paragraph';
import React, { useMemo } from 'react';

// TODO 사용할 텍스트의 용도별, 종류별로 구성 후, 컬러팔레트에서 가져와서 구성
const { Title: AntdTitle, Paragraph: AntdParagraph } = AntdTypography;

interface ITitleProps extends React.PropsWithChildren {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color: ColorKeys;
}

function Title({ type, color, children }: ITitleProps) {
  const level = useMemo(() => {
    switch (type) {
      case 'h1':
        return 1;
      case 'h2':
        return 2;
      case 'h3':
        return 3;
      case 'h4':
        return 4;
      case 'h5':
        return 5;
      default:
        return 1;
    }
  }, [type]);

  return (
    <AntdTitle level={level} css={{ color }}>
      {children}
    </AntdTitle>
  );
}

interface IParagraphProps extends ParagraphProps {
  color: ColorKeys;
}
function Paragraph(props: IParagraphProps) {
  return <AntdParagraph {...props} css={{ color: props.color }} />;
}

const Typography = {
  Title,
  Paragraph,
};

export default Typography;
