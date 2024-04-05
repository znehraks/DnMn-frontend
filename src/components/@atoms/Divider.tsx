import { Divider as AntdDivider, DividerProps } from "antd";

interface IDividerProps extends DividerProps{

}
function Normal (props:IDividerProps) {
    return <AntdDivider {...props}/>
}

const Divider = {
    Normal
}

export default Divider