import { Skeleton as AntdSkeleton} from "antd";

// TODO 스켈레톤을 사용할 Loading UI에 해당하는 종류로만 구성해서 바로 사용할 수 있도록 구성
function Avatar () {
    return <AntdSkeleton />
}

const Skeleton = {
    Avatar
}


export default Skeleton