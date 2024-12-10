function Button({ name, icon }: { name: string; icon: string }) {
    return (
        <button className="button" aria-label={name}>
            <div className="icon-wrapper">
                <img src={icon} alt={`${name} icon`} className="icon" />
            </div>
            <span className="button-text">{name}</span>
        </button>
    );
}

export default Button;
