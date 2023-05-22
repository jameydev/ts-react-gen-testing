
export default function FormInput(props: FormInputProps) {
    const { 
        forLabel,
        labelTxt,
        id,
        name,
        inputType,
        pattern,
        placeholder
    } = props;

    return (
        <div className="form-group">
            <label htmlFor={forLabel}>{labelTxt}</label>
            <input type={inputType} id={id} name={name} pattern={pattern} placeholder={placeholder}/>
        </div>
    );
}