import FormInput from './FormInput';

export default function Form(props: FormProps) {
    // const config: FormInputProps = {
    //     forLabel: "fname",
    //     labelTxt: "First Name",
    //     id: "fname",
    //     name: "fname",
    //     inputType: "text"
    // };

    return (
        <div className="input-form center">
            <h1 className="txt-center">Register Today to Get Started!</h1>
            <form onSubmit={props.handleSubmit}>
                <FormInput 
                    forLabel="fname" 
                    labelTxt="First Name"
                    id="fname"
                    name="fname"
                    inputType="text"
                />
                <FormInput 
                    forLabel="lname" 
                    labelTxt="Last Name"
                    id="lname"
                    name="lname"
                    inputType="text"
                />
                <FormInput 
                    forLabel="email"
                    labelTxt="Email"
                    id="email"
                    name="email"
                    inputType="email"
                />
            </form>
        </div>
    );
}