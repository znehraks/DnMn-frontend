import { Checkbox as AntdCheckbox, CheckboxProps } from "antd";
import { CheckboxGroupProps } from "antd/es/checkbox";

interface ICheckboxProps extends  CheckboxProps{
}

interface ICheckboxGroupProps extends  CheckboxGroupProps{
}
function Normal (props:ICheckboxProps) {
    return <AntdCheckbox {...props}/>
}

function Group (props:ICheckboxGroupProps) {
    return <AntdCheckbox.Group {...props}/>
}

const Checkbox = {
    Normal,
    Group
}

export default Checkbox