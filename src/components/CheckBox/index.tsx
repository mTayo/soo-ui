
import CheckBox from 'react-native-check-box'


export default function CheckBoxField(props: CheckBoxType) {
    const {children, onChange, value} = props;
   
    return (
        <CheckBox
            style={{padding: 0}}
            checkBoxColor="#253BFF"
            onClick={()=>onChange()}
            isChecked={value}
            rightTextView={
                children
            }
        />
    );
  }