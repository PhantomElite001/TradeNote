export default function Button({onClick,text,type}){
    return(
        <button type='button' onClick={onClick} className="btn-${variant}"></button>
        )
}