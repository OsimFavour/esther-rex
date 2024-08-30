import './custom-input.styles.scss'

const CustomInput = ({ otherProps }) => {
    return (
        <div {...otherProps}>
            <fieldset className='custom-form'>
                <input className="form-input"
                    {...otherProps}
                />
            </fieldset>
            
        </div>
    )
}

export default CustomInput