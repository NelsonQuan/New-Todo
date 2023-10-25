function SecondaryButton({children,btnClass,onClick}) {
    return (
        <button type="button" className={`button1 btn-${btnClass}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default SecondaryButton;