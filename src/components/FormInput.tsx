
export default function FormInput(props: FormInputProps) {
    const { 
        forLabel,
        labelTxt,
        id,
        name,
        inputType
    } = props;

    return (
        <div className="form-group">
            <label htmlFor={forLabel}>{labelTxt}</label>
            <input type={inputType} id={id} name={name} />
        </div>
    );
}