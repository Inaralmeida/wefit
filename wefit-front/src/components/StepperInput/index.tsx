import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { StylesStepperInput } from './StepperInput.styles';

interface IStepperInput {
  defaulValue: number, 
  add: ()=> void | undefined, 
  remove:()=> void | undefined
}

const StepperInput = ({defaulValue, add, remove}:IStepperInput) => {
  return (
    <StylesStepperInput>
      <RemoveCircleOutlineIcon fontSize='small' cursor='pointer' onClick={remove} color='primary'/>
      <input type="number" value={defaulValue}/>
      <AddCircleOutlineIcon fontSize='small' cursor='pointer'onClick={add}  color='primary'/>
    </StylesStepperInput>
  )
}

export default StepperInput