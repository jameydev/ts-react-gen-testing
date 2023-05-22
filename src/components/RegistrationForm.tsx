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
                    placeholder="Your first name"
                />
                <FormInput 
                    forLabel="lname" 
                    labelTxt="Last Name"
                    id="lname"
                    name="lname"
                    inputType="text"
                    placeholder="Your last name"
                />
                <FormInput 
                    forLabel="email"
                    labelTxt="Email"
                    id="email"
                    name="email"
                    inputType="email"
                    placeholder="your.name@example.com"
                />
            </form>
        </div>
    );
}