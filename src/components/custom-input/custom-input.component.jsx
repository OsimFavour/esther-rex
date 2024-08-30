import './custom-input.styles.scss'

const CustomInput = ({ otherProps, placeholder }) => {
    console.log(`Placeholder >>> ${placeholder}`);
    
    return (
        <div {...otherProps}>
            <fieldset className='custom-form'>
                <input className="form-input"
                    {...otherProps}
                    placeholder={placeholder}
                />
            </fieldset>
            
        </div>
    )
}

export default CustomInput