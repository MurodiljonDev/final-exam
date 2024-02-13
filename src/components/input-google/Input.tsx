import "./Input.scss"
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import BasicSelect from "../basic-select/BasicSelect";
import { useDispatch } from "react-redux";
import { searchReducer } from "../../redux/slice/homePage";

export default function Input() {
    const dispatch = useDispatch()
    return (
        <form noValidate autoComplete="off">
            <FormControl sx={{ width: '100ch', padding:'5px',}}>
                <div className="input_box">
                    <OutlinedInput onChange={(e:any) => dispatch(searchReducer(e.target.value))}  className="Input_Control" placeholder="Search Fonts" />
                    <BasicSelect />
                </div>
            </FormControl>
        </form>
    );
}
