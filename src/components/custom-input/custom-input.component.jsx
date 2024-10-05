import './custom-input.styles.scss'

const CustomInput = ({ className, ...otherProps }) => {    
    
    return (
        <div {...otherProps}>
            <fieldset className='custom-form'>
                <input className={`form-input ${className}`}
                    {...otherProps}
                />
            </fieldset>
            
        </div>
    )
}

export default CustomInput