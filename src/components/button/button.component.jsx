import './button.styles.scss'

export const BUTTON_TYPE_CLASSES = {
    google: "google-button",
    inverted: "invert-button",
    landing: "landing-button"
}

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button