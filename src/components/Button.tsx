function Button({name, icon} : {name: string, icon: string}) {
    return (
        <div className="button">
            <div>
                <img src={icon} alt="icon" className="icon"/>
            </div>
            {name}
        </div>
    )
}

export default Button