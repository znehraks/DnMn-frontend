import { Input as AntdInput, InputProps } from "antd";

interface IInputProps extends InputProps{
}

function Normal (props:IInputProps) {
    return <AntdInput {...props}/>
}

const Input = {
    Normal
}

export default Input